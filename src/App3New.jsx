import React, { useState } from 'react';
import {
  FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope, FaDownload,
  FaExternalLinkAlt, FaBars, FaTimes, FaPhone, FaCode, FaTwitter
} from 'react-icons/fa';
import { themeConfig } from './config/theme';
import { portfolioContent } from './config/content';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const themeClasses = darkMode ? colors.dark : colors.light;

  console.log('colors.brand.primary}/10:', `${colors.brand.primary}/10`);
  console.log('colors.brand.primary}/5:', colors.brand.primary / 5);

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} ${animation.transition.colors}`}>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md ${themeClasses.cardBg}/80 border-b ${themeClasses.border}/50 ${animation.transition.colors}`}>
        <div className={`${layout.maxWidth} mx-auto px-6`}>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className={`text-2xl font-bold bg-gradient-to-r ${colors.brand.primary} bg-clip-text text-transparent`}>
              {personalInfo.name}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className={`${themeClasses.secondaryText} ${colors.brand.accentHover} ${animation.transition.colors}`}
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${themeClasses.hover} ${animation.transition.colors}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <a
                href={personalInfo.resume}
                className={`flex items-center gap-2 ${components.button.primary} ${colors.brand.button} ${colors.brand.buttonHover}`}
              >
                <FaDownload size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${themeClasses.hover} ${animation.transition.colors}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-full ${themeClasses.hover} ${animation.transition.colors}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${animation.transition.all} ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
          >
            <div className="flex flex-col gap-4 pb-6">
              {navigation.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${themeClasses.secondaryText} ${colors.brand.accentHover} ${animation.transition.colors} py-2`}
                >
                  {link.title}
                </a>
              ))}
              <a
                href={personalInfo.resume}
                className={`flex items-center justify-center gap-2 ${components.button.primary} ${colors.brand.button} ${colors.brand.buttonHover} mt-4`}
              >
                <FaDownload size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className={`${layout.maxWidth} mx-auto px-6`}>
        {/* Hero Section */}
        <section className={`${layout.spacing.section} text-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 z-0" />
          <h1 className={`${typography.hero.title} bg-gradient-to-r ${colors.brand.primary} bg-clip-text text-transparent relative z-10 mb-6`}>
            {personalInfo.title}
          </h1>
          <p className={`${typography.hero.subtitle} ${themeClasses.text} max-w-3xl mx-auto leading-relaxed relative z-10`}>
            {personalInfo.about}
          </p>
          <div className="flex justify-center gap-6 mt-12 relative z-10">
            <a href={personalInfo.social.github} className={`p-3 ${colors.brand.accentHover} ${animation.transition.colors}`}>
              <FaGithub size={24} />
            </a>
            <a href={personalInfo.social.linkedin} className={`p-3 ${colors.brand.accentHover} ${animation.transition.colors}`}>
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className={`p-3 ${colors.brand.accentHover} ${animation.transition.colors}`}>
              <FaEnvelope size={24} />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className={layout.spacing.section} id="skills">
          <h2 className={`${typography.section.title} text-center`}>Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className={`${components.card.base} ${themeClasses.border} ${components.card.hover} group`}>
                <h3 className={`${typography.section.subtitle} mb-6 group-hover:${colors.brand.accent} ${animation.transition.colors}`}>
                  {skillSet.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillSet.items.map((skill, idx) => (
                    <span key={idx} className={`${components.skillBadge.base} ${themeClasses.skillBadge} ${components.skillBadge.hover} ${animation.transition.colors}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
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

        {/* Projects Section */}
        <section className={layout.spacing.section} id="projects">
          <h2 className={`${typography.section.title} text-center`}>Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${components.card.base} ${themeClasses.border} ${components.card.hover} group`}>
                <h3 className={`${typography.section.subtitle} mb-4 group-hover:${colors.brand.accent} ${animation.transition.colors}`}>
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
                  <a href={project.github} className={`flex items-center gap-2 ${colors.brand.accent} ${colors.brand.accentHover} ${animation.transition.colors}`}>
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.live} className={`flex items-center gap-2 ${colors.brand.accent} ${colors.brand.accentHover} ${animation.transition.colors}`}>
                    <FaExternalLinkAlt size={18} /> Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className={layout.spacing.section} id="achievements">
          <h2 className={`${typography.section.title} text-center`}>Achievements</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className={`${components.card.base} ${themeClasses.border} ${components.card.hover}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.brand.primary}`}></div>
                    <p className={typography.section.text}>{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
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
        </section>

        {/* Blog Section */}
        <section className={layout.spacing.section} id="blogs">
          <h2 className={`${typography.section.title} text-center`}>Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className={`${components.card.base} ${themeClasses.border} ${components.card.hover} group`}>
                <h3 className={`${typography.section.subtitle} mb-4 group-hover:${colors.brand.accent} ${animation.transition.colors}`}>
                  {blog.title}
                </h3>
                <p className={`${themeClasses.secondaryText} mb-6`}>{blog.description}</p>
                <div className="flex gap-6">
                  <a href={blog.live} className={`flex items-center gap-2 ${colors.brand.accent} ${colors.brand.accentHover} ${animation.transition.colors}`}>
                    <FaExternalLinkAlt size={18} /> Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
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
        </section>
      </main>

      {/* Footer */}
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
      </footer>
    </div >
  );
}

export default App;