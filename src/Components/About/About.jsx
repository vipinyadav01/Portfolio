import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Profile from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Section
        </h1>
        <div className="w-60 h-1 bg-gradient-to-r from-gray-600 to-gray-400 mx-auto rounded-full mb-8"></div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Profile}
              alt="Profile"
              className="rounded-lg shadow-2xl w-64 md:w-80 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Full Stack Developer Section */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex gap-4 items-start">
                <IoArrowForward
                  className="text-gray-400 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    MERN-Stack Developer
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    I have intermediate knowledge of MERN stack development, I create efficient
                    and user-friendly web applications with a focus on modern
                    design and scalability.
                  </p>
                </div>
              </div>
            </div>

            {/* What Drives Me Section */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex gap-4 items-start">
                <IoArrowForward
                  className="text-gray-400 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    What Drives Me
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Driven by curiosity and passion for learning, I combine my
                    MERN stack expertise with modern best practices to create
                    impactful solutions. Eager to collaborate and grow while
                    contributing to innovative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
