import React, { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";

import CRMImg from "../assets/images/porfolio/crm.webp";
import VaradaImg from "../assets/images/porfolio/varada.webp";
import Click4Flight from "../assets/images/porfolio/click4flight.webp";
import AstroAnkit from "../assets/images/porfolio/astroankitjha.webp";
import CRMAndCMS from "../assets/images/porfolio/holdonworld.webp";

function Portfolio({ darkMode }) {
  const portfolioData = [
    {
      name: "CRM Platform",
      image: CRMImg,
      highlights: [
        "Multi-tenant CRM — Leads, Deals, Invoices, Inventory, Tasks & Support",
        "Role-based Access Control & Dynamic Permissions",
        "Real-time Notifications & Audit Logs",
        "Redux Toolkit, Mantine UI, ExcelJS & API Security",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Redux Toolkit",
        "Mantine UI",
        "ExcelJS",
      ],
      projectUrl: "https://crm.infogainsoft.com",
    },
    {
      name: "Varada Plastech",
      image: VaradaImg,
      highlights: [
        "Full-stack E-commerce Platform — Customer & Admin Modules",
        "JWT Authentication & Razorpay Payment Integration",
        "Image Uploads & Email Services",
        "Analytics Dashboard with ApexCharts",
      ],
      technologies: [
        "Redux Toolkit",
        "Tailwind CSS",
        "Razorpay",
        "Radix UI",
        "Formik",
        "ApexCharts",
      ],
      projectUrl: "https://varadaplastech.com",
    },
    {
      name: "click4flight",
      image: Click4Flight,
      highlights: [
        "End-to-end Flight Search & Results Functionality",
        "Dynamic Filtering & Advanced Search Features",
        "RESTful APIs for Flight Data Fetch & Update",
        "Deployed & Managed on Hostinger VPS",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      projectUrl: "https://click4flight.co.uk",
    },
    {
      name: "Astro Ankit Jha",
      image: AstroAnkit,
      highlights: [
        "Comprehensive Admin Panel for Services & Backend Operations",
        "RESTful APIs for Seamless Frontend-Backend Communication",
        "Razorpay Payment Integration",
        "Deployed & Managed on Hostinger VPS",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Razorpay"],
      projectUrl: "https://astroankitjha.com",
    },
    {
      name: "CRM & CMS",
      image: CRMAndCMS,
      highlights: [
        "Admin Panel Modules with Next.js & Mongoose",
        "Real-time Notification System using Pusher",
        "Enhanced UI with Mantine, Headless UI & React-select",
        "Data Management & Formik-based Forms",
      ],
      technologies: [
        "Next.js",
        "Mongoose",
        "Formik",
        "Mantine",
        "Headless UI",
        "React-select",
        "Pusher",
      ],
      projectUrl: "https://www.holdonworld.com",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loaderSize =
    windowWidth < 767.98 ? 100 : windowWidth < 991.98 ? 200 : 100;
  const override = { display: "block" };

  return (
    <div>
      <Header header="MY" colorText="PORTFOLIO" label="WORKS" />
      <div className="flex flex-wrap gap-8 px-4 md:px-16">
        {portfolioData.map((data) => (
          <div className="min-w-[40%] flex-1" key={data.name}>
            <PortfolioCard darkMode={darkMode} project={data} />
          </div>
        ))}
        <div className="flex items-center justify-center flex-1 dark:bg-orange/70 bg-green/70">
          <div className="flex items-center w-full gap-4 px-4 py-8 justify-evenly md:gap-8 md:p-8">
            <div className="flex items-center justify-center flex-1">
              <ClockLoader
                color={"#fff"}
                loading={true}
                speedMultiplier={0.5}
                size={loaderSize}
                css={override}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-widest text-white">
                Developing
              </h3>
              <h3 className="text-xl font-bold tracking-widest text-white whitespace-nowrap">
                Coming Soon<span className="dot1">.</span>
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

export default Portfolio;
