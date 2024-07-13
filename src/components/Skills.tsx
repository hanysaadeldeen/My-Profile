"use client";
import { skillsData } from "@/lib/data";
import SectionName from "./SectionName";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
const Skills = () => {
  const ref = useSectionInView(0.15, "Skills");

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
