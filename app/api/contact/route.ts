// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, businessType, message } = body;
    if (!name || !email || !phone || !businessType || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service (Nodemailer, Resend, SendGrid, etc.)
    // TODO: Store in your database (PostgreSQL, MongoDB, etc.)
    // TODO: Send WhatsApp notification via Twilio/Gupshup

    // Simulate async processing
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("New contact enquiry:", { name, email, phone, businessType, message });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will contact you within 2 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
