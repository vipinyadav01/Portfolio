import React from "react";
import ProjectCard from "./ProjectCard";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";
import image1 from "../../assets/zero.png";
import image2 from "../../assets/bg2.png";
import image3 from "../../assets/admin.png";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-commerce Website",
      main: "A full-stack e-commerce platform built with HTML, CSS, JS, ExpressJS, NodeJS, and MongoDB.",
      imageUrl: bannerImg,
    },
    {
      title: "MERN-Stack Project With Admin Panel",
      main: "A MERN stack application featuring an admin panel for management and integration of RazorPay and Cloudinary.",
      imageUrl: image1,
    },
    {
      title: "Portfolio with React And Tailwind",
      main: "A personal portfolio showcasing projects, built with React and Tailwind CSS.",
      imageUrl: image2,
    },
    {
      title: "Admin Panel for Ecom Website",
      main: "An intuitive admin panel designed for managing e-commerce operations, including product listings, order tracking, and user management.",
      imageUrl: image3,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-60 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg"
            >
              <ProjectCard
                title={project.title}
                main={project.main}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
