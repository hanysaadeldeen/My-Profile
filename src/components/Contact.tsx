"use client";
import React from "react";
import SectionName from "./SectionName";
import { useSectionInView } from "@/lib/hook";

export const Contact = () => {
  const ref = useSectionInView(0.15, "Contact");
  return (
    <section ref={ref} id="contact" className="mb-28 scroll-mt-28">
      <SectionName>Contact Me </SectionName>
      <p
        className=" 
      max-md:text-center
      text-gray-700 -mt-6 "
      >
        Please contact me directly at{" "}
        <a
          className="underline"
          href="mailto: hanymohamedsaadeldean@gmail.com "
        >
          hanymohamedsaadeldean@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action="" className="flex flex-col mt-10">
        <input
          className="h-14 p-4 rounded-lg  border outline-none  transition-all "
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 mt-5 resize-none transition-all p-4 outline-none rounded-lg border"
          placeholder="Your Message"
        />
        <button className="rounded-full w-fit py-3 px-6 text-white mt-3 max-sm:w-full bg-black">
          Submit
        </button>
      </form>
    </section>
  );
};
