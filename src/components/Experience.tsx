"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import SectionName from "./SectionName";
import { useSectionInView } from "@/lib/hook";
import { experiencesData } from "@/lib/data";
import useTheme from "@/context/Theme-Context";
const Experience = () => {
  const ref = useSectionInView(0.15, "Experience");

  const { theme } = useTheme();
  return (
    <section ref={ref} id="skills" className="mb-28 scroll-mt-28">
      <SectionName>My Experiences </SectionName>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize mb-5 dark:text-gray-200 text-gray-600">
                  {item.title}
                </h3>
                <p className="font-normal mb-10 dark:text-gray-400 ">
                  {item.location}
                </p>
                <p className=" capitalize mt-1 !font-normal dark:text-gray-300 text-gray-700">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
