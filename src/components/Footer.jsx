import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaTwitter } from 'react-icons/fa';
import { themeConfig } from '../config/theme';

const Footer = ({ personalInfo, themeClasses }) => {
  const { layout, colors, animation } = themeConfig;

  return (
    <footer 
      className={`
        border-t
        ${themeClasses.border}
      `}
    >
      <div 
        className={`
          ${layout.maxWidth}
          mx-auto px-6 py-8
        `}
      >
        <div 
          className="
            flex flex-col md:flex-row justify-between items-center gap-4
          "
        >
          {/* Footer Text */}
          <p 
            className={themeClasses.secondaryText}
          >
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            {/* GitHub */}
            <a 
              href={personalInfo.social.github} 
              className={`
                ${themeClasses.secondaryText} 
                ${colors.brand.accentHover} 
                ${animation.transition.colors}
              `}
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a 
              href={personalInfo.social.linkedin} 
              className={`
                ${themeClasses.secondaryText} 
                ${colors.brand.accentHover} 
                ${animation.transition.colors}
              `}
            >
              <FaLinkedin size={20} />
            </a>

            {/* Twitter */}
            <a 
              href={personalInfo.social.twitter} 
              className={`
                ${themeClasses.secondaryText} 
                ${colors.brand.accentHover} 
                ${animation.transition.colors}
              `}
            >
              <FaTwitter size={20} />
            </a>

            {/* LeetCode */}
            <a 
              href={personalInfo.social.leetcode} 
              className={`
                ${themeClasses.secondaryText} 
                ${colors.brand.accentHover} 
                ${animation.transition.colors}
              `}
            >
              <FaCode size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
