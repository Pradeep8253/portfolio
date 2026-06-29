"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="w-full h-full outline-none dark:bg-slate bg-white lg:dark:gradient-orange lg:gradient-green">
      <div className="flex flex-col items-center justify-center h-full p-8 lg:flex-row md:p-12">
        <div className="relative lg:basis-[40%] h-full rounded-full lg:rounded-2xl overflow-hidden">
          <img
            src="/images/profile-dark.webp"
            alt="profile"
            className="object-cover w-full h-full bg-white dark:block hidden"
          />
          <img
            src="/images/profile-light.webp"
            alt="profile"
            className="object-cover w-full h-full bg-white dark:hidden block"
          />
        </div>
        <div className="flex-1 text-center lg:text-left md:px-8">
          <h1 className="mt-8 text-2xl font-bold tracking-wide md:text-h1 dark:text-orange text-green">
            PRADEEP YADAV
          </h1>
          <h1 className="text-2xl font-bold tracking-wide md:text-h1 dark:text-white text-grayMedium">
            WEB DEVELOPER
          </h1>
          <p className="my-4 dark:text-white text-grayMedium">
            I&apos;m an India based web developer with 2+ years of experience,
            focused on crafting clean &amp; user‑friendly experiences using
            React.js, Next.js, and the MERN stack. Passionate about building
            scalable web products that generate real value for users.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center my-8 hoverable btn-primary"
          >
            <span className="px-4">More About Me</span>
            <span className="px-4 text-white">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
