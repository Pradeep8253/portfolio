"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Process() {
  const containerRef = useRef(null);

  const steps = [
    { num: "01", label: "PLAN", desc: "Understanding the project requirements, defining the architecture, and creating a strategic roadmap for the development lifecycle." },
    { num: "02", label: "DESIGN", desc: "Crafting premium user interfaces and experiences using modern design principles, focusing on sleek layouts and dynamic animations." },
    { num: "03", label: "DEVELOP", desc: "Writing clean, scalable, and highly optimized code utilizing React.js, Next.js, and the MERN stack with advanced state management." },
    { num: "04", label: "INTEGRATE", desc: "Connecting secure backend REST APIs, third-party services, and robust payment gateways like Razorpay for seamless functionality." },
    { num: "05", label: "DEPLOY", desc: "Launching the application securely into production environments using Docker, Traefik, and robust scalable VPS infrastructure." }
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animate the connecting line
      gsap.fromTo(
        ".process-line-fill",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: ".process-line-container",
            start: "top 60%",
            end: "bottom 60%",
            scrub: true,
          }
        }
      );

      // Animate the steps
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            scrollTrigger: {
              trigger: step,
              start: "top 60%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-premium-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-sm font-mono tracking-[0.3em] text-premium-accent mb-16 lg:mb-24">DEVELOPMENT PROCESS</h2>

        <div className="relative pl-12 md:pl-24">
          {/* Vertical Line */}
          <div className="process-line-container absolute left-[15px] top-[15px] bottom-[15px] w-[2px] bg-premium-border">
            <div className="process-line-fill w-full bg-premium-accent origin-top"></div>
          </div>

          <div className="flex flex-col gap-24">
            {steps.map((step, i) => (
              <div key={i} className="process-step relative flex items-center w-full">
                {/* Dot */}
                <div className="absolute -left-[45px] md:-left-[81px] w-4 h-4 rounded-full bg-premium-black border-2 border-premium-accent z-10"></div>
                
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-12 w-full justify-between">
                  <div className="flex items-end gap-6 md:gap-12 lg:w-1/2">
                    <div className="text-4xl md:text-6xl font-light font-mono text-premium-offwhite/20">
                      {step.num}
                    </div>
                    <div className="text-3xl md:text-5xl font-bold text-white tracking-tight pb-1 md:pb-2">
                      {step.label}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 lg:pl-12">
                    <p className="text-lg text-premium-offwhite/70 font-light leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
