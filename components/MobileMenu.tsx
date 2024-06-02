"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { curve, menuSlide } from "@/lib/anim";
import { links } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

type MobileMenuProps = {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileMenu({ setIsActive }: MobileMenuProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();
  const refMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (refMenu.current && !refMenu.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refMenu, setIsActive]);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-64 dark:bg-[#292929] fixed left-0 top-0 dark:text-white bg-[#f3f4f6] shadow-lg shadow-black/[0.03]"
      ref={refMenu}
    >
      <div className="h-full p-5 flex flex-col justify-between">
        <div className="flex flex-col justify-center h-full text-2xl gap-3 mt-20">
          <div className="text-[#999999] border-b border-[#999999] uppercase text-xs mb-10">
            <p>Navigation</p>
          </div>

          {links.map((data, index) => {
            return (
              <Link
                key={index}
                className={`no-underline font-light hover:text-gray-300 transition-all ${
                  activeSection === data.name
                    ? "dark:text-white font-semibold"
                    : "dark:text-[#999999]"
                }`}
                href={data.hash}
                onClick={() => {
                  setActiveSection(data.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {data.name}
              </Link>
            );
          })}
        </div>

        {/* <div className="flex w-full justify-between text-xs gap-10">
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div> */}
      </div>

      <svg className="absolute top-0 -right-[99px] rotate-180 w-[100px] h-full dark:fill-[#292929] fill-[#f3f4f6] stroke-none">
        <motion.path
          variants={curve}
          initial="initial"
          animate="enter"
          exit="exit"
        ></motion.path>
      </svg>
    </motion.div>
  );
}

export default MobileMenu;
