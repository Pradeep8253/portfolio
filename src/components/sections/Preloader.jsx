"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [counter, setCounter] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const panelsRef = useRef(null);

  useEffect(() => {
    // Counter animation
    const tl = gsap.timeline();

    const updateCounter = { value: 0 };
    tl.to(updateCounter, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => {
        setCounter(Math.round(updateCounter.value));
      },
    })
    .to(textRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 0.2
    })
    .to(".panel", {
      height: 0,
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.1
    }, "-=0.2")
    .set(containerRef.current, {
      display: "none"
    });

    return () => tl.kill();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[999] flex flex-col items-center justify-center pointer-events-none">
      {/* Background Panels */}
      <div ref={panelsRef} className="absolute inset-0 flex">
        <div className="panel flex-1 bg-premium-black h-full origin-top"></div>
        <div className="panel flex-1 bg-premium-black h-full origin-top"></div>
        <div className="panel flex-1 bg-premium-black h-full origin-top"></div>
        <div className="panel flex-1 bg-premium-black h-full origin-top"></div>
      </div>
      
      {/* Content */}
      <div ref={textRef} className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-2xl md:text-4xl font-bold tracking-[0.3em] text-white">
          PRADEEP YADAV
        </h1>
        <div className="text-6xl md:text-8xl font-light text-premium-offwhite font-mono">
          {counter.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}
