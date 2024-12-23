import React from 'react';

const Experience = ({ experienceInfo }) => {
  return (
    <section 
      id="experience" 
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
        EXPERIENCE
      </h2>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {experienceInfo.map((exp, index) => (
          <div
            key={index}
            className="relative transition-all duration-300 hover:translate-x-2"
          >
            {/* Timeline Connector */}
            {index !== experienceInfo.length - 1 && (
              <div className="absolute left-0 top-8 bottom-0 w-px border-r border-gray-200 dark:border-gray-700" />
            )}

            {/* Experience Card */}
            <div className="pl-8">
              {/* Company Name */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                {exp.company}
              </h3>

              {/* Position */}
              <p className="text-lg font-medium mt-1 text-blue-600 dark:text-blue-400 transition-colors duration-200">
                {exp.position}
              </p>

              {/* Period */}
              <p className="text-sm mt-1 text-gray-600 italic dark:text-gray-400 transition-colors duration-200">
                {exp.period}
              </p>

              {/* Description */}
              <p className="mt-4 leading-relaxed whitespace-pre-line text-gray-600 dark:text-gray-400 transition-colors duration-200">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;