import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioContent } from '../config/content';

const Projects = () => {
  const { projects } = portfolioContent;

  return (
    <section 
      className="py-20 flex flex-col items-center px-4" 
      id="projects"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      {/* Projects Grid */}
      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-200 group"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub size={18} /> Code
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:-translate-y-1"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={18} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;