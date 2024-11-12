import React, { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaExternalLinkAlt, FaBars, FaTimes, FaPhone, FaCode, FaTwitter, FaTrophy
} from 'react-icons/fa';
import { themeConfig } from '../config/theme';
import { portfolioContent } from '../config/content';


export default function Projects() {

  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;

  return (
    <section className={layout.spacing.section} id="projects">
      <h2 className={`${typography.section.title} text-center`}>Projects</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`${components.card.base} ${themeClasses.border} ${components.card.hover} group`}>
            <h3 className={`${typography.section.subtitle} mb-4 group-hover:${colors.brand.accent} ${animation?.transition?.colors}`}>
              {project.title}
            </h3>
            <p className={`${themeClasses.secondaryText} mb-6`}>{project.description}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech, idx) => (
                <span key={idx} className={`${components.skillBadge.base} ${themeClasses.skillBadge}`}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-6">
              <a href={project.github} className={`flex items-center gap-2 ${colors.brand.accent} ${colors.brand.accentHover} ${animation?.transition.colors}`}>
                <FaGithub size={18} /> Code
              </a>
              <a href={project.live} className={`flex items-center gap-2 ${colors.brand.accent} ${colors.brand.accentHover} ${animation?.transition.colors}`}>
                <FaExternalLinkAlt size={18} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>)
}
