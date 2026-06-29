"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../data/portfolioData";

export default function PortfolioPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // detect dark mode from DOM
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
    gsap.fromTo(
      ".portfolio__card",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, delay: 0.3 },
    );
  }, []);

  return (
    <div className="dark:bg-slate bg-white min-h-full overflow-y-auto pb-20">
      <Header header="My" colorText="Portfolio" label="PORTFOLIO" />
      <div className="px-8 lg:px-20">
        <div className="flex flex-wrap gap-4">
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
