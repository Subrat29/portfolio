import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { themeConfig } from '../config/theme';

const Contact = ({ personalInfo, themeClasses }) => {
  const { layout, typography, colors, animation } = themeConfig;

  return (
    <section 
      id="contact" 
      className={`
        ${layout.spacing.section}
        flex flex-col items-center px-4
      `}
    >
      {/* Section Title */}
      <h2 
        className={`
          ${typography.section.title}
          text-center mb-8
          ${animation.transition.colors}
        `}
      >
        Let's Connect
      </h2>

      {/* Subtitle */}
      <p 
        className={`
          ${typography.section.text}
          text-center mb-12
          ${themeClasses.secondaryText}
          ${animation.transition.colors}
        `}
      >
        Feel free to reach out for opportunities or collaboration.
      </p>

      {/* Contact Options */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Email */}
        <a 
          href={`mailto:${personalInfo.email}`} 
          className={`
            flex items-center gap-3 text-sm font-medium
            ${colors.brand.accent} 
            ${colors.brand.accentHover} 
            ${animation.transition.all}
          `}
        >
          <FaEnvelope size={20} /> {personalInfo.email}
        </a>

        {/* Phone */}
        <a 
          href={`tel:${personalInfo.phone}`} 
          className={`
            flex items-center gap-3 text-sm font-medium
            ${colors.brand.accent} 
            ${colors.brand.accentHover} 
            ${animation.transition.all}
          `}
        >
          <FaPhone size={20} /> {personalInfo.phone}
        </a>

        {/* LinkedIn */}
        <a 
          href={personalInfo.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`
            flex items-center gap-3 text-sm font-medium
            ${colors.brand.accent} 
            ${colors.brand.accentHover} 
            ${animation.transition.all}
          `}
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>

        {/* GitHub */}
        <a 
          href={personalInfo.social.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`
            flex items-center gap-3 text-sm font-medium
            ${colors.brand.accent} 
            ${colors.brand.accentHover} 
            ${animation.transition.all}
          `}
        >
          <FaGithub size={20} /> GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
