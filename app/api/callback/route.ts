// app/api/callback/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, reason } = body;

    if (!phone || !reason) {
      return NextResponse.json(
        { success: false, message: "Phone number and reason are required." },
        { status: 400 }
      );
    }

    // TODO: Send WhatsApp/SMS notification to the sales team
    // TODO: Log callback request in CRM/database
    // TODO: Trigger automated confirmation SMS to the client

    await new Promise((resolve) => setTimeout(resolve, 400));

    console.log("New callback request:", { name, phone, reason });

    return NextResponse.json(
      {
        success: true,
        message: "Callback request received! We will call you within 30 minutes.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Callback form error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
