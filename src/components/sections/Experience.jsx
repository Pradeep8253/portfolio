"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "../../data/portfolioData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Desktop horizontal scrolling
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // We calculate the total width to scroll
        const scrollWidth = timelineRef.current.scrollWidth - window.innerWidth + 200; // extra padding

        gsap.to(timelineRef.current, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          }
        });

        // Reveal animations for each item
        gsap.utils.toArray('.exp-item').forEach((item) => {
          gsap.fromTo(item, 
            { opacity: 0.2, scale: 0.95 },
            { 
              opacity: 1, 
              scale: 1, 
              duration: 1,
              scrollTrigger: {
                trigger: item,
                containerAnimation: gsap.getById("expScroll"), // if we named it, but simpler to just use intersection observer or scrub
                start: "left center+=200",
                end: "left center-=200",
                scrub: true,
                horizontal: true,
              }
            }
          );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        // Vertical reveal for mobile
        gsap.utils.toArray('.exp-item').forEach((item) => {
          gsap.fromTo(item, 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.8,
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
              }
            }
          );
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center bg-premium-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 lg:mb-24 lg:absolute lg:top-24 lg:left-0 lg:right-0 lg:z-10">
        <h2 className="text-sm font-mono tracking-[0.3em] text-premium-accent">EXPERIENCE</h2>
      </div>

      {/* Timeline Container */}
      <div 
        ref={timelineRef}
        className="flex flex-col lg:flex-row gap-16 lg:gap-32 px-6 md:px-12 lg:px-[10vw] lg:w-max relative"
      >
        {/* Desktop continuous line */}
        <div className="hidden lg:block absolute top-[85px] left-0 w-full h-[1px] bg-premium-border z-0" />

        {experience.map((exp, index) => (
          <div key={index} className="exp-item relative lg:w-[600px] flex-shrink-0 z-10 border-l lg:border-l-0 lg:border-t border-premium-border pl-8 lg:pl-0 lg:pt-12 pb-8 lg:pb-0">
            {/* Dot */}
            <div className="absolute -left-[5px] top-0 lg:-top-[5px] lg:left-0 w-[9px] h-[9px] bg-premium-accent rounded-full" />
            
            <div className="text-4xl md:text-6xl font-light text-premium-offwhite font-mono mb-4">{exp.year}</div>
            
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{exp.company}</h3>
              <div className="text-sm tracking-widest font-mono text-premium-accent uppercase">{exp.role}</div>
            </div>
            
            <ul className="flex flex-col gap-4 text-premium-offwhite/70 font-light">
              {exp.responsibilities.map((task, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-premium-accent mt-1.5">✦</span>
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
