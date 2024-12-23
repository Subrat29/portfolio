import React from 'react';

const Skills = ({ skillsInfo }) => {
  return (
    <section
      id="skills"
      className="py-16 max-w-6xl mx-auto px-4"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white transition-colors duration-200">
        SKILLS
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillsInfo.map((skillSet, index) => (
          <div
            key={index}
            className="space-y-4 transition-all duration-300"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700 transition-colors duration-200">
              {skillSet.category}
            </h3>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {skillSet.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;