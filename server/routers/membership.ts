import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { createMembershipApplication, getAllMembershipApplications } from "../db";
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
   * Get all membership applications (admin only in future)
   */
  list: publicProcedure.query(async () => {
    return await getAllMembershipApplications();
  }),
});
