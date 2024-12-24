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

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-sm' : ''
        } ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'}`}
    >
      <nav className="max-w-5xl mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <a href="#" className="text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.title}
                onClick={() => document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' })}
                className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
              >
                {item.title}
              </button>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <a
              href={personalInfo.resume}
              download
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-colors"
            >
              <FaDownload size={14} />
              <span className="text-sm">Resume</span>
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <a
              href={personalInfo.resume}
              download
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-colors"
            >
              <FaDownload size={12} />
              <span className="text-sm">CV</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
            } border-t`}
          style={{
            maxHeight: isMenuOpen ? '400px' : '0',
            opacity: isMenuOpen ? '1' : '0'
          }}
        >
          <div className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                  } hover:text-blue-500 transition-colors`}
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