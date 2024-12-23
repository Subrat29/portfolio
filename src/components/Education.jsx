import React from 'react';
import { portfolioContent } from '../data/content';

const Education = () => {
  const { education } = portfolioContent;

  return (
    <section 
      id="education" 
      className="py-20 flex flex-col items-center px-4"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white transition-colors duration-200">
        EDUCATION
      </h2>

      {/* Education Cards */}
      <div className="max-w-4xl w-full space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-200 group"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">
              {edu.school}
            </h3>
            
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
              {edu.degree}
            </p>
            
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">
              {edu.year}
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;