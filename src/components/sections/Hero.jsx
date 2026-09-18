"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import dynamic from "next/dynamic";
import { ArrowDownRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

// Lazy load the Three.js scene for performance
const HeroScene = dynamic(() => import("../three/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Entrance animation delayed to wait for preloader
    const tl = gsap.timeline({ delay: 2.5 });

    tl.fromTo(
      ".hero-label",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        ".hero-title-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" },
        "-=0.4"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.8"
      );

    return () => tl.kill();
  }, []);

  const scrollToProjects = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#work", autoKill: false }, ease: "power3.inOut" });
  };

  const scrollToContact = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: "#contact", autoKill: false }, ease: "power3.inOut" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-[100vh] min-h-[600px] flex flex-col justify-center px-6 md:px-12 overflow-hidden"
    >
      <HeroScene />

      <div className="relative z-10 max-w-7xl mx-auto w-full mt-20">
        {/* Label */}
        <div className="hero-label mb-8 md:mb-12 flex flex-col gap-1">
          <span className="text-xs md:text-sm font-mono tracking-widest text-premium-accent">WEB DEVELOPER</span>
          <span className="text-xs md:text-sm font-mono tracking-widest text-premium-offwhite/60">REACT.JS / NEXT.JS / MERN STACK</span>
          <span className="text-xs md:text-sm font-mono tracking-widest text-premium-offwhite/60">Noida , Uttar Pradesh , India</span>

        </div>

        {/* Large Typography */}
        <div ref={titleRef} className="overflow-hidden mb-8">
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-7xl md:text-[12vw] font-bold leading-[0.85] tracking-tighter text-premium-offwhite uppercase">
              PRADEEP
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-7xl md:text-[12vw] font-bold leading-[0.85] tracking-tighter text-transparent text-border-active uppercase ml-0 md:ml-[1em]">
              YADAV
            </h1>
          </div>
        </div>

        {/* Supporting text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 md:gap-8 mt-12">
          <p
            ref={subtitleRef}
            className="max-w-md text-lg md:text-xl font-light text-premium-offwhite/80 leading-relaxed"
          >
            &quot;Building scalable, responsive and modern web applications with React.js, Next.js and the MERN stack.&quot;
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 md:items-center">
            <button
              onClick={scrollToProjects}
              className="interactable group flex items-center gap-4 text-sm tracking-widest font-bold border-b border-premium-border pb-2 hover:border-premium-accent transition-colors"
            >
              VIEW PROJECTS
              <ArrowDownRight className="w-4 h-4 group-hover:text-premium-accent transition-colors" />
            </button>
            <button
              onClick={scrollToContact}
              className="interactable text-sm tracking-widest text-premium-offwhite/60 hover:text-white transition-colors"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      </div>


    </section>
  );
}
