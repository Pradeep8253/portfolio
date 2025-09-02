import React, { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import IndexByte from "../assets/images/porfolio/indexbyte.png";
import HoldOnWorld from "../assets/images/porfolio/holdonworld.png";
import PressRelease from "../assets/images/porfolio/pressrelease.png";

function Portfolio({ darkMode }) {
  const portfolioData = [
    {
      name: "IndexByte",
      image: IndexByte,
      highlights: [
        "Admin Panel Development",
        "Frontend UI",
        "RESTful API Integration",
        "Real-time Notifications (Firebase)",
      ],
      technologies: [
        "MERN Stack",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      projectUrl: "https://www.indexbyte.com",
    },
    {
      name: "PressRelease",
      image: PressRelease,
      highlights: [
        "Responsive UI",
        "Admin Panel",
        "Payment Integration (Razorpay)",
        "Real-time Notifications",
      ],
      technologies: ["Next.js", "ShadCN UI", "Razorpay", "Firebase"],
      projectUrl: "https://www.pressrelease.org.in",
    },
    {
      name: "CRM & CMS",
      image: HoldOnWorld,
      highlights: [
        "Admin Panel Modules",
        "Data Management with Mongoose",
        "Notification System (Pusher)",
        "Enhanced UI Components",
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
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", function () {});
    };
  }, []);

  let loaderSize;
  if (windowWidth < 767.98) {
    loaderSize = 100;
  } else if (windowWidth < 991.98) {
    loaderSize = 200;
  } else {
    loaderSize = 100;
  }

  const renderPortfolioCards = portfolioData.map((data) => {
    return (
      <div className="min-w-[40%] flex-1" key={data.name}>
        <PortfolioCard darkMode={darkMode} project={data} />
      </div>
    );
  });

  const override = { display: "block" };

  return (
    <div className="">
      <Header header="MY" colorText="PORTFOLIO" label="WORKS" />
      <div className="flex flex-wrap gap-8 px-4 md:px-16">
        {renderPortfolioCards}
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
        {/* <div className='flex-1'></div> */}
      </div>
    </div>
  );
}

export default Portfolio;
