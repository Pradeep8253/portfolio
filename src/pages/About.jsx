"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import MilestoneCard from "../components/MilestoneCard";
import ProgressBar from "../components/ProgressBar";
import { milestones, skills } from "../data/portfolioData";

export default function AboutPage() {
  useEffect(() => {
    gsap.fromTo(
      ".about-info",
      { x: -300, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.3 },
    );
  }, []);

  return (
    <div className="dark:bg-slate bg-white min-h-full overflow-y-auto pb-20">
      <Header header="About" colorText="Me" label="ABOUT" />
      <div className="px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
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
          </div>
          {/* Info */}
          <div className="lg:w-2/3">
            <h2 className="about-info text-2xl font-bold dark:text-white text-grayMedium mb-4">
              Full Stack Developer
            </h2>
            <p className="about-info dark:text-grayLight text-grayMedium leading-relaxed mb-6">
              I'm a passionate full-stack developer with expertise in building
              modern web applications. I love turning ideas into elegant,
              functional digital experiences using cutting-edge technologies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Pradeep" },
                { label: "Email", value: "pradeep@example.com" },
                { label: "Location", value: "India" },
                { label: "Availability", value: "Freelance / Full-time" },
              ].map(({ label, value }) => (
                <div key={label} className="about-info info-wrapper">
                  <span className="info">
                    <span className="info-label">{label}: </span>
                    <span className="info-value">{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="flex flex-wrap mt-16 gap-0">
          {milestones.map((m) => (
            <MilestoneCard key={m.label} count={m.count} label={m.label} />
          ))}
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold dark:text-white text-grayMedium mb-8 text-center">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center">
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
