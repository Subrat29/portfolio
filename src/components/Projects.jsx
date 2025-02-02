import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const ProjectCard = ({ project }) => (
    <div className="group relative">
      <div className="grid md:grid-cols-2 gap-8 items-center p-6 transition-all duration-300 hover:translate-x-2">
        {/* Image Section */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          <LazyLoadImage
            src={project.image}
            alt={project.title}
            effect="blur"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          {/* Title with header line */}
          <div className="flex items-center space-x-3">
            <h3 className="md:text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-full text-xs bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.overview}
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaGithub size={20} />
              <span className='text-xs'>Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaExternalLinkAlt size={15} />
              <span className='text-xs'>Live</span>
            </a>
            <a
              href={project.slide}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaExternalLinkAlt size={15} />
              <span className='text-xs'>Overview</span>
            </a>
          </div>
        </div>

        {/* Bottom gradient line that appears on hover - matching Skills and Experience components */}
        <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 max-w-6xl mx-auto px-4" id="projects">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Featured Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="space-y-16">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Show More/Less Button */}
      {projects.length > 3 && (
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group px-4 py-2 rounded-full text-sm bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
          >
            {showAll ? (
              <>
                Show Less <FaChevronUp className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
              </>
            ) : (
              <>
                Show More Projects <FaChevronDown className="group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      )}

      {/* Decorative background elements */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-30">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Projects;