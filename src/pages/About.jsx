"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import MilestoneCard from "../components/MilestoneCard";
import ProgressBar from "../components/ProgressBar";
import { FaDownload } from "react-icons/fa";
import { milestones, skills } from "../data/portfolioData";

export default function AboutPage() {
  useEffect(() => {
    gsap.fromTo(
      ".about-info",
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.3 }
    );
  }, []);

  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = "/pradeep-resume.pdf";
    link.download = "pradeep-cv.pdf";
    link.click();
  };

  return (
    <div className="dark:bg-slate bg-white min-h-full pb-20">
      <Header header="ABOUT" colorText="ME" label="RESUME" />
      <div className="px-4 md:px-16">
        <div className="flex flex-col items-start lg:flex-row">
          {/* Personal Info */}
          <div className="flex items-center justify-center flex-1 w-full text-left lg:block">
            <span>
              <h3 className="about-info inline-block pb-1 mb-4 font-bold tracking-wide border-b text-h3 dark:text-white text-grayMedium">
                PERSONAL INFO
              </h3>
              <ul className="flex flex-col flex-wrap lg:items-center md:flex-row">
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">First Name : &nbsp;</span>
                  <span className="info info-value">Pradeep</span>
                </li>
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">Last Name : &nbsp;</span>
                  <span className="info info-value">Yadav</span>
                </li>
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">Age : &nbsp;</span>
                  <span className="info info-value">27 Yrs</span>
                </li>
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">Nationality : &nbsp;</span>
                  <span className="info info-value">Indian</span>
                </li>
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">Address : &nbsp;</span>
                  <span className="info info-value">Noida, Uttar Pradesh</span>
                </li>
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">Phone : &nbsp;</span>
                  <span className="info info-value">+91 8417876362</span>
                </li>
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">Email : &nbsp;</span>
                  <span className="info info-value">
                    pradeepyadav8253@gmail.com
                  </span>
                </li>
                <li className="about-info basis-[50%] info-wrapper">
                  <span className="info info-label">Language : &nbsp;</span>
                  <span className="info info-value">Hindi, English</span>
                </li>
              </ul>
              <button
                onClick={downloadCv}
                className="about-info inline-flex items-center my-8 hoverable btn-primary"
              >
                <span className="px-4">DOWNLOAD CV</span>
                <span className="px-4 text-white">
                  <FaDownload />
                </span>
              </button>
            </span>
          </div>

          {/* Milestones */}
          <div className="flex flex-wrap flex-1 gap-4">
            {milestones.map((m) => (
              <MilestoneCard key={m.label} count={m.count} label={m.label} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="my-16 text-center skills">
          <h3 className="mb-8 font-bold tracking-wide text-h3 dark:text-white text-grayMedium">
            MY SKILLS
          </h3>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            {skills.map((s) => (
              <ProgressBar
                key={s.id}
                id={s.id}
                count={s.count}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
