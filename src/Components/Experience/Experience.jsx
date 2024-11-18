import React from "react";
import {
  FaCss3,
  FaEye,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNode,
  FaGitSquare,
  FaGithub,
  FaCode,
  FaJava,
  FaGit,
} from "react-icons/fa";
import { SiRedis, SiMongodb, SiPostman, SiVercel } from "react-icons/si";

const TechIcon = ({ icon: Icon, color, name }) => (
  <div className="group relative">
    <span className="p-4 bg-gray-800 hover:bg-gray-700 flex items-center justify-center rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
      <Icon color={color} size={40} />
    </span>
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {name}
    </span>
  </div>
);

const ExperienceCard = ({ icon: Icon, color, title, date, points }) => (
  <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 shadow-lg mb-6">
    <div className="flex items-start gap-6">
      <div className="bg-gray-900 p-3 rounded-lg">
        <Icon color={color} size={40} />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-sm mb-4">{date}</p>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const technologies = [
    { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { icon: FaCss3, color: "#1572B6", name: "CSS3" },
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaFigma, color: "#F24E1E", name: "Figma" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiRedis, color: "#FF4438", name: "Redis" },
    { icon: FaNode, color: "#8CC84B", name: "Node.js" },
    { icon: FaGitSquare, color: "#F05032", name: "Git" },
    { icon: FaGit, color: "#F05032", name: "Git" },
    { icon: FaGithub, color: "#ffffff", name: "GitHub" },
    { icon: SiPostman, color: "#FF6C37", name: "Postman" },
    { icon: SiVercel, color: "#ffffff", name: "Vercel" },
    { icon: FaCode, color: "#00BFFF", name: "Coding" },
    { icon: FaJava, color: "#00BFFF", name: "Java" },
  ];

  const experiences = [
    {
      icon: FaEye,
      color: "#4285F4",
      title: "Coding Blocks",
      date: "May 2024 - July 2024",
      points: [
        "Completed full-stack internship at Coding Blocks, specializing in React",
        "MERN-stack implementation of Ecommerce website with admin panel",
      ],
    },
    {
      icon: FaCode,
      color: "#E50914",
      title: "Internship Studio | Java Development & Training",
      date: "July 2024 - August 2024",
      points: [
        "Completed a Java Development and Training internship at Internship Studio.",
        'Developed the "Pizza Bill Generator" project, automating pizza order calculations and bill generation.',
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-6xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Experience
        </h1>
        <div className="w-60 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full mb-8"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div className="space-y-8">
            <h2 className="text-2xl text-white font-semibold mb-6">
              Technical Skills
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <TechIcon
                  key={index}
                  icon={tech.icon}
                  color={tech.color}
                  name={tech.name}
                />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h2 className="text-2xl text-white font-semibold mb-6">
              Work Experience
            </h2>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                icon={exp.icon}
                color={exp.color}
                title={exp.title}
                date={exp.date}
                points={exp.points}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
