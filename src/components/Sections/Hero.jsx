// src/components/Sections/Hero.js
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../../config/personalInfo';

const Hero = () => {
  return (
    <section className="py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {personalInfo.title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
        {personalInfo.about}
      </p>
      <div className="flex justify-center gap-6 mt-12">
        <a href={personalInfo.github} className="p-3 hover:text-blue-500 transition-colors duration-200">
          <Github size={24} />
        </a>
        <a href={personalInfo.linkedin} className="p-3 hover:text-blue-500 transition-colors duration-200">
          <Linkedin size={24} />
        </a>
        <a href={`mailto:${personalInfo.email}`} className="p-3 hover:text-blue-500 transition-colors duration-200">
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;