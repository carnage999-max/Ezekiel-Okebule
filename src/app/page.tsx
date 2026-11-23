import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      {/* min-w-0 is load-bearing: without it a flex child can't shrink below
          its content's min-content width, which overflows the viewport on
          narrow phones (320px). Learned that one the hard way on the old site. */}
      <main className="flex-1 min-w-0 pb-20 lg:pb-0">
        <MobileHeader />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Resume />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
        <Footer />
      </main>

      <MobileNav />
    </div>
  );
}
