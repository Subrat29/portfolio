import React, { useState, useEffect } from 'react';
import { FaTrophy, FaChevronDown, FaChevronUp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  // const [currentImageIndexes, setCurrentImageIndexes] = useState({});

const achievements = [
  {
    title: "First Prize in Hackathon",
    description: "Won first prize in a national-level hackathon for developing a real-time collaboration tool for remote teams.",
    images: ["/src/assets/project1.png", "/src/assets/a.png", "/src/assets/b.png"],
    date: "2023"
  },
  {
    title: "Employee of the Year",
    description: "Awarded Employee of the Year for exceptional contributions to the development of the company's flagship product.",
    images: ["/src/assets/employee-award.png", "/src/assets/team.png", "/src/assets/event.png"],
    date: "2022"
  },
  {
    title: "Top Contributor in Open Source",
    description: "Recognized as a top contributor for actively maintaining and enhancing popular open-source libraries.",
    images: ["/src/assets/open-source.png", "/src/assets/contributor.png", "/src/assets/community.png"],
    date: "2021"
  },
  {
    title: "Published Research Paper",
    description: "Published a research paper on AI-driven optimization algorithms in a reputed international journal.",
    images: ["/src/assets/research-paper.png", "/src/assets/presentation.png", "/src/assets/award.png"],
    date: "2020"
  }
];


  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3);

  // Initialize currentImageIndexes with 0 for each achievement
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
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row gap-6">
        {achievement.images && achievement.images.length > 0 && (
          <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
            <LazyLoadImage
              src={achievement.images[currentImageIndexes[index] || 0]}
              alt={achievement.title}
              effect="blur"
              className="w-full h-full object-cover"
            />
            {achievement.images.length > 1 && (
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                <button
                  onClick={(e) => prevImage(index, e)}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <FaArrowLeft size={14} />
                </button>
                <button
                  onClick={(e) => nextImage(index, e)}
                  className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                >
                  <FaArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        )}

        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
              <FaTrophy size={16} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {achievement.title}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            {achievement.description}
          </p>

          <div className="text-sm text-gray-500 dark:text-gray-500">
            {achievement.date}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="achievements">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        ACHIEVEMENTS
      </h2>

      <div className="space-y-6 transition-all duration-500">
        {visibleAchievements.map((achievement, index) => (
          <div
            key={index}
            className={`transform transition-all duration-500 ${index >= 3 && !showAll
              ? 'opacity-0 h-0 overflow-hidden'
              : 'opacity-100 h-auto'
              }`}
          >
            <AchievementCard achievement={achievement} index={index} />
          </div>
        ))}
      </div>

      {achievements.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {showAll ? (
            <>Show Less <FaChevronUp /></>
          ) : (
            <>Show More <FaChevronDown /></>
          )}
        </button>
      )}
    </section>
  );
};

export default Achievements;