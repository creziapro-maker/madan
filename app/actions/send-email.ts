"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return { success: false, error: "Email service is not configured. Please try again later." }
    }

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "madancse.gcem@gmail.com",
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
        <h3>Message:</h3>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return { success: false, error: result.error.message || "Failed to send email" }
    }

    console.log("Email sent successfully:", result.data?.id)
    return { success: true, data: result.data }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    console.error("Email sending error:", errorMessage)
    return { success: false, error: errorMessage }
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
