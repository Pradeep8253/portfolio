"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navigation from "../components/Navigation";
import Cursor from "../components/Cursor";
import RiseLoader from "react-spinners/RiseLoader";
import gsap, { Power4 } from "gsap";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      ".main-content",
      { y: 500, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: Power4.out },
    );
    const delay = loading ? 3000 : 0;
    setTimeout(() => {
      gsap.fromTo(
        ".page-cover",
        { height: "100%" },
        { height: 0, duration: 1 },
      );
    }, delay);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className={`relative z-0 ${darkMode ? "dark" : ""}`}>
      <div className="flex h-[100vh] w-[100vw]">
        <Cursor />
        <div className="flex-1 w-full h-[90vh] lg:h-full main-content overflow-y-auto">
          {children}
        </div>
        <div className="lg:basis-[10%] h-[10vh] lg:h-full">
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
      <div className="fixed w-full h-full bottom-0 left-0 dark:bg-gray bg-grayMedium z-[999] page-cover flex items-center justify-center">
        {loading && (
          <RiseLoader
            color="#ffb400"
            loading={true}
            speedMultiplier={0.5}
            size={20}
          />
        )}
      </div>
    </div>
  );
}
