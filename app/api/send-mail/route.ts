import { NextResponse } from "next/server";
import { callbackEmailTemplate } from "@/emails/CallbackEmail";
import resend from "@/lib/resend";
import { contactEmailTemplate } from "@/emails/ContactEmail";

const mailTo:string = process.env.RESEND_MAIL_TO || "";
const mailFrom:string = process.env.RESEND_FROM_EMAIL|| "";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let template;
    let subject;

    if(body.type === "callback") {
      template = callbackEmailTemplate(body);
      subject = "New Callback Request";
    } else if(body.type === "contact") {
      template = contactEmailTemplate(body);
      subject = "New Contact Message";
    } else {
      return NextResponse.json(
        { error: "Invalid request type" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: mailFrom,
      to: mailTo,
      subject: subject,
      html: template,
    });

    if (error) {
      return NextResponse.json(error, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong", logs: error },
      { status: 500 }
    );
  }
}




