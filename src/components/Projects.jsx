import React, { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  FolderIcon,
  CalculatorIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

const projectIcons = {
  ChatIcon: <ChatBubbleLeftRightIcon className="w-20 h-20 text-white mb-10" />,
  FolderIcon: <FolderIcon className="w-20 h-20 text-white mb-10" />,
  CalculatorIcon: <CalculatorIcon className="w-20 h-20 text-white mb-10" />,
  PencilIcon: <PencilIcon className="w-20 h-20 text-white mb-10" />,
};

const projects = [
  {
    id: 1,
    name: "ChatMe",
    description: "Instant messaging made simple, fast, and intuitive",
    color: "bg-gradient-to-r from-purple-400 to-pink-500",
    url: "https://chatme.example.com",
    icon: "ChatIcon",
  },
  {
    id: 2,
    name: "Portifolio",
    description:
      "From concept to code: my projects, skills, and creative explorations",
    color: "bg-[#C7C3C0]",
    url: "https://portfolio.example.com",
    icon: "FolderIcon",
  },
  {
    id: 3,
    name: "Calculator",
    description:
      "A reliable and stylish calculator for all your mathematical needs",
    color: "bg-orange-400",
    url: "https://calculator.example.com",
    icon: "CalculatorIcon",
  },
  {
    id: 4,
    name: "Notes App",
    description: "A simple yet powerful notes app to keep you organized",
    color: "bg-blue-400",
    url: "https://notesapp.example.com",
    icon: "PencilIcon",
  },
  {
    id: 4,
    name: "Notes App",
    description: "A simple yet powerful notes app to keep you organized",
    color: "bg-blue-400",
    url: "https://notesapp.example.com",
    icon: "PencilIcon",
  },
  {
    id: 4,
    name: "Notes App",
    description: "A simple yet powerful notes app to keep you organized",
    color: "bg-blue-400",
    url: "https://notesapp.example.com",
    icon: "PencilIcon",
  },
];

const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePrevClick = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative w-full max-w-4xl flex justify-center items-center">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 p-2 text-white bg-gray-800 rounded-full shadow-lg transform -translate-x-1/2"
        >
          &larr;
        </button>

        <div className="flex justify-center items-center space-x-8 relative">
          {projects.map((project, index) => {
            const isActive = index === currentProject;
            const isPrev =
              index ===
              (currentProject - 1 + projects.length) % projects.length;
            const isNext = index === (currentProject + 1) % projects.length;

            let classNames =
              "transition-transform duration-500 overflow-hidden";
            if (isActive) {
              classNames += " scale-100 opacity-100 z-10 transform-none";
            } else if (isPrev) {
              classNames += " scale-75 opacity-80 -translate-x-full";
            } else if (isNext) {
              classNames += " scale-75 opacity-80 translate-x-full";
            } else {
              classNames += "scale-50 opacity-50 translate-x-48";
            }

            return (
              <div
                key={project.id}
                className={`${project.color} ${classNames} p-6 rounded-3xl shadow-lg cursor-pointer transform flex flex-col items-center`}
                style={{
                  width: isActive ? "300px" : "200px",
                  height: isActive ? "400px" : "300px",
                  position: isActive ? "relative" : "absolute",
                }}
              >
                {projectIcons[project.icon]}
                <h2 className="text-3xl font-bold mb-2 text-center">
                  {project.name}
                </h2>
                <p className="text-lg mb-4 text-center">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#2197bd] text-white py-2 px-4 rounded-full text-sm hover:bg-gray-700"
                >
                  Visit Project &rarr;
                </a>
              </div>
            );
          })}
        </div>

        <button
          onClick={handleNextClick}
          className="absolute right-0 p-2 text-white bg-gray-800 rounded-full shadow-lg transform translate-x-1/2"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Project;
