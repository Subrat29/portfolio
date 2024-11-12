import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';


export default function Achievements() {
  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;

  return (
    <section className={layout.spacing.section} id="achievements">
      <h2 className={`${typography.section.title} text-center`}>Achievements</h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className={`${components.card.base} ${themeClasses.border} ${components.card.hover}`}>
              <div className="flex items-center gap-4">
                {/* Added fixed width container for icon */}
                <div className="w-8 flex-shrink-0 flex items-center justify-center">
                  <FaTrophy className={`${colors.brand.primary}`} size={24} />
                </div>
                {/* Text container with full width */}
                <div className="flex-1">
                  <p className={typography.section.text}>{achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>)
}
