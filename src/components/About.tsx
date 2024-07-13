"use client";
import { motion } from "framer-motion";
import SectionName from "./SectionName";
import { useSectionInView } from "@/lib/hook";

const About = () => {
  const ref = useSectionInView(0.75, "About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
      className="capitalize  scroll-mt-[5rem] text-center px-4 max-sm:mb-28 mb-36 leading-7"
    >
      <SectionName>About me</SectionName>
      <p className=" ">
        I am a passionate front-end developer with 1.5 years of professional
        experience and a strong foundation in computer science, currently
        pursuing my degree at Damitta University. My enthusiasm for coding and
        web development drives me to learn and explore new technologies and
        frameworks continually. I have hands-on experience in building projects
        using modern web technologies, including React, Next.js, Tailwind CSS,
        and Bootstrap. My projects reflect my commitment to creating responsive,
        user-friendly, and visually appealing web applications
      </p>
    </motion.section>
  );
};

export default About;
