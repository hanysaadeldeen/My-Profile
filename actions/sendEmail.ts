"use server";
import { ContactFormEmail } from "@/emails/Contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utiles";
import React from "react";
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

  let data;
  try {
    data = resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      reply_to: senderEmail as string,
      to: "hanymohamedsaadeldean@gmail.com",
      subject: "Message from contact form at Portfolio",
      text: message as string,
      // react: React.createElement(ContactFormEmail, {
      //   message: message as string,
      //   senderEmail: senderEmail as string,
      // }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
