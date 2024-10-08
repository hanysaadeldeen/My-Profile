"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import React from "react";
import Link from "next/link";
import { ActiveSectionfunc } from "@/context/ActiveSectionContextProvider";
export default function Header() {
  const { activeSection, secActiveSection, setTimeOfLastClick } =
    ActiveSectionfunc();

  return (
    <header className="relative z-[999] ">
      <motion.div
        className=" 
            fixed top-7 max-sm:top-0 max-sm:text-sm left-1/2  w-fit
            sm:rounded-full max-sm:w-full 
            bg-white  bg-opacity-80 shadow-lg dark:bg-gray-950 dark:border-black/40  text-white  shadow-black/[0.03] backdrop-blur-[0.5rem]
      "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul
          className="flex max-sm:flex-wrap justify-center items-center  
        max-sm:gap-x-2 max-sm:gap-y-0 gap-4 max-sm:px-0   max-sm:py-3 py-2 px-2"
        >
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.hash}
                onClick={() => {
                  secActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <motion.li
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className={
                    "hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white font-medium hover:text-gray-950 px-4 transition max-sm:gap-x-0 max-sm:gap-y-0 p-2 rounded-full text-gray-500    hover:cursor-pointer " +
                    (activeSection === link.name
                      ? "bg-gray-100 dark:bg-gray-700 dark:text-white  text-gray-950"
                      : "")
                  }
                >
                  {link.name}
                </motion.li>
              </Link>
            );
          })}
        </ul>
      </motion.div>
    </header>
  );
}
