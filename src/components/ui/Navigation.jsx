"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);

  // Suppress harmless THREE.Clock deprecation warning from @react-three/fiber
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (args[0] && typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return;
    originalWarn(...args);
  };
}

export default function Navigation() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add blur background when scrolling down
      if (currentScrollY > 50) {
        navRef.current.classList.add("glass-panel");
      } else {
        navRef.current.classList.remove("glass-panel");
      }
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(navRef.current, { y: "-100%", duration: 0.3, ease: "power2.out" });
      } else {
        gsap.to(navRef.current, { y: "0%", duration: 0.3, ease: "power2.out" });
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    
    // Fallback to top if 'home' is clicked
    if (id === 'home') {
      gsap.to(window, { duration: 1, scrollTo: 0, ease: "power3.inOut" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, { 
        duration: 1, 
        scrollTo: { y: `#${id}`, autoKill: false }, 
        ease: "power3.inOut" 
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] transition-colors duration-300 px-6 py-5 md:px-12 flex justify-between items-center"
    >
      <div className="text-xl font-bold tracking-widest cursor-pointer interactable" onClick={() => scrollToSection('home')} data-cursor="HOME">
        PRADEEP YADAV
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm tracking-widest text-premium-offwhite font-medium">
        {['ABOUT', 'EXPERIENCE', 'WORK', 'STACK', 'CONTACT'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="hover:text-premium-accent transition-colors interactable"
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden z-50 interactable flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-6 h-[2px] bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
        <span className={`block w-6 h-[2px] bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-[2px] bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
      </button>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-premium-black z-40 flex flex-col items-center justify-center gap-8 text-2xl font-bold tracking-widest">
          {['ABOUT', 'EXPERIENCE', 'WORK', 'STACK', 'CONTACT'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-premium-accent transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
