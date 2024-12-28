import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Education = ({ education }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleEducation = showAll ? education : education.slice(0, 2);

  return (
    <section id="education" className="relative py-24 max-w-6xl mx-auto px-4">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Education & Qualifications
        </h2>
      </div>

      {/* Education Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {visibleEducation.map((edu, index) => (
          <div key={index} className="group relative">
            <div className="transition-all duration-300 hover:translate-x-2">
              {/* Content */}
              <div className="p-6">
                {/* Header with gradient line */}
                <div className="flex items-center space-x-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.school}
                  </h3>
                  <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
                </div>

                {/* Degree */}
                <div className="mb-4">
                  <span className="px-4 py-2 rounded-full text-sm bg-gray-50 dark:bg-gray-800/50 text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-gray-700/50 group-hover:border-blue-500">
                    {edu.degree}
                  </span>
                </div>

                {/* Year */}
                <div className="mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>

              {/* Bottom gradient line that appears on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {education.length > 2 && (
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
                Show More Education <FaChevronDown className="group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
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

export default Education;