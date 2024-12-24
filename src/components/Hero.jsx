import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaGlobe,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Hero = ({ personalInfo }) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900" id="hero">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-1 md:order-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full">
              <LazyLoadImage
                src={personalInfo.image}
                alt={personalInfo.name}
                effect="blur"
                className="rounded-full object-cover w-full h-full shadow-xl"
                wrapperClassName="w-full h-full"
              />
              {/* Decorative circle background */}
              <div className="absolute -z-10 w-full h-full -top-4 -left-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 dark:opacity-30" />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 md:order-2 text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {personalInfo.name}
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                {personalInfo.title}
              </p>

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <SocialLink href={personalInfo.social.github} icon={<FaGithub size={18} />} label="GitHub" />
              <SocialLink href={personalInfo.social.linkedin} icon={<FaLinkedin size={18} />} label="LinkedIn" />
              <SocialLink href={personalInfo.social.leetcode} icon={<FaCode size={18} />} label="LeetCode" />
              <SocialLink href={personalInfo.social.portfolio} icon={<FaGlobe size={18} />} label="Portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;