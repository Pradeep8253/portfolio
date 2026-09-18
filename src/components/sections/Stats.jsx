"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".stat-item", 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 border-y border-premium-border bg-premium-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="stat-item flex flex-col justify-center items-center text-center">
          <div className="text-6xl md:text-8xl font-light font-mono text-white mb-2">2.5<span className="text-premium-accent">+</span></div>
          <div className="text-xs font-mono tracking-widest text-premium-offwhite/60">YEARS EXPERIENCE</div>
        </div>
        
        <div className="stat-item flex flex-col justify-center items-center text-center">
          <div className="text-6xl md:text-8xl font-light font-mono text-white mb-2">5</div>
          <div className="text-xs font-mono tracking-widest text-premium-offwhite/60">FEATURED PROJECTS</div>
        </div>
        
        <div className="stat-item flex flex-col justify-center items-center text-center">
          <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 uppercase">MERN</div>
          <div className="text-xs font-mono tracking-widest text-premium-offwhite/60">STACK</div>
        </div>

        <div className="stat-item flex flex-col justify-center items-center text-center">
          <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-2 uppercase">REACT</div>
          <div className="text-xs font-mono tracking-widest text-premium-offwhite/60">NEXT.JS</div>
        </div>

      </div>
    </section>
  );
}
