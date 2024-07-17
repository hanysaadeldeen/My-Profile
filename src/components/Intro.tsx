"use client";

import Image from "next/image";
import me2 from "../assets/me2.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hook";
function Intro() {
  const ref = useSectionInView(0.15, "Home");

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 mx-auto  text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center ">
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={me2}
              priority={true}
              quality={90}
              alt="My-Image"
              className="w-28 h-28 border-4 border-white  rounded-full shadow-xl object-cover "
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute -bottom-2 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 max-sm:text-xl font-medium !leading-[1.5] text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I&apos;m Hany. I&apos;m a Front End developer with 1.5 years of
        experience. I enjoy building sites & apps.
        <span className="italic"> My focus is React & (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center gap-4 items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        <Link
          href={"#contact"}
          className="group rounded-full flex justify-center items-center gap-3 bg-gray-800 
            outline-none
          text-white font-bold  py-3 px-4 cursor-pointer
          focus:scale-110 hover:scale-110  hover:bg-gray-950 
          active:scale-105 transition
          
          "
        >
          Contact me here
          <span>
            <BsArrowRight className="opacity-70  group-hover:translate-x-1 transition" />
          </span>
        </Link>
        <a
          className="group bg-white dark:bg-opacity-20 dark:text-white px-7 py-3 flex items-center gap-2 rounded-full
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer  "
          href="/Hany-Mohamed.pdf"
          download
        >
          Download My CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/hany-saad-eldean-1b616625a/"
            target="_blank"
            className="bg-white p-4 group text-xl rounded-full dark:bg-white/10  dark:text-white   hover:scale-110 transition text-gray-700 hover:text-gray-950 "
          >
            <FaLinkedin className="group-hover:rotate-6 transition" />
          </a>
          <a
            href="https://github.com/hanysaadeldeen"
            target="_blank"
            className="group bg-white p-4 text-xl rounded-full dark:bg-white/10   dark:text-white  transition hover:scale-110  text-gray-700 hover:text-gray-950 "
          >
            <FaGithub className="group-hover:-rotate-6 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
