import React, { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaExternalLinkAlt, FaBars, FaTimes, FaPhone, FaCode, FaTwitter, FaTrophy
} from 'react-icons/fa';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';


export default function Education() {
  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;
  return (
    <section className={layout.spacing.section} id="education">
      <h2 className={`${typography.section.title} text-center`}>Education</h2>
      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className={`mb-8 ${components.card.base} ${themeClasses.border} ${components.card.hover}`}>
            <h3 className={typography.section.subtitle}>{edu.school}</h3>
            <p className={`text-xl ${themeClasses.secondaryText}`}>{edu.degree}</p>
            <p className={`${colors.brand.accent} font-medium mt-2`}>{edu.year}</p>
            <p className={`mt-4 ${themeClasses.secondaryText}`}>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>)
}
