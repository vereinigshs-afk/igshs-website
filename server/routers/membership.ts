import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { sendMembershipEmail } from "../_core/mailer";

const membershipApplicationSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich").max(100, "Vorname ist zu lang"),
  lastName: z.string().min(1, "Nachname ist erforderlich").max(100, "Nachname ist zu lang"),
  address: z.string().min(1, "Adresse ist erforderlich").max(500, "Adresse ist zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse").max(200, "E-Mail ist zu lang"),
});

export const membershipRouter = router({
  /**
   * Submit a new membership application
   * Sends email to vereinigshs@gmail.com instead of storing in database
   */
  submit: publicProcedure
    .input(membershipApplicationSchema)
    .mutation(async ({ input }) => {
      try {
        // Send email to vereinigshs@gmail.com
        const emailSent = await sendMembershipEmail({
          firstName: input.firstName,
          lastName: input.lastName,
          address: input.address,
          email: input.email,
        });

        if (!emailSent) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Die Anmeldung konnte nicht versendet werden. Bitte versuchen Sie es später erneut.",
          });
        }

        return {
          success: true,
          message: "Vielen Dank! Ihre Anmeldung wurde erfolgreich empfangen. Sie erhalten in Kürze eine Bestätigungsemail.",
        };
      } catch (error) {
        console.error("[Membership] Error submitting application:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Ein Fehler ist bei der Verarbeitung Ihrer Anmeldung aufgetreten. Bitte versuchen Sie es später erneut.",
        });
      }
    }),

  /**
   * Get all membership applications (admin only)
   * NOTE: Not implemented - database not available
   * Applications are now sent via email to vereinigshs@gmail.com
   */
  list: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "Nur Administratoren können Mitgliedschafts-Anmeldungen einsehen.",
      });
    }
    throw new TRPCError({
      code: "UNAVAILABLE",
      message: "Admin-Funktionen sind derzeit nicht verfügbar. Anmeldungen werden per E-Mail versendet.",
    });
  }),

  /**
   * Update membership application status (admin only)
   * NOTE: Not implemented - database not available
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
      throw new TRPCError({
        code: "UNAVAILABLE",
        message: "Admin-Funktionen sind derzeit nicht verfügbar.",
      });
    }),
});
