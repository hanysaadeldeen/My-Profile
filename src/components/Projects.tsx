"use client";
import React from "react";
import SectionName from "./SectionName";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hook";

function Projects() {
  const ref = useSectionInView(0.15, "Projects");

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
