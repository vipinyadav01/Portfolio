import React from "react";

const ProjectCard = ({ title, main, imageUrl }) => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="h-48 overflow-hidden bg-gray-100">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          src={imageUrl || "/api/placeholder/400/3"}
          alt={title}
        />
      </div>

      {/* Content Container */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{main}</p>

        {/* Buttons Container */}
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
            Live Demo
          </button>
          <button className="flex-1 px-4 py-2 bg-white text-gray-700 rounded border border-gray-300 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
