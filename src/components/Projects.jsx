import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      "title": "Task Manager App",
      "description": "A web application to manage daily tasks effectively.",
      "overview": "This app helps users organize their tasks by categories, set priorities, and track progress. The project faced challenges like ensuring real-time updates and creating a user-friendly interface. Solutions included implementing WebSocket for real-time communication and using Material-UI for consistent design.",
      "image": "/src/assets/project1.png",
      "tech": ["React", "Express", "PostgreSQL"],
      "github": "https://github.com/username/task-manager",
      "live": "https://taskmanager-app.com"
    },
    {
      "title": "E-commerce Platform",
      "description": "A scalable e-commerce platform for small businesses.",
      "overview": "This project offers features like product catalog management, shopping cart, and secure payments. Challenges included handling high traffic and ensuring secure transactions. Solutions involved implementing load balancing and integrating Stripe for payment processing.",
      "image": "/src/assets/a.png",
      "tech": ["Next.js", "Node.js", "MongoDB"],
      "github": "https://github.com/username/ecommerce-platform",
      "live": "https://ecommerce-demo.com"
    },
    {
      "title": "Portfolio Website",
      "description": "A personal portfolio to showcase projects and skills.",
      "overview": "The portfolio was designed to highlight personal achievements, with features like a contact form and blog integration. Challenges included optimizing performance and making the design responsive. Tailwind CSS and Lighthouse audits were used to achieve these goals.",
      "image": "/src/assets/b.png",
      "tech": ["React", "Vite", "Firebase"],
      "github": "https://github.com/username/portfolio-website",
      "live": "https://portfolio-demo.com"
    }           
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const ProjectCard = ({ project }) => (
    <div className="group">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <LazyLoadImage
            src={project.image}
            alt={project.title}
            effect="blur"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                {tech}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.overview}
          </p>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub size={20} />
              <span>Source Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaExternalLinkAlt size={18} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        PROJECTS
      </h2>

      <div className="space-y-16">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {projects.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-12 mx-auto flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {showAll ? (
            <>
              Show Less <FaChevronUp />
            </>
          ) : (
            <>
              Show More Projects <FaChevronDown />
            </>
          )}
        </button>
      )}
    </section>
  );
};

export default Projects;