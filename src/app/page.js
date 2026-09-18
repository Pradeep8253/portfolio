import CustomCursor from "../components/ui/CustomCursor";
import Navigation from "../components/ui/Navigation";
import Preloader from "../components/sections/Preloader";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import SelectedWork from "../components/sections/SelectedWork";
import TechStack from "../components/sections/TechStack";
import WhatIBuild from "../components/sections/WhatIBuild";
import Process from "../components/sections/Process";
import Stats from "../components/sections/Stats";
import Contact from "../components/sections/Contact";
import Footer from "../components/ui/Footer";

export const metadata = {
  title: "Pradeep Yadav — Web Developer | React.js, Next.js & MERN",
  description: "Pradeep Yadav is a Web Developer with 2.5+ years of experience building scalable and responsive web applications using React.js, Next.js and the MERN stack.",
};

export default function Page() {
  return (
    <main className="bg-premium-black text-premium-offwhite selection:bg-premium-accent selection:text-white relative">
      <CustomCursor />
      <Preloader />
      <Navigation />
      
      <Hero />
      <About />
      <Experience />
      <SelectedWork />
      <TechStack />
      <WhatIBuild />
      <Process />
      <Stats />
      <Contact />
      
      <Footer />
    </main>
  );
}
