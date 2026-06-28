import React from "react";
import Header from "../components/Header";
import MilestoneCard from "../components/MilestoneCard";
import { FaDownload } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import { saveAs } from "file-saver";
import Resume from "../assets/pradeep-resume.pdf";

function About() {
  const downloadCv = () => {
    saveAs(Resume, "pradeep-cv.pdf");
  };

  return (
    <div className="px-4 pb-12 lg:pb-0 md:px-16">
      <Header header="ABOUT" colorText="ME" label="RESUME" />
      <div className="flex flex-col items-start lg:flex-row">
        <div className="flex items-center justify-center flex-1 w-full text-left lg:block">
          <span>
            <h3 className="inline-block pb-1 mb-4 font-bold tracking-wide border-b text-h3 dark:text-white text-grayMedium">
              PERSONAL INFO
            </h3>
            <ul className="flex flex-col flex-wrap lg:items-center md:flex-row">
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">First Name : &nbsp;</span>
                <span className="info info-value">Pradeep</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Last Name : &nbsp;</span>
                <span className="info info-value">Yadav</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Age : &nbsp;</span>
                <span className="info info-value">27 Yrs</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Nationality : &nbsp;</span>
                <span className="info info-value">Indian</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Address : &nbsp;</span>
                <span className="info info-value">Noida, Uttar Pradesh</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Phone : &nbsp;</span>
                <span className="info info-value">+91 8417876362</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Email : &nbsp;</span>
                <span className="info info-value">
                  pradeepyadav8253@gmail.com
                </span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Language : &nbsp;</span>
                <span className="info info-value">Hindi, English</span>
              </li>
            </ul>
            <button
              onClick={downloadCv}
              className="inline-flex items-center my-8 hoverable btn-primary"
            >
              <span className="px-4">DOWNLOAD CV</span>{" "}
              <span className="px-4 text-white">
                <FaDownload />
              </span>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap flex-1 gap-4">
          <MilestoneCard count={2} label="Years of Experience" />
          <MilestoneCard count={15} label="Projects" />
          <MilestoneCard count={12} label="Technologies" />
          <MilestoneCard count={5} label="Earned Certificates" />
        </div>
      </div>
      <div className="my-16 text-center skills">
        <h3 className="mb-8 font-bold tracking-wide text-h3 dark:text-white text-grayMedium">
          MY SKILLS
        </h3>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <ProgressBar count={65} label="C++" id="c" />
          <ProgressBar count={65} label="CSS" id="css" />
          <ProgressBar count={85} label="JavaScript" id="javascript" />
          <ProgressBar count={85} label="React.js" id="react" />
          <ProgressBar count={85} label="Next.js" id="next" />
          <ProgressBar count={80} label="Tailwind CSS" id="tailwind" />
          <ProgressBar count={85} label="Redux" id="redux" />
          <ProgressBar count={80} label="Node.js" id="node" />
          <ProgressBar count={75} label="MongoDB" id="mongoose" />
          <ProgressBar count={70} label="Razorpay" id="razorpay" />
          <ProgressBar count={70} label="Firebase" id="firebase" />
          <ProgressBar count={65} label="Hostinger(vps)" id="hostinger" />
        </div>
      </div>
    </div>
  );
}

export default About;
