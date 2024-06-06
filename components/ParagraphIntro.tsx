"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import React, { useRef } from "react";

type ParagraphIntroProps = {
  paragraph: string;
};

type TextProps = {
  children: string;
  progress: MotionValue<number>;
  range: number[];
};

function ParagraphIntro({ paragraph }: ParagraphIntroProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.5", "start 0.1"],
  });

  const words = paragraph.split(" ");

  return (
    <p
      ref={container}
      className="flex max-w-[75ch] flex-wrap justify-center sm:justify-start font-normal text-lg text-gray-600 dark:text-white/70 text-balance"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: TextProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative mr-2 mt-2">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: TextProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default ParagraphIntro;

export { Word, Char };
