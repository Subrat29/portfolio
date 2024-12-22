import React, { useState } from 'react';
import { themeConfig } from './config/theme';
import { portfolioContent } from './config/content';
import {
  Navbar,
  Hero,
  Skills,
  Experience,
  Footer,
  Projects,
  Achievements,
  Education,
  Blogs,
  Contact
} from './components/index';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { colors, animation, layout } = themeConfig;
  const { personalInfo, skills, experience } = portfolioContent;

  const themeClasses = darkMode ? colors.dark : colors.light;

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} ${animation.transition.colors}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={`${layout.maxWidth} mx-auto px-6`}>
        <Hero personalInfo={personalInfo} />
        <Skills skillsInfo={skills} themeClasses={themeClasses} />
        <Experience experienceInfo={experience} />
        <Projects themeClasses={themeClasses} />
        <Achievements themeClasses={themeClasses} />
        <Education themeClasses={themeClasses} />
        <Blogs themeClasses={themeClasses} />
        <Contact personalInfo={personalInfo} themeClasses={themeClasses} />
      </main>
      <Footer personalInfo={personalInfo} themeClasses={themeClasses} />
    </div>
  );
}

export default App;