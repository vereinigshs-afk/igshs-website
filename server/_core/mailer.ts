import nodemailer from "nodemailer";
import { ENV } from "./env";

let transporter: nodemailer.Transporter | null = null;

/**
 * Initialize nodemailer transporter with Gmail credentials
 */
function getTransporter(): nodemailer.Transporter {
  if (transporter) {
    return transporter;
  }

  // Use Gmail SMTP with app-specific password
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.IGSHS_GMAIL_USER || "vereinigshs@gmail.com",
      pass: process.env.IGSHS_GMAIL_PASSWORD || "",
    },
  });

  return transporter;
}

export interface MembershipEmailData {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
}

/**
 * Send membership application email to vereinigshs@gmail.com
 */
export async function sendMembershipEmail(data: MembershipEmailData): Promise<boolean> {
  try {
    const transporter = getTransporter();

    // Check if Gmail credentials are configured
    if (!process.env.IGSHS_GMAIL_USER || !process.env.IGSHS_GMAIL_PASSWORD) {
      console.warn("[Mailer] Gmail credentials not configured in environment");
      return false;
    }

    const emailContent = `
Neue Mitgliedschafts-Anmeldung eingegangen:

Vorname: ${data.firstName}
Nachname: ${data.lastName}
E-Mail: ${data.email}
Adresse: 
${data.address}

---
Diese E-Mail wurde automatisch generiert von der IGSHS Website.
    `.trim();

    const mailOptions = {
      from: process.env.IGSHS_GMAIL_USER,
      to: "vereinigshs@gmail.com",
      subject: `Neue Mitgliedschafts-Anmeldung: ${data.firstName} ${data.lastName}`,
      text: emailContent,
      html: `
        <h2>Neue Mitgliedschafts-Anmeldung</h2>
        <p><strong>Vorname:</strong> ${escapeHtml(data.firstName)}</p>
        <p><strong>Nachname:</strong> ${escapeHtml(data.lastName)}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
        <p><strong>Adresse:</strong></p>
        <pre>${escapeHtml(data.address)}</pre>
        <hr>
        <p><small>Diese E-Mail wurde automatisch generiert von der IGSHS Website.</small></p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("[Mailer] Membership email sent:", result.response);
    return true;
  } catch (error) {
    console.error("[Mailer] Failed to send membership email:", error);
    return false;
  }
}

/**
 * Escape HTML to prevent injection
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
