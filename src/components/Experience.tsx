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
const Experience = () => {
  const ref = useSectionInView(0.15, "Experience");

  return (
    <section ref={ref} id="skills" className="mb-28 scroll-mt-28">
      <SectionName>My Experiences </SectionName>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize mb-5 text-gray-600">
                  {item.title}
                </h3>
                <p className="font-normal mb-10 ">{item.location}</p>
                <p className=" capitalize mt-1 !font-normal text-gray-700">
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
