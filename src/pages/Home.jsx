import React from "react";
import ProfileImg_light from "../assets/images/profile-light.jpeg";
import ProfileImg_dark from "../assets/images/profile-dark.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Home({ darkMode }) {
  return (
    <div className="w-full h-full outline-none lg:dark:gradient-orange lg:gradient-green">
      <div className="flex flex-col items-center justify-center h-full p-8 lg:flex-row md:p-12 ">
        <div className="relative lg:basis-[40%] h-full rounded-full lg:rounded-2xl overflow-hidden ">
          {/* <span className='hidden lg:block'><Particles id="tsparticles" options={particleOptions} /></span> */}
          <img
            src={darkMode ? ProfileImg_dark : ProfileImg_light}
            alt="profile"
            className="object-cover w-full h-full bg-white"
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
            I'm a India based web developer focused on crafting clean &
            user‑friendly experiences, I am passionate about building excellent
            web products that generate values for users.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center my-8 hoverable btn-primary"
          >
            <span className="px-4">More About Me</span>{" "}
            <span className="px-4 text-white">
              <FaArrowRight />
            </span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
