import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      // Send actual email using Resend
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev", // In production, use your verified domain
            to: "abel.gedefaw@yahoo.com",
            subject: `Contact Form: ${subject}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to send email via Resend")
        }

        console.log("[v0] Email sent successfully via Resend")
      } catch (emailError) {
        console.error("[v0] Error sending email via Resend:", emailError)
        // Continue anyway to log the submission
      }
    } else {
      console.log("[v0] RESEND_API_KEY not configured - contact form submission logged only")
    }

    // Always log the contact form submission
    console.log("[v0] Contact form submission:", {
      name,
      email,
      phone,
      subject,
      message,
      recipient: "abel.gedefaw@yahoo.com",
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        recipient: "abel.gedefaw@yahoo.com",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
