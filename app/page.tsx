import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="grid grid-cols-1 justify-items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      {/* <Projects />
      <Skills />
      <Experience />
      <Contact /> */}
    </main>
  );
}
