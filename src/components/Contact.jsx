import React, { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaExternalLinkAlt, FaBars, FaTimes, FaPhone, FaCode, FaTwitter, FaTrophy
} from 'react-icons/fa';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';


export default function Contact() {
  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;
  return (
    <section className={layout.spacing.section} id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`${typography.section.title} mb-8`}>Let's Connect</h2>
        <p className={`${typography.hero.subtitle} ${themeClasses.secondaryText} mb-12`}>
          Feel free to reach out for opportunities or collaboration.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <a href={`mailto:${personalInfo.email}`} className={`flex items-center gap-3 text-lg ${colors.brand.accent} ${colors.brand.accentHover} ${animation.transition.colors}`}>
            <FaEnvelope size={24} /> {personalInfo.email}
          </a>
          <a href={`tel:${personalInfo.phone}`} className={`flex items-center gap-3 text-lg ${colors.brand.accent} ${colors.brand.accentHover} ${animation.transition.colors}`}>
            <FaPhone size={24} /> {personalInfo.phone}
          </a>
          <a href={personalInfo.social.linkedin} className={`flex items-center gap-3 text-lg ${colors.brand.accent} ${colors.brand.accentHover} ${animation.transition.colors}`}>
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a href={personalInfo.social.github} className={`flex items-center gap-3 text-lg ${colors.brand.accent} ${colors.brand.accentHover} ${animation.transition.colors}`}>
            <FaGithub size={24} /> Github
          </a>
        </div>
      </div>
    </section>)
}
