"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";

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

function Skills() {
  const { ref } = useSectionInView("Skills", 1);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white text-black borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white dark:border-white/10 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300 ease-in-out"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
