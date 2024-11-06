// src/components/Navigation/Navbar.js
import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import { navLinks } from '../../config/navigationLinks';
import { personalInfo } from '../../config/personalInfo';

const Navbar = ({ darkMode, toggleDarkMode, scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={personalInfo.resume}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity duration-200"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 py-2"
              >
                {link.title}
              </a>
            ))}
            <a
              href={personalInfo.resume}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-opacity duration-200"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;