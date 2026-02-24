import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { sendContactEmail } from "../_core/mailer";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich").max(100, "Vorname ist zu lang"),
  lastName: z.string().min(1, "Name ist erforderlich").max(100, "Name ist zu lang"),
  email: z.string().email("Ungültige E-Mail-Adresse").max(200, "E-Mail ist zu lang"),
  category: z.string().min(1, "Kategorie ist erforderlich").max(100, "Kategorie ist zu lang"),
  message: z.string().min(1, "Nachricht ist erforderlich").max(5000, "Nachricht ist zu lang"),
  privacyAccepted: z.boolean().refine(val => val === true, "Datenschutzerklärung muss akzeptiert werden"),
});

export const contactRouter = router({
  /**
   * Submit contact form
   * Sends email to vereinigshs@gmail.com
   */
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        // Send email to vereinigshs@gmail.com
        const emailSent = await sendContactEmail({
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          category: input.category,
          message: input.message,
        });

        if (!emailSent) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Ihre Nachricht konnte nicht versendet werden. Bitte versuchen Sie es später erneut.",
          });
        }

        return {
          success: true,
          message: "Vielen Dank! Ihre Nachricht wurde erfolgreich empfangen. Wir werden uns in Kürze bei Ihnen melden.",
        };
      } catch (error) {
        console.error("[Contact] Error submitting form:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Ein Fehler ist bei der Verarbeitung Ihrer Nachricht aufgetreten. Bitte versuchen Sie es später erneut.",
        });
      }
    }),
});
