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
  Contact,
  About
} from './components/index';

import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { personalInfo, navigation, about, skills, experience, projects, achievements, education, blogs } = portfolioContent;

  const sections = [
    { Component: Hero, props: { personalInfo } },
    { Component: About, props: { about } },
    { Component: Skills, props: { skills } },
    { Component: Experience, props: { experience } },
    { Component: Projects, props: { projects } },
    { Component: Achievements, props: { achievements } },
    { Component: Education, props: { education } },
    { Component: Blogs, props: { blogs } },
    { Component: Contact, props: { personalInfo } }
  ];

  return (
    <div
      className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'
        } transition-all duration-300 ease-in-out`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} personalInfo={personalInfo} navigation={navigation} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-24">
        {sections.map(({ Component, props = {} }, index) => (
          <section key={index} className="scroll-mt-20">
            <Component {...props} />
          </section>
        ))}
      </main>

      <ScrollToTop />

      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;