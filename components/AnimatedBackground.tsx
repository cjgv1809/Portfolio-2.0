"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const translateX = useTransform(mouseX, (latestX) => latestX * 0.75); // Adjust multiplier for sensitivity
  const translateY = useTransform(mouseY, (latestY) => latestY * 0.75); // Adjust multiplier for Y movement sensitivity

  const lightBackground = (
    <motion.div
      className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
      style={{ x: translateX, y: translateY }}
      transition={{ duration: 0.1, ease: "circInOut" }}
    />
  );

  const darkBackground = (
    <motion.div
      className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
      style={{ x: translateX, y: translateY }}
      transition={{ duration: 0.1, ease: "circInOut" }}
    />
  );

  const background = theme === "light" ? lightBackground : darkBackground;

  return <div>{background}</div>;
}

export default AnimatedBackground;
