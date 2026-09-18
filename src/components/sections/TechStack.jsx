"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { skills } from "../../data/portfolioData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TechOrbit = dynamic(() => import("../three/TechOrbit"), {
  ssr: false,
});

export default function TechStack() {
  const containerRef = useRef(null);
  const [activeTech, setActiveTech] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".tech-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="stack" ref={containerRef} className="pt-8 pb-24 bg-premium-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-sm font-mono tracking-[0.3em] text-premium-accent mb-8 lg:mb-16">TECH STACK</h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Typography side */}
          <div className="w-full lg:w-1/2 flex flex-wrap gap-3 md:gap-4 justify-start relative z-10">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="tech-item px-5 py-3 border border-premium-border rounded-full bg-premium-gray/10 hover:bg-premium-accent/10 hover:border-premium-accent/50 transition-all duration-500 cursor-default interactable flex items-center gap-3 group backdrop-blur-sm shadow-xl"
                onMouseEnter={() => setActiveTech(skill)}
                onMouseLeave={() => setActiveTech(null)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-premium-border group-hover:bg-premium-accent group-hover:shadow-[0_0_10px_#3A69F3] transition-all duration-500"></span>
                <span className="text-sm font-mono tracking-wider text-premium-offwhite/80 group-hover:text-white transition-colors duration-300">
                  {skill.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
          
          {/* 3D Orbit Side */}
          <div className="w-full lg:w-1/2 relative hidden md:block">
            <TechOrbit />
            
            {/* Overlay description on hover */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-premium-black/80 backdrop-blur-md p-6 border border-premium-border transition-all duration-300 pointer-events-none text-center min-w-[200px] ${activeTech ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="text-premium-accent font-mono text-sm tracking-widest mb-2">TECHNOLOGY</div>
              <div className="text-white font-bold text-xl">{activeTech}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
