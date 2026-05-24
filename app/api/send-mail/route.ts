import { NextResponse } from "next/server";
import { callbackEmailTemplate } from "@/emails/CallbackEmail";
import resend from "@/lib/resend";
import { contactEmailTemplate } from "@/emails/ContactEmail";

const mailTo:string = process.env.MAIL_TO || "";
const mailFrom:string = process.env.MAIL_FROM || "";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let template;

    if(body.type === "callback") {
      template = callbackEmailTemplate(body);
    } else if(body.type === "contact") {
      template = contactEmailTemplate(body);
    } else {
      return NextResponse.json(
        { error: "Invalid request type" },
        { status: 400 }
      );
    }

    console.log({
      body, mailFrom, mailTo
    })

    console.log(template)

    const { data, error } = await resend.emails.send({
      from: mailFrom,
      to: mailTo,
      subject: "New Callback Request",
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




