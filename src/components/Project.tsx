"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group "
    >
      <Link href={link} target="_blank">
        <section
          className=" 
              group cursor-pointer
              rounded-md  flex items-center 
              p-4  bg-gray-100 relative overflow-hidden
              md:h-[24rem] max-md:h-fit max-sm:py-6
              transition hover:bg-gray-200 dark:bg-white/10 border-white/30 border border-gray-300
              "
        >
          <Image
            className="
        group-even:right-[initial] 
        group-even:-left-40
        
        absolute transition
        group-hover:scale-105 
        group-hover:-rotate-2 

        group-even:group-hover:rotate-2

        group-hover:-translate-x-3
        group-hover:translate-y-3

        group-even:group-hover:translate-y-3
        group-even:group-hover:translate-x-3

        shadow-2xl top-8 -right-40 hidden md:block md:w-[30rem] lg:w-[34rem] rounded-lg "
            src={imageUrl}
            alt={title}
            quality={95}
          />
          <div
            className="
        md:group-even:ml-[27rem]
        max-md:w-full md:pr-10 group-even:pr-0 max-md:text-center  md:w-1/2 md:pl-4"
          >
            <h2 className="mb-4  text-xl font-bold tracking-wide ">{title}</h2>
            <p className="mb-12 max-md:mb-8  max-sm:mb-5 leading-relaxed dark:text-white/50 text-gray-700">
              {description}
            </p>
            <ul className="max-md:justify-center flex gap-2 flex-wrap">
              {tags.map((skill, index) => {
                return (
                  <li
                    key={index}
                    className="text-white rounded-full py-2 px-4 text-xs uppercase dark:text-white dark:bg-gray-900 dark:group-hover:bg-gray-700   group-hover:bg-gray-900 transition bg-gray-700"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </Link>
    </motion.div>
  );
}

export default Project;
