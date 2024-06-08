"use client";

import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

function Spotlight({ className, fill }: SpotlightProps) {
  const { theme } = useTheme();

  return (
    <svg
      className={clsx(
        "animate-spotlight pointer-events-none absolute z-[1] h-full w-full opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={
            fill ||
            (theme === "light" ? "url(#light-gradient)" : "url(#dark-gradient)")
          }
          fillOpacity="0.35" // Adjusted for better visibility
        ></ellipse>
      </g>
      <defs>
        <linearGradient id="light-gradient">
          <stop offset="5%" stopColor="#fbe2e3" />
          <stop offset="95%" stopColor="#dbd7fb" />
        </linearGradient>
        <linearGradient id="dark-gradient">
          <stop offset="5%" stopColor="#946263" />
          <stop offset="95%" stopColor="#676394" />
        </linearGradient>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Spotlight;
