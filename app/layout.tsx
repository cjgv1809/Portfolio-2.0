"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import ThemeContextProvider from "@/context/themeSwitchContext";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/Footer";
import Line from "@/components/Line";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";
import { AnimatePresence } from "framer-motion";

const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const metadata = {
  title: "Carlos Gomes | Personal Portfolio",
  description:
    "I'm a software engineer based in Buenos Aires, Argentina. I'm passionate about web/mobile development, and building communities. ",
  type: "website",
  siteName: "Carlos Gomes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-hidden`}
      >
        <ThemeContextProvider>
          {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

          <ActiveSectionContextProvider>
            <AnimatePresence mode="wait">
              {isLoading && <Preloader />}
            </AnimatePresence>
            {!isLoading && (
              <>
                <AnimatedBackground />
                <Header />
                {children}
                <Line />
                <Footer />
                <Toaster position="bottom-center" />
                <ThemeSwitch />
              </>
            )}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
