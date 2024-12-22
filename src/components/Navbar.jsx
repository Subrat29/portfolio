import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { portfolioContent } from '../config/content';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { personalInfo, navigation } = portfolioContent;

  const RESUME_URL = '/path-to-your-resume.pdf';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 450;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b ${
      darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'
    } transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo/Name */}
          <a
            href="#"
            className="text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center gap-8">
              {navigation.map((item) => (
                <button
                  key={item.title}
                  onClick={() => document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' })}
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  } hover:text-blue-600 transition-colors duration-200`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Resume */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>

              <a
                href={RESUME_URL}
                download
                className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-colors duration-200"
              >
                <FaDownload size={16} />
                <span>Resume</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full ${
              darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
            } transition-colors duration-200`}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.title}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-2 py-1.5 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                } hover:text-blue-600 transition-colors duration-200`}
              >
                {item.title}
              </button>
            ))}
            <div className={`pt-2 border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-2 py-1.5 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                } hover:text-blue-600 transition-colors duration-200`}
              >
                {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
              </button>

              <a
                href={RESUME_URL}
                download
                className={`mt-2 flex items-center gap-2 px-2 py-1.5 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                } hover:text-blue-600 transition-colors duration-200`}
              >
                <FaDownload size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;