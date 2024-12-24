import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaCheck
} from 'react-icons/fa';

const About = ({ about }) => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {/* About Me */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              About Me
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
            {about.description}
          </p>
        </div>

        {/* What I Offer */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              What I Offer
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {Object.entries(about.offer).map(([title, description], index) => (
              <div
                key={index}
                className="group flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <FaCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;