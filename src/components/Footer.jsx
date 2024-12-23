import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaTwitter } from 'react-icons/fa';

const Footer = ({ personalInfo }) => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Footer Text */}
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            {/* GitHub */}
            <a 
              href={personalInfo.social.github} 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a 
              href={personalInfo.social.linkedin} 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>

            {/* Twitter */}
            <a 
              href={personalInfo.social.twitter} 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={20} />
            </a>

            {/* LeetCode */}
            <a 
              href={personalInfo.social.leetcode} 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="LeetCode Profile"
            >
              <FaCode size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;