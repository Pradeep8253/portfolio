"use client";
import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import { projects } from "../data/portfolioData";

export default function PortfolioPage({ darkMode }) {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loaderSize =
    windowWidth < 767.98 ? 100 : windowWidth < 991.98 ? 200 : 100;

  return (
    <div>
      <Header header="MY" colorText="PORTFOLIO" label="WORKS" />
      <div className="flex flex-wrap gap-8 px-4 md:px-16">
        {projects.map((data) => (
          <div className="min-w-[40%] flex-1" key={data.id}>
            <PortfolioCard darkMode={darkMode} project={data} />
          </div>
        ))}
        {/* Coming Soon Card */}
        <div className="flex items-center justify-center flex-1 dark:bg-orange/70 bg-green/70">
          <div className="flex items-center w-full gap-4 px-4 py-8 justify-evenly md:gap-8 md:p-8">
            <div className="flex items-center justify-center flex-1">
              <ClockLoader
                color={"#fff"}
                loading={true}
                speedMultiplier={0.5}
                size={loaderSize}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-widest text-white">
                Developing
              </h3>
              <h3 className="text-xl font-bold tracking-widest text-white whitespace-nowrap">
                Coming Soon
                <span className="dot1">.</span>
                <span className="dot2">.</span>
                <span className="dot3">.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
