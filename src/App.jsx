import React, { useState } from 'react';
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
  const { personalInfo, skills, experience } = portfolioContent;

  return (
    <div className={`min-h-screen ${
      darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'
    } transition-colors duration-200`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-6xl mx-auto px-6">
        <Hero personalInfo={personalInfo} />
        <Skills skillsInfo={skills} />
        <Experience experienceInfo={experience} />
        <Projects />
        <Achievements />
        <Education />
        <Blogs />
        <Contact personalInfo={personalInfo} />
      </main>
      
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;