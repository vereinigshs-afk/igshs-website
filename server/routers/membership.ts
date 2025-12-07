import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { createMembershipApplication, getAllMembershipApplications, updateMembershipApplicationStatus } from "../db";
import { notifyOwner } from "../_core/notification";

const membershipApplicationSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich"),
  lastName: z.string().min(1, "Nachname ist erforderlich"),
  address: z.string().min(1, "Adresse ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
});

export const membershipRouter = router({
  /**
   * Submit a new membership application
   */
  submit: publicProcedure
    .input(membershipApplicationSchema)
    .mutation(async ({ input }) => {
      // Save to database
      await createMembershipApplication({
        firstName: input.firstName,
        lastName: input.lastName,
        address: input.address,
        email: input.email,
      });

      // Send notification to owner
      const notificationSent = await notifyOwner({
        title: "Neue Mitgliedschafts-Anmeldung",
        content: `
**Neue Mitgliedschafts-Anmeldung eingegangen:**

**Name:** ${input.firstName} ${input.lastName}
**E-Mail:** ${input.email}
**Adresse:** ${input.address}

Bitte überprüfen Sie die Anmeldung im Admin-Bereich.
        `.trim(),
      });

      // Also send email to vereinigshs@gmail.com
      // Note: This will be implemented via SMTP once credentials are provided
      
      return {
        success: true,
        notificationSent,
      };
    }),

  /**
   * Get all membership applications (admin only)
   */
  list: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Nur Administratoren können Mitgliedschafts-Anmeldungen einsehen.",
      });
    }
    return await getAllMembershipApplications();
  }),

  /**
   * Update membership application status (admin only)
   */
  updateStatus: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["pending", "approved", "rejected"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Nur Administratoren können den Status ändern.",
        });
      }

      await updateMembershipApplicationStatus(input.id, input.status);

      return {
        success: true,
      };
    }),
});
