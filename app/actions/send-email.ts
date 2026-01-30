"use server"

import { Resend } from "resend"
import { z } from "zod"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data)

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not defined")
      return { success: false, error: "Email service is not configured. Please try again later." }
    }

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "madancse.gcem@gmail.com",
      replyTo: validatedData.email,
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 8px;">
          <h2 style="color: #00d4ff; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${escapeHtml(validatedData.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(validatedData.email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(validatedData.subject)}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 4px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${escapeHtml(validatedData.message)}</p>
          </div>
          <div style="margin-top: 30px; font-size: 12px; color: #64748b; text-align: center;">
            Sent from your portfolio website
          </div>
        </div>
      `,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return { success: false, error: result.error.message || "Failed to send email" }
    }

    console.log("Email sent successfully:", result.data?.id)
    return { success: true, data: result.data }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
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
