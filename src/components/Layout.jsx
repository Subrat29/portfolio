// src/components/Layout.js
import React from 'react';
import Navbar from './Navigation/Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { useScroll } from '../hooks/useScroll';
import { useTheme } from '../hooks/useTheme';

const Layout = ({ children }) => {
  const scrolled = useScroll();
  const [darkMode, setDarkMode] = useTheme();

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} scrolled={scrolled} />
        <main className="max-w-6xl mx-auto px-6">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Layout;