import React, { useState } from 'react';
import { FaTrophy, FaChevronDown, FaChevronUp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Achievements = ({ achievements }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3);

  const [currentImageIndexes, setCurrentImageIndexes] = useState(() =>
    achievements.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {})
  );

  const nextImage = (achievementIndex, e) => {
    e.stopPropagation();
    const imageCount = achievements[achievementIndex].images.length;
    setCurrentImageIndexes(prev => ({
      ...prev,
      [achievementIndex]: (prev[achievementIndex] + 1) % imageCount
    }));
  };

  const prevImage = (achievementIndex, e) => {
    e.stopPropagation();
    const imageCount = achievements[achievementIndex].images.length;
    setCurrentImageIndexes(prev => ({
      ...prev,
      [achievementIndex]: (prev[achievementIndex] - 1 + imageCount) % imageCount
    }));
  };

  const AchievementCard = ({ achievement, index }) => (
    <div className="group relative">
      <div className="p-6 transition-all duration-300 hover:translate-x-2">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Carousel Section */}
          {achievement.images && achievement.images.length > 0 && (
            <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <LazyLoadImage
                src={achievement.images[currentImageIndexes[index] || 0]}
                alt={achievement.title}
                effect="blur"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {achievement.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 transition-opacity duration-300">
                  <button
                    onClick={(e) => prevImage(index, e)}
                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <FaArrowLeft size={14} />
                  </button>
                  <button
                    onClick={(e) => nextImage(index, e)}
                    className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <FaArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Content Section */}
          <div className="flex-1 space-y-4">
            {/* Title with gradient line */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
                <FaTrophy size={16} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <div className="flex-grow h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              {achievement.description}
            </p>

            <div className="px-4 py-2 rounded-full text-sm bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 w-fit">
              {achievement.date}
            </div>
          </div>
        </div>

        {/* Bottom gradient line that appears on hover */}
        <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 max-w-6xl mx-auto px-4" id="achievements">
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Notable Achievements
        </h2>
      </div>

      {/* Achievements Grid */}
      <div className="space-y-16">
        {visibleAchievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} index={index} />
        ))}
      </div>

      {/* Show More/Less Button */}
      {achievements.length > 3 && (
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
                Show More Achievements <FaChevronDown className="group-hover:transform group-hover:translate-y-1 transition-transform duration-300" />
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

export default Achievements;