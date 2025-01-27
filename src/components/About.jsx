import React from 'react';
import { FaCheck } from 'react-icons/fa';

const About = ({ about }) => {
  return (
    <section className="relative py-24 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {/* About Me Section */}
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              About Me
            </h2>
          </div>
          <p className="md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
            {about.description}
          </p>
          {/* Gradient line separator */}
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full" />
        </div>

        {/* What I Offer Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              What I Offer
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {Object.entries(about.offer).map(([title, description], index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Title with gradient underline */}
                  <div className="relative inline-block">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-colors duration-300">
                      {title}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Hover background effect */}
                {/* <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
    </section>
  );
};

export default About;