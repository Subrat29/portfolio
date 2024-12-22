import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { portfolioContent } from '../config/content';

const Achievements = () => {
  const { achievements } = portfolioContent;

  return (
    <section 
      className="py-20 flex flex-col items-center px-4" 
      id="achievements"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Achievements
      </h2>

      {/* Achievements List */}
      <div className="max-w-4xl w-full grid grid-cols-1 gap-6">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-200 group flex items-center gap-4"
          >
            {/* Icon */}
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
              <FaTrophy size={20} />
            </div>

            {/* Achievement Text */}
            <div className="flex-1 text-lg text-gray-800 dark:text-gray-200 transition-colors duration-200">
              {achievement}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;