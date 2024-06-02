"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/hooks/useTheme";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="fixed right-5 top-5 sm:top-6 z-[9999] bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
      role="switch"
      aria-checked={theme === "light"}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;
