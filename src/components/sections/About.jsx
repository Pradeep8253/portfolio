"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const scrollTextRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Fade in the main text when it enters viewport
      gsap.fromTo(
        ".about-word",
        { opacity: 0.1, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          }
        }
      );

      // Horizontal scrolling text effect
      gsap.to(scrollTextRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statement = "I build scalable and responsive web applications with modern frontend technologies and full-stack engineering.";
  const words = statement.split(" ");

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/pradeep-resume.pdf";
    link.download = "Pradeep_Yadav_Resume.pdf";
    link.click();
  };

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 relative overflow-hidden bg-premium-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-sm font-mono tracking-[0.3em] text-premium-accent mb-12">ABOUT</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1">
            <h3 ref={textRef} className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-white max-w-4xl">
              {words.map((word, i) => (
                <span key={i} className="about-word inline-block mr-3 mb-2">{word}</span>
              ))}
            </h3>
          </div>
          
          <div className="lg:w-1/3 flex flex-col justify-end gap-12 border-t border-premium-border pt-12 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0 mt-12 lg:mt-0">
            <div>
              <div className="text-6xl font-light text-premium-offwhite font-mono mb-2">2.5<span className="text-premium-accent">+</span></div>
              <div className="text-sm tracking-widest text-premium-offwhite/60">YEARS EXPERIENCE</div>
            </div>
            
            <p className="text-lg font-light text-premium-offwhite/80">
              Specialized in RESTful API development, payment gateway integration, and MERN application deployment using Docker, Traefik, and VPS environments.
            </p>

            <button 
              onClick={downloadCv}
              className="interactable group flex items-center justify-between w-full max-w-[250px] px-6 py-4 border border-premium-border bg-premium-gray/10 hover:bg-premium-accent/10 hover:border-premium-accent/50 transition-all duration-300 rounded-lg text-sm tracking-widest font-bold text-white"
            >
              <span>DOWNLOAD RESUME</span>
              <Download className="w-4 h-4 text-premium-offwhite group-hover:text-premium-accent transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Scrolling Tech Banner */}
      <div className="mt-32 border-y border-premium-border py-6 overflow-hidden bg-premium-gray/30 whitespace-nowrap flex">
        <div ref={scrollTextRef} className="flex gap-12 text-4xl md:text-6xl font-bold tracking-tighter text-transparent text-border uppercase items-center">
          <span>REACT.JS</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>NEXT.JS</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>MERN</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>REST APIs</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>PAYMENT INTEGRATION</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>DEPLOYMENT</span>
          <span className="text-xl text-premium-accent">✦</span>
          {/* Duplicate for infinite effect visually */}
          <span>REACT.JS</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>NEXT.JS</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>MERN</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>REST APIs</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>PAYMENT INTEGRATION</span>
          <span className="text-xl text-premium-accent">✦</span>
          <span>DEPLOYMENT</span>
        </div>
      </div>
    </section>
  );
}
