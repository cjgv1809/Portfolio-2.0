"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import ThemeContextProvider from "@/context/themeSwitchContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Line from "@/components/Line";
import "./globals.css";

const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});

const AnimatedBackground = dynamic(
  () => import("@/components/AnimatedBackground"),
  {
    ssr: false,
  }
);

const ThemeSwitch = dynamic(() => import("@/components/ThemeSwitch"), {
  ssr: false,
});

const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  {
    ssr: false,
  }
);

const ThemeMetaTagUpdater = dynamic(
  () => import("@/components/ThemeMetaTagUpdater"),
  {
    ssr: false,
  }
);

const metadata = {
  title: "Carlos Gomes | Personal Portfolio",
  description:
    "I'm a software engineer based in Buenos Aires, Argentina. I'm passionate about web/mobile development, and building communities. ",
  type: "website",
  siteName: "Carlos Gomes",
  url: "https://carlosgomes.dev",
  image: "/og-image.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fff" />

        <meta name="robots" content="follow, index" />
        <meta
          name="googlebot"
          content="follow, index, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
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
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@carlosgomesdev" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <title>{metadata.title}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'light';
              document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#141414' : '#fff');
            })();
          `,
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 overflow-hidden">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Suspense fallback={<Preloader />}>
              <AnimatedBackground />
              <Header />
              {children}
              <Line />
              <Footer />
              <Toaster position="bottom-center" />
              <ThemeSwitch />
              <ThemeMetaTagUpdater />
            </Suspense>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
