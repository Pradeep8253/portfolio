import React, { useState } from "react";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function PortfolioCard({ darkMode, project }) {
  const viewProject = () => {
    window.open(project.projectUrl, "_blank");
  };

  const viewSourceCode = () => {
    window.open(project.sourceCode, "_blank");
  };

  const [openModal, setOpenModal] = useState(false);

  const renderHighlights = project.highlights.map((highlight, index) => {
    return (
      <li className="capitalize" key={index}>
        {highlight}
      </li>
    );
  });

  const renderTechnology = project.technologies.map((technology, index) => {
    return (
      <li className="capitalize" key={index}>
        {technology}
      </li>
    );
  });

  return (
    <div className="relative flex-1 portfolio__card">
      <img
        src={project.image}
        alt={project.name}
        className="object-contain w-full h-full"
      />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-1000 dark:bg-orange/80 bg-green/80 portfolio__card__overlay">
        <button
          onClick={() => setOpenModal(true)}
          className="px-6 py-3 text-lg text-white border border-white rounded-full hover:bg-white dark:hover:text-orange hover:text-green"
        >
          More Details
        </button>
      </div>
      <Modal
        isOpen={openModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className={`px-4 py-8 modal overflow-auto min-w-[85%] md:min-w-[70%] ${
          darkMode ? "bg-slate" : "bg-white"
        }`}
        overlayClassName={`modal-overlay ${
          darkMode ? "bg-orange/10" : "bg-green/20"
        }`}
      >
        <span
          className={`absolute p-1 border rounded-full right-4 top-4 ${
            darkMode ? "border-orange" : "border-green"
          }`}
          onClick={() => setOpenModal(false)}
        >
          <MdClose className={`${darkMode ? "text-orange" : "text-green"}`} />
        </span>
        <div className="mb-8 border-b border-grayMedium">
          <h3
            className={`text-3xl uppercase font-semibold tracking-wider ${
              darkMode ? "text-orange" : "text-green"
            }`}
          >
            {project.name}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <img
              src={project.image}
              alt="archo"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-row items-center flex-1 my-4 md:my-0 justify-evenly md:justify-center md:flex-col">
            <button
              onClick={viewProject}
              target="_blank"
              className={`my-1 border hover:text-white inline-flex items-center justify-center px-4 py-2 bg-transparent ${
                darkMode
                  ? "border-orange text-orange hover:bg-orange"
                  : "hover:bg-green border-green text-green"
              } tracking-wider`}
            >
              View Project
            </button>
            {/* <button
              onClick={viewSourceCode}
              target='_blank'
              className={`my-1 border hover:text-white inline-flex items-center justify-center px-4 py-2 bg-transparent ${
                darkMode
                  ? 'border-orange text-orange hover:bg-orange'
                  : 'hover:bg-green border-green text-green'
              } tracking-wider`}
            >
              Source Code
            </button> */}
          </div>
        </div>
        <div
          className={`my-4 gap-4 flex flex-col md:flex-row ${
            darkMode ? "text-white/50" : "text-grayMedium"
          }`}
        >
          <div className="flex-1 p-4">
            <span className={`block w-full py-2 border-b border-grayMedium`}>
              <h3 className="text-xl font-normal">Highlights</h3>
            </span>
            <ul className="p-4 list-disc">{renderHighlights}</ul>
          </div>
          <div className="flex-1 p-4">
            <span className={`block w-full py-2 border-b border-grayMedium`}>
              <h3 className="text-xl font-normal">Technology Used</h3>
            </span>
            <ul className="p-4 list-disc">{renderTechnology}</ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default PortfolioCard;
