"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

function Intro() {
  const { ref } = useSectionInView("Home", 1);
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const { theme } = useTheme();

  const motionVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const waveVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      y: ["0%", "-20%", "10%", "-15%", "5%", "0%"],
      rotate: [0, 20, -15, 20, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 0.9, 1],
      },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[50rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={motionVariants}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <figure>
              <Image
                src="/images/avatar.webp"
                alt="Carlos portrait"
                title="Carlos portrait"
                width={250}
                height={250}
                quality="95"
                priority={true}
                className={`h-40 w-40 rounded-full object-cover border-[0.35rem] shadow-xl ${
                  theme === "light" ? "border-white/10" : "border-white/95"
                }`}
              />
            </figure>
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-2 text-3xl"
            initial="hidden"
            animate="visible"
            variants={waveVariants}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-2xl font-light !leading-[1.5] sm:text-4xl relative text-balance"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I&apos;m{" "}
        <span className="relative font-semibold inline-block group ">
          Carlos.
          <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-white/50 bg-slate-950 transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>{" "}
        I&apos;m a{" "}
        <span className="relative font-semibold inline-block group">
          Frontend/Mobile developer
          <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-white/50 bg-slate-950 transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>{" "}
        with two and a half years of experience. I enjoy building{" "}
        <span className="relative inline-block italic">
          websites & apps
          <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-white/50 bg-slate-950 transition-all duration-300 group-hover:w-full"></span>
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 w-full sm:w-fit flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all duration-200 ease-in-out"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          aria-label="Contact me here"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 w-full sm:w-fit flex justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 transition-all duration-200 ease-in-out"
          href="/docs/Carlos_Gomes_Resume-FE-Dev.pdf"
          download="Carlos_Gomes_Resume-FE-Dev.pdf"
          aria-label="Download CV"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex items-center gap-3">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex justify-center items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 transition-all duration-200 ease-in-out outline-none"
            href="https://linkedin.com/in/carlosgomesvallejo"
            target="_blank"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="h-5 w-5" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex justify-center items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 transition-all duration-200 ease-in-out outline-none"
            href="https://github.com/cjgv1809"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithubSquare className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
