import React from 'react';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';

const Education = ({ themeClasses }) => {
  const { education } = portfolioContent;
  const { colors, components, layout, typography, animation } = themeConfig;

  return (
    <section 
      id="education" 
      className={`
        ${layout.spacing.section} 
        flex flex-col items-center px-4
      `}
    >
      {/* Section Title */}
      <h2 
        className={`
          ${typography.section.title} 
          text-center mb-12
          ${animation.transition.colors}
        `}
      >
        Education
      </h2>

      {/* Education Cards */}
      <div className="max-w-4xl w-full space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className={`
              ${components.card.base} 
              ${themeClasses.border} 
              ${components.card.hover} 
              p-6
              group
            `}
          >
            <h3 
              className={`
                ${typography.section.subtitle} 
                ${animation.transition.colors}
              `}
            >
              {edu.school}
            </h3>
            <p 
              className={`
                text-lg font-medium 
                ${themeClasses.secondaryText} 
                mt-2
              `}
            >
              {edu.degree}
            </p>
            <p 
              className={`
                text-sm font-semibold 
                ${colors.brand.accent} 
                mt-2
              `}
            >
              {edu.year}
            </p>
            <p 
              className={`
                ${typography.section.text} 
                mt-4 
                ${themeClasses.secondaryText}
              `}
            >
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
