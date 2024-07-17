"use server";
import { ContactFormEmail } from "@/emails/Contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utiles";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const getData = async (formdata: FormData) => {
  const senderEmail = formdata.get("senderEmail");
  const message = formdata.get("description");

  console.log(senderEmail);
  console.log(message);

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

  try {
    resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      reply_to: senderEmail as string,
      to: "hanymohamedsaadeldean@gmail.com",
      subject: "Message from contact form",
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
