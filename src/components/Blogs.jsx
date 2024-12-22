import React from 'react';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Blogs = ({ themeClasses }) => {
  const { blogs } = portfolioContent;
  const { colors, components, layout, typography, animation } = themeConfig;

  return (
    <section 
      id="blogs" 
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
        Blogs
      </h2>

      {/* Blogs Grid */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
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
            {/* Blog Title */}
            <h3 
              className={`
                ${typography.section.subtitle} 
                group-hover:${colors.brand.accent} 
                ${animation.transition.colors}
              `}
            >
              {blog.title}
            </h3>

            {/* Blog Description */}
            <p 
              className={`
                ${typography.section.text} 
                mt-4 mb-6 
                ${themeClasses.secondaryText}
              `}
            >
              {blog.description}
            </p>

            {/* Blog Link */}
            <div className="flex gap-4">
              <a 
                href={blog.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-2 
                  text-sm font-medium
                  ${colors.brand.accent} 
                  ${colors.brand.accentHover} 
                  ${animation.transition.all}
                `}
              >
                <FaExternalLinkAlt size={16} /> Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
