"use client";
import { skillsData } from "@/lib/data";
import React, { useEffect } from "react";
import SectionName from "./SectionName";
import { useInView } from "react-intersection-observer";
import { ActiveSectionfunc } from "@/context/ActiveSectionContextProvider";
import { motion } from "framer-motion";
const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  const { secActiveSection, timeOfLastClick } = ActiveSectionfunc();
  useEffect(() => {
    if (inView === true && inView && Date.now() - timeOfLastClick > 1000) {
      secActiveSection("Skills");
    }
  }, [inView, timeOfLastClick, secActiveSection]);

  return (
    <section ref={ref} id="skills" className="mb-28 scroll-mt-28">
      <SectionName>My Skills</SectionName>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 200 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {skillsData.map((skill) => {
          return (
            <h2
              className="p-3 tracking-wide hover:bg-gray-300 cursor-pointer transition  bg-gray-200 rounded-2xl"
              key={skill}
            >
              {skill}
            </h2>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
