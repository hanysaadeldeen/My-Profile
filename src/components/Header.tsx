"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header className="relative z-[999] ">
      <motion.div
        className="
            fixed top-7 max-sm:top-0 max-sm:text-sm left-1/2  w-fit
            sm:rounded-full max-sm:w-full 
            bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
      "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul
          className="flex max-sm:flex-wrap justify-center items-center  
        max-sm:gap-x-2 max-sm:gap-y-0 gap-4 max-sm:px-0   max-sm:py-1 py-1 px-2"
        >
          {links.map((link, index) => {
            return (
              <Link key={index} href={link.hash}>
                <li
                  className="hover:bg-gray-100  hover:text-gray-950  transition max-sm:gap-x-0 max-sm:gap-y-0 p-2 
                rounded-full text-gray-500  font-thin hover:cursor-pointer"
                >
                  {link.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </motion.div>
    </header>
  );
}
