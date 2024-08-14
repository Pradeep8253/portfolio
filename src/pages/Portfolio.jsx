import React, { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";

import Archo from "../assets/images/porfolio/archo.jpg";
import Audiophile from "../assets/images/porfolio/audiophile.jpg";
import Vesper from "../assets/images/porfolio/vesper.jpg";

function Portfolio({ darkMode }) {
  const portfolioData = [
    {
      name: "Archo",
      image: Archo,
      highlights: [
        "parallax effects",
        "hover effects",
        "loading animation",
        "scroll animation",
        "button",
        "Carousel",
        "sliders",
      ],
      technologies: ["react js", "swiper js", "gsap", "tailwind css"],
      projectUrl: "https://archo-psi.vercel.app/",
      // sourceCode: "https://github.com/sudhanshusaurav/archo",
    },
    {
      name: "Vesper",
      image: Vesper,
      highlights: ["Scroll Animation", "Sliders", "Menu", "UI"],
      technologies: ["HTML", "CSS", "Bootstrap", "Gsap", "Slick Js"],
      projectUrl: "https://vesper-ecru.vercel.app/",
      // sourceCode: 'https://github.com/sudhanshusaurav/vesper',
    },
    {
      name: "Audiophile",
      image: Audiophile,
      highlights: [
        "parallax effects",
        "hover effects",
        "scroll animation",
        "cart management",
      ],
      technologies: ["react js", "gsap", "tailwind css"],
      projectUrl: "https://audiophile-iota.vercel.app/",
      // sourceCode:
      //   "https://github.com/sudhanshusaurav/audiophile_react_tailwind",
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
