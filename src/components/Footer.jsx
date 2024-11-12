import React, { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaExternalLinkAlt, FaBars, FaTimes, FaPhone, FaCode, FaTwitter, FaTrophy
} from 'react-icons/fa';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';

export default function Footer() {

  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;
  return (
    <footer className={`border-t ${themeClasses.border}`}>
      <div className={`${layout.maxWidth} mx-auto px-6 py-8`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={themeClasses.secondaryText}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={personalInfo.social.github} className={`${themeClasses.secondaryText} ${colors.brand.accentHover} ${animation.transition.colors}`}>
              <FaGithub size={20} />
            </a>
            <a href={personalInfo.social.linkedin} className={`${themeClasses.secondaryText} ${colors.brand.accentHover} ${animation.transition.colors}`}>
              <FaLinkedin size={20} />
            </a>
            <a href={personalInfo.social.twitter} className={`${themeClasses.secondaryText} ${colors.brand.accentHover} ${animation.transition.colors}`}>
              <FaTwitter size={20} />
            </a>
            <a href={personalInfo.social.leetcode} className={`${themeClasses.secondaryText} ${colors.brand.accentHover} ${animation.transition.colors}`}>
              <FaCode size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>)
}
