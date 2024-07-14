"use client";
import React from "react";
import SectionName from "./SectionName";
import { useSectionInView } from "@/lib/hook";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { getData } from "../../actions/sendEmail";
export const Contact = () => {
  const ref = useSectionInView(0.11, "Contact");

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
      id="contact"
      className="mb-28 scroll-mt-28"
    >
      <SectionName>Contact Me </SectionName>
      <p
        className=" 
      max-md:text-center
      text-gray-600 -mt-3 "
      >
        Please contact me directly at{" "}
        <a
          className="underline text-gray-900 mx-2 "
          href="mailto: hanymohamedsaadeldean@gmail.com "
        >
          hanymohamedsaadeldean@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formdata) => await getData(formdata)}
        className="flex flex-col mt-10"
      >
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
          name="description"
        />
        <button
          className="group 
        hover:scale-105 transition-all
        flex items-center gap-3 rounded-full w-fit py-3 px-6 text-white mt-3 max-sm:w-full bg-black"
        >
          Submit{" "}
          <IoIosSend className="group-hover:-translate-y-1 transition-all text-xl opacity-80" />
        </button>
      </form>
    </motion.section>
  );
};
