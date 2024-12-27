import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaTwitter } from 'react-icons/fa';

const Footer = ({ personalInfo }) => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: personalInfo.social.github, 
      label: "GitHub Profile",
      ariaLabel: "Visit GitHub Profile"
    },
    { 
      icon: FaLinkedin, 
      href: personalInfo.social.linkedin, 
      label: "LinkedIn Profile",
      ariaLabel: "Visit LinkedIn Profile"
    },
    { 
      icon: FaTwitter, 
      href: personalInfo.social.twitter, 
      label: "Twitter Profile",
      ariaLabel: "Visit Twitter Profile"
    },
    { 
      icon: FaCode, 
      href: personalInfo.social.leetcode, 
      label: "LeetCode Profile",
      ariaLabel: "Visit LeetCode Profile"
    }
  ];

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center gap-8">
          {/* Social Icons */}
          <div className="flex items-center gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="group relative p-2"
              >
                <social.icon 
                  size={20} 
                  className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" 
                />
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"></div>
              </a>
            ))}
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} {personalInfo.name}. Built with passion ❤️ and precision.
          </p>
        </div>

        {/* Subtle Gradient Line at Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-blue-400/20"></div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute -z-10 w-full h-full top-0 left-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
    </footer>
  );
};

export default Footer;