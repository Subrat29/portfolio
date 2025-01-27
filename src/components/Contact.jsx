import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = ({ personalInfo }) => {
  return (
    <section className="min-h-[50vh] flex items-center justify-center bg-white dark:bg-gray-900" id="contact">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 relative">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="relative inline-block group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Get in Touch
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg">
            Let's connect and explore opportunities together
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative group">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-100 dark:border-gray-700 relative z-10">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>

              {/* Email Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block group/email"
              >
                <span className="text-xl font-medium text-gray-900 dark:text-white relative">
                  {personalInfo.email}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover/email:w-full transition-all duration-300"></span>
                </span>
              </a>
            </div>
          </div>

          {/* Gradient background effect on hover */}
          <div className="absolute -z-10 w-full h-full top-0 left-0 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 group-hover:from-blue-600/40 group-hover:to-purple-600/40 transition-all duration-300 blur-sm" />
        </div>
      </div>
    </section>
  );
};

export default Contact;