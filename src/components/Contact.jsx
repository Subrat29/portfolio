import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ personalInfo }) => {
  return (
    <section 
      id="contact" 
      className="py-20 flex flex-col items-center px-4"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white transition-colors duration-200">
        LET'S CONNECT
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-center mb-12 text-gray-600 dark:text-gray-400 transition-colors duration-200">
        Feel free to reach out for opportunities or collaboration.
      </p>

      {/* Contact Options */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Email */}
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="flex items-center gap-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
        >
          <FaEnvelope size={20} /> {personalInfo.email}
        </a>

        {/* Phone */}
        <a 
          href={`tel:${personalInfo.phone}`} 
          className="flex items-center gap-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
        >
          <FaPhone size={20} /> {personalInfo.phone}
        </a>

        {/* LinkedIn */}
        <a 
          href={personalInfo.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href={personalInfo.social.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200"
        >
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;