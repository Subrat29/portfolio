// src/components/Navigation.js
import React, { useContext } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { PortfolioContext } from '../context/portfolioContent';

const Navigation = ({ isMenuOpen, toggleMenu, scrollToSection }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { portfolioContent, themeConfig } = useContext(PortfolioContext);
  const { colors, components } = themeConfig;
  const { personalInfo, navigation } = portfolioContent;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          {personalInfo.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((link) => (
            <button key={link.title} onClick={() => scrollToSection(link.id)}>
              {link.title}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <a href={personalInfo.resume}>
            <FaDownload /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4">
          {navigation.map((link) => (
            <button key={link.title} onClick={() => scrollToSection(link.id)}>
              {link.title}
            </button>
          ))}
          <a href={personalInfo.resume}>Resume</a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
