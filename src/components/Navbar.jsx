import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode, personalInfo, navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 
        ${scrolled ? 'backdrop-blur-md shadow-lg' : ''} 
        ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a 
            href="#" 
            className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resume}
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300"
            >
              <FaDownload size={14} />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <a
              href={personalInfo.resume}
              download
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all duration-300"
            >
              <FaDownload size={12} />
              <span className="text-sm font-medium">CV</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 right-0 transition-all duration-300 ease-in-out ${
            darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
          } border-t backdrop-blur-md`}
          style={{
            maxHeight: isMenuOpen ? '400px' : '0',
            opacity: isMenuOpen ? '1' : '0',
            visibility: isMenuOpen ? 'visible' : 'hidden'
          }}
        >
          <div className="px-6 py-4 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;