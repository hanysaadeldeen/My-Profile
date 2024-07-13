"use client";
import { skillsData } from "@/lib/data";
import SectionName from "./SectionName";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hook";
const Skills = () => {
  const ref = useSectionInView(0.15, "Skills");
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section ref={ref} id="skills" className="mb-28 scroll-mt-28">
      <SectionName>My Skills</SectionName>
      <ul className="flex flex-wrap gap-3 justify-center">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              className="p-3 tracking-wide hover:bg-gray-300 cursor-pointer transition  bg-gray-200 rounded-2xl"
              key={index}
              custom={index}
              viewport={{
                once: true,
              }}
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
