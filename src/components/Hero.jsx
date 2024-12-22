import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = ({ personalInfo }) => {
  return (
    <section className="py-20 flex flex-col items-center min-h-[calc(100vh-3.5rem)] justify-center px-4">
      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Greeting Text */}
        <p className="text-sm text-blue-600 dark:text-blue-400 transition-colors duration-200">
          Hi, I'm
        </p>

        {/* Title - Split into gradient and regular text */}
        <h1 className="space-y-2">
          <span className="block text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent transition-colors duration-200">
            {personalInfo.title}
          </span>
        </h1>

        {/* About Text */}
        <p className="text-lg max-w-2xl leading-relaxed text-gray-800 dark:text-gray-200 transition-colors duration-200">
          {personalInfo.about}
        </p>

        {/* Social Links */}
        <div className="flex gap-6 pt-8">
          <a 
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a 
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;