"use client";
import React, { useEffect } from "react";
import SectionName from "./SectionName";
import { projectsData } from "@/lib/data";

import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { ActiveSectionfunc } from "@/context/ActiveSectionContextProvider";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  const { secActiveSection, timeOfLastClick } = ActiveSectionfunc();
  useEffect(() => {
    if (inView === true && inView && Date.now() - timeOfLastClick > 1000) {
      secActiveSection("Projects");
    }
  }, [inView, timeOfLastClick, secActiveSection]);
  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
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
