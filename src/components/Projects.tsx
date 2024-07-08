import React from "react";
import { motion } from "framer-motion";
import SectionName from "./SectionName";
import { projectsData } from "@/lib/data";

import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="mb-28 scroll-mt-28">
      <SectionName>My Projects</SectionName>
      <div className="flex flex-col gap-5">
        {projectsData.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
