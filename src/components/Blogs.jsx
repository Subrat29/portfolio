import React, { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaExternalLinkAlt, FaBars, FaTimes, FaPhone, FaCode, FaTwitter, FaTrophy
} from 'react-icons/fa';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';

export default function Blogs() {
  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;
  return (
    <section className={layout.spacing.section} id="blogs">
      <h2 className={`${typography.section.title} text-center`}>Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className={`${components.card.base} ${themeClasses?.border} ${components?.card.hover} group`}>
            <h3 className={`${typography.section.subtitle} mb-4 group-hover:${colors.brand.accent} ${animation?.transition.colors}`}>
              {blog.title}
            </h3>
            <p className={`${themeClasses.secondaryText} mb-6`}>{blog.description}</p>
            <div className="flex gap-6">
              <a href={blog.live} className={`flex items-center gap-2 ${colors.brand.accent} ${colors.brand.accentHover} ${animation?.transition.colors}`}>
                <FaExternalLinkAlt size={18} /> Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>)
}
