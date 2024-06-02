import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import ThemeContextProvider from "@/context/themeSwitchContext";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/Footer";
import Line from "@/components/Line";
import "./globals.css";
import RadialBackground from "@/components/RadialBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
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
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          {/* <RadialBackground /> */}

          <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Line />
            <Footer />
            <Toaster position="bottom-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
