// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { siteConfig } from "@/lib/config/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, company } = body ?? {};

    // Honeypot field: real visitors never see or fill this input; bots usually fill every field.
    if (typeof company === "string" && company.trim()) {
      return NextResponse.json({ success: true });
    }

    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Contact form: RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: `Email sending isn't configured yet. Please reach out directly at ${siteConfig.email}.` },
        { status: 500 }
      );
    }

    const safeSubject = (typeof subject === "string" && subject.trim()) || "New message from your portfolio";

    // Without a verified domain, Resend only delivers to the email the account was
    // registered with — so the inbox address must be the Resend account email, which
    // may differ from the public contact address in siteConfig.
    const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email.trim(),
      subject: `[Portfolio] ${safeSubject}`,
      text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send your message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
