"use server";
import { validateString } from "@/lib/utiles";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const getData = async (formdata: FormData) => {
  const senderEmail = formdata.get("senderEmail");
  const message = formdata.get("description");

  if (!validateString(senderEmail)) {
    return {
      error: "invalid Email",
    };
  }
  if (!validateString(message)) {
    return {
      error: "invalid message",
    };
  }

  resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    reply_to: senderEmail as string,
    to: "hanymohamedsaadeldean@gmail.com",
    subject: "Message from contact form",
    text: message as string,
  });
};
