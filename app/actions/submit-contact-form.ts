"use server";

import { serverClient } from "@/sanity/lib/serverClient";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = (formData.get("subject") as string) || "New contact form submission";
    const message = formData.get("message") as string;

    // Validate the required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields",
      };
    }

    // 1️⃣ Create the document in Sanity
    const result = await serverClient.create({
      _type: "contact",
      name,
      email,
      subject,
      message,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    // 2️⃣ Send email notification
    try {
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL as string,
        to: process.env.CONTACT_TO_EMAIL as string,
        subject: `Portfolio Contact: ${subject} (${name})`,
        replyTo: email, // so you can just hit "Reply" in your inbox
        text: `
You have a new contact form submission from your portfolio:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was also stored in Sanity with _id: ${result._id}
        `.trim(),
      });
    } catch (emailError) {
      // Don't block the user if email fails – just log it
      console.error("Error sending contact email:", emailError);
    }

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Failed to submit the form. Please try again later.",
    };
  }
}
