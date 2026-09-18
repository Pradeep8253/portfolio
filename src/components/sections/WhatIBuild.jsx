"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhatIBuild() {
  const containerRef = useRef(null);

  const services = [
    {
      id: "01",
      title: "WEB APPLICATIONS",
      desc: "Modern responsive web interfaces using React.js and Next.js."
    },
    {
      id: "02",
      title: "FULL-STACK APPLICATIONS",
      desc: "MERN-based applications with RESTful APIs and MongoDB."
    },
    {
      id: "03",
      title: "CRM & ADMIN PLATFORMS",
      desc: "Enterprise dashboards, CRM modules, permissions and data management."
    },
    {
      id: "04",
      title: "PAYMENT & DEPLOYMENT",
      desc: "Razorpay integration and application deployment using Docker, Traefik and VPS environments."
    }
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.build-item').forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-premium-black relative border-t border-premium-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-sm font-mono tracking-[0.3em] text-premium-accent mb-16 lg:mb-24">WHAT I BUILD</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {services.map((service) => (
            <div key={service.id} className="build-item flex flex-col group">
              <div className="text-6xl md:text-8xl font-light text-premium-offwhite font-mono opacity-20 mb-6 group-hover:opacity-100 group-hover:text-premium-accent transition-all duration-500">
                {service.id}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                {service.title}
              </h3>
              <p className="text-lg font-light text-premium-offwhite/70 max-w-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
