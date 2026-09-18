"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/portfolioData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SelectedWork() {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Desktop horizontal scrolling
      mm.add("(min-width: 1024px)", () => {
        // Calculate dynamic width based on number of projects
        const totalWidth = galleryRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth - viewportWidth; // Reduced extra padding

        gsap.to(galleryRef.current, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          }
        });

      });

      // Mobile vertical reveal
      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray('.project-card').forEach((card) => {
          gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
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
    <section id="work" ref={containerRef} className="py-24 lg:py-0 lg:h-screen lg:flex lg:flex-col lg:justify-center bg-premium-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12 lg:mb-24 lg:absolute lg:top-24 lg:left-0 lg:right-0 lg:z-10">
        <h2 className="text-sm font-mono tracking-[0.3em] text-premium-accent">SELECTED WORK</h2>
      </div>

      <div 
        ref={galleryRef}
        className="flex flex-col lg:flex-row gap-24 lg:gap-32 px-6 md:px-12 lg:px-[10vw] lg:w-max h-full lg:items-center"
      >
        {projects.map((project, index) => (
          <div key={project.id} className="project-card relative lg:w-[80vw] max-w-[1200px] flex-shrink-0 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Image Side */}
            <div 
              className="w-full lg:w-[60%] aspect-[4/3] lg:aspect-[16/10] overflow-hidden group interactable relative bg-premium-gray/30"
              data-cursor="EXPLORE"
              onClick={() => window.open(project.projectUrl, '_blank', 'noopener,noreferrer')}
            >
              <div className="project-image-inner absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105">
                {/* Fallback to CSS composition if image fails or isn't real */}
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback composition */}
                <div className="hidden absolute inset-0 bg-gradient-to-br from-premium-gray to-premium-black flex flex-col items-center justify-center p-8 border border-premium-border">
                  <div className="text-4xl font-mono text-premium-accent mb-4">{`<${project.name} />`}</div>
                  <div className="w-1/2 h-[1px] bg-premium-border"></div>
                </div>
              </div>
              
              {/* Overlay elements */}
              <div className="absolute top-6 left-6 text-sm font-mono tracking-widest text-white mix-blend-difference">
                0{index + 1}
              </div>
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center">
              <div className="text-sm font-mono tracking-widest text-premium-accent mb-6">
                {project.category}
              </div>
              
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                {project.name}
              </h3>
              
              <p className="text-lg font-light text-premium-offwhite/70 mb-10 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-12">
                <h4 className="text-xs font-mono tracking-widest text-white/50 mb-4 uppercase">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono border border-premium-border rounded-full text-premium-offwhite">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="interactable group inline-flex items-center gap-4 text-sm tracking-widest font-bold text-white hover:text-premium-accent transition-colors w-max"
              >
                VIEW PROJECT
                <span className="w-10 h-10 rounded-full border border-premium-border flex items-center justify-center group-hover:border-premium-accent group-hover:bg-premium-accent/10 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
