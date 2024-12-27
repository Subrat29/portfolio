import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Contact = ({ personalInfo }) => {
  return (
    <section className="relative py-24 max-w-6xl mx-auto px-4" id="contact">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Let's Connect
        </h2>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Email Card */}
        <div className="group relative">
          <div className="h-full p-6 transition-all duration-300 hover:translate-x-2">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Email
              </h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out for opportunities or collaboration.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaEnvelope size={20} />
              <span>{personalInfo.email}</span>
              <FaExternalLinkAlt size={16} />
            </a>
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="group relative">
          <div className="h-full p-6 transition-all duration-300 hover:translate-x-2">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Phone
              </h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Available for quick discussions and urgent matters.
            </p>
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaPhone size={20} />
              <span>{personalInfo.phone}</span>
              <FaExternalLinkAlt size={16} />
            </a>
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="group relative">
          <div className="h-full p-6 transition-all duration-300 hover:translate-x-2">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                LinkedIn
              </h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Connect with me professionally and explore my career journey.
            </p>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaLinkedin size={20} />
              <span>View Profile</span>
              <FaExternalLinkAlt size={16} />
            </a>
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="group relative">
          <div className="h-full p-6 transition-all duration-300 hover:translate-x-2">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                GitHub
              </h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore my projects and contributions to open source.
            </p>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaGithub size={20} />
              <span>View Projects</span>
              <FaExternalLinkAlt size={16} />
            </a>
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-30">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Contact;