import React, { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaExternalLinkAlt, FaBars, FaTimes, FaPhone, FaCode, FaTwitter, FaTrophy
} from 'react-icons/fa';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';


export default function Experience() {
  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;
  return (
    <section className={layout.spacing.section} id="experience">
      <h2 className={`${typography.section.title} text-center`}>Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <div key={index} className={`mb-8 ${components.card.base} ${themeClasses.border} ${components.card.hover}`}>
            <h3 className={typography.section.subtitle}>{exp.company}</h3>
            <p className={`text-xl ${colors.brand.accent}`}>{exp.position}</p>
            <p className={`${themeClasses.secondaryText} mt-2`}>{exp.period}</p>
            <p className={`mt-4 ${themeClasses.secondaryText} whitespace-pre-line`}>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
