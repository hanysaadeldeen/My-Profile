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
        Possesses a strong background in computer science and is currently pursuing a degree. Enthusiastic about coding and web development with a continuous drive to learn and explore new technologies. Specializes in creating responsive, user-friendly web applications while staying updated with the latest industry best practices.
      </p>
    </motion.section>
  );
};

export default About;
