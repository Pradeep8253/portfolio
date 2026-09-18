/* eslint-disable */
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const text = textRef.current;

    // Move cursor
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    // Handle hover states
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactable = target.closest("a, button, .interactable, [data-cursor]");
      
      if (interactable) {
        const cursorType = interactable.getAttribute("data-cursor") || "OPEN";
        
        text.innerText = cursorType;
        gsap.to(cursor, {
          width: 64,
          height: 64,
          backgroundColor: "rgba(255, 255, 255, 1)",
          mixBlendMode: "difference",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(text, {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          delay: 0.1,
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const interactable = target.closest("a, button, .interactable, [data-cursor]");
      
      if (interactable) {
        gsap.to(text, {
          opacity: 0,
          scale: 0,
          duration: 0.1,
        });
        gsap.to(cursor, {
          width: 8,
          height: 8,
          backgroundColor: "rgba(255, 255, 255, 1)",
          mixBlendMode: "normal",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
    >
      <span
        ref={textRef}
        className="text-[10px] font-bold text-black opacity-0 scale-0 tracking-wider pointer-events-none select-none"
      ></span>
    </div>
  );
}
