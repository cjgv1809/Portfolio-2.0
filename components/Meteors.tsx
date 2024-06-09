"use client";

import React from "react";
import clsx from "clsx";

function Meteors({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = new Array(number || 20).fill(true).map(() => ({
    left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
    animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
    animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
  }));

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={clsx(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] dark:bg-slate-500 bg-slate-950 rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r dark:before:from-[#64748b] before:from-[#141414] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        ></span>
      ))}
    </>
  );
}

export default Meteors;
