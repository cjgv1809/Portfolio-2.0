"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useTheme } from "@/hooks/useTheme";
import SpotLight from "./SpotLight";
import SectionHeading from "./SectionHeading";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      data-scroll-section
    >
      <SectionHeading>My experience</SectionHeading>
      <SpotLight />
      <VerticalTimeline lineColor="" animate>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
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
              dateClassName="text-gray-700 dark:text-white/75 sm:mx-2"
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgb(3, 7, 18)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold text-base capitalize">
                {item.title}
              </h3>
              <p className="!font-light !mt-0 !mb-3">{item.company}</p>
              <div className="!font-light text-gray-700 dark:text-white/75 !text-xs">
                {item.description.map((line, i) => (
                  <ul key={line + i.toString()} className="list-disc">
                    <li className="!mb-2">{line}</li>
                  </ul>
                ))}
              </div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
