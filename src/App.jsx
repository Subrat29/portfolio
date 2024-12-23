import React, { useState } from 'react';
import { portfolioContent } from './data/content';
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

  const sections = [
    { Component: Hero, props: { personalInfo } },
    { Component: Skills, props: { skillsInfo: skills } },
    { Component: Experience, props: { experienceInfo: experience } },
    { Component: Projects },
    { Component: Achievements },
    { Component: Education },
    { Component: Blogs },
    { Component: Contact, props: { personalInfo } }
  ];

  return (
    <div 
      className={`min-h-screen ${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'
      } transition-all duration-300 ease-in-out`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-24">
        {sections.map(({ Component, props = {} }, index) => (
          <section key={index} className="scroll-mt-20">
            <Component {...props} />
          </section>
        ))}
      </main>
      
      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;