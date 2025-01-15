import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaDiscord,
  FaHeart
} from 'react-icons/fa';

// Custom Icons
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20" className="fill-current">
    <path d="m15.07,48.28h4l10.68-12.14,9.29,12.12h10.86l-14.25-18.84,12.06-13.7h-4l-9.91,11.26-8.5-11.25h-11.21l13.79,17.99-12.82,14.57Zm5.11-29.56h3.64l20.06,26.54h-3.35l-20.34-26.54Z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="fill-current">
    <path d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z" />
    <path d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z" />
    <path d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z" />
  </svg>
);

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
      icon: XIcon,
      href: personalInfo.social.twitter,
      label: "X Profile",
      ariaLabel: "Visit X Profile"
    },
    {
      icon: FaGlobe,
      href: personalInfo.social.blog,
      label: "Blog",
      ariaLabel: "Visit Blog"
    },
    {
      icon: LeetCodeIcon,
      href: personalInfo.social.leetcode,
      label: "LeetCode Profile",
      ariaLabel: "Visit LeetCode Profile"
    },
    {
      icon: FaDiscord,
      href: personalInfo.social.discord,
      label: "Discord",
      ariaLabel: "Join Discord"
    }
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-900">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons Grid */}
          <div className="grid grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="group flex items-center justify-center p-2.5 rounded-lg 
                         bg-gray-50 dark:bg-gray-800 
                         hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10
                         transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-gray-600 dark:text-gray-400 
                               group-hover:text-blue-600 dark:group-hover:text-blue-400 
                               transition-colors duration-300">
                  <social.icon />
                </span>
              </a>
            ))}
          </div>

          {/* Copyright Text with Heart Animation */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {personalInfo.name} <FaHeart className="inline text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;