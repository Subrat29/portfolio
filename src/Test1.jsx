import React, { useState } from 'react';
import { themeConfig } from './config/theme';
import { portfolioContent } from './config/content';
import { Navbar, Hero, Skills, Experience, Projects, Achievements, Education, Blogs, Contact, Footer } from './components/index';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colors, typography, animation, layout, components } = themeConfig;
  const { personalInfo, navigation, skills, experience, projects, achievements, education, blogs } = portfolioContent;

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const themeClasses = darkMode ? colors.dark : colors.light;


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the mobile menu if open
    }
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} ${animation.transition.colors}`}>
      {/* Navigation */}
      <Navbar
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        themeClasses={themeClasses}
        animation={animation}
        layout={layout}
        components={components}
        personalInfo={personalInfo}
        navigation={navigation}
      />

      <main className={`${layout.maxWidth} mx-auto px-6`}>
        {/* Hero Section */}
        <Hero 
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          personalInfo={personalInfo}
          animation={animation}
          layout={layout}
          components={components}

        />

        {/* Skills Section */}
        <Skills
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          animation={animation}
          components={components}
          layout={layout}
          skills={skills}
        />

        {/* Experience Section */}
        <Experience
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          layout={layout}
          components={components}
          experience={experience}
        />

        {/* Projects Section */}
        <Projects
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          layout={layout}
          components={components}
          projects={projects}
        />

        {/* Achievements Section */}
        <Achievements
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          layout={layout}
          components={components}
          achievements={achievements}

        />


        {/* Education Section */}
        <Education
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          layout={layout}
          components={components}
          education={education} 
        />

        {/* Blog Section */}
        <Blogs
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          layout={layout}
          components={components}
          blogs={blogs}
        />

        {/* Contact Section */}
        <Contact
          themeClasses={themeClasses}
          colors={colors}
          typography={typography}
          layout={layout}
          components={components}
          personalInfo={personalInfo}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div >
  );
}

export default App;