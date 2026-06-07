import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ScreenShowcase } from "@/components/sections/ScreenShowcase";
import { ProgressHighlight } from "@/components/sections/ProgressHighlight";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <ScreenShowcase />
        <ProgressHighlight />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
