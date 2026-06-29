"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import ArrowRight from "../assets/svg/ArrowRight";

export default function HomePage() {
  const darkMode = true; // passed via context in full app; accessing via CSS class

  useEffect(() => {
    gsap.fromTo(
      ".home-text",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 },
    );
    gsap.fromTo(
      ".home-img",
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.5 },
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-8 lg:px-20 dark:bg-slate bg-white">
      <div className="text-center lg:text-left z-10">
        <p className="home-text text-sm font-semibold tracking-[0.3em] uppercase dark:text-orange text-green mb-2">
          Hello, I'm
        </p>
        <h1 className="home-text text-4xl md:text-6xl font-extrabold dark:text-white text-grayMedium leading-tight mb-4">
          Pradeep
          <br />
          <span className="dark:text-orange text-green">Developer</span>
        </h1>
        <p className="home-text dark:text-grayLight text-grayMedium max-w-md mb-8 leading-relaxed">
          A passionate full-stack developer crafting beautiful, performant web
          experiences with modern technologies.
        </p>
        <div className="home-text flex gap-4 justify-center lg:justify-start">
          <Link
            href="/portfolio"
            className="btn-primary inline-flex items-center hoverable"
          >
            <span className="px-6">My Work</span>
            <span className="px-4 text-white">
              <ArrowRight />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full border dark:border-white border-grayMedium dark:text-white text-grayMedium hoverable hover:dark:bg-white hover:dark:text-slate hover:bg-grayMedium hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="home-img mt-12 lg:mt-0 relative">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 dark:border-orange border-green">
          <img
            src="/images/profile-dark.webp"
            alt="Profile"
            className="w-full h-full object-cover dark:block hidden"
          />
          <img
            src="/images/profile-light.webp"
            alt="Profile"
            className="w-full h-full object-cover dark:hidden block"
          />
        </div>
        <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full dark:bg-orange bg-green"></div>
        <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full dark:bg-orange bg-green opacity-60"></div>
      </div>
    </div>
  );
}
