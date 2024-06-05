"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import { paragraph } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import ParagraphIntro from "./ParagraphIntro";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <ParagraphIntro paragraph={paragraph} />
    </motion.section>
  );
}

export default About;
