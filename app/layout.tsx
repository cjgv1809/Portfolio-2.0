"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import ThemeContextProvider from "@/context/themeSwitchContext";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/Footer";
import Line from "@/components/Line";
import AnimatedBackground from "@/components/AnimatedBackground";
import "./globals.css";

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
      }, 1500);
    })();
  }, []);

  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#fff" />

        <meta name="robots" content="follow, index" />
        <meta name="author" content="Carlos Gomes" />
        <meta
          name="keywords"
          content="Frontend developer, Mobile developer, Software developer, Web developer, React developer, React Native developer, JavaScript developer, TypeScript developer, Buenos Aires, Argentina"
        />
        <meta name="description" content={metadata.description} />

        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://carlosgomes.dev" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlosgomesdev" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/og-image.png" />

        <title>{metadata.title}</title>
      </head>
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
