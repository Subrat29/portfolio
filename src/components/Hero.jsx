// src/components/HeroSection.js
import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PortfolioContext } from '../context/portfolioContent';

const HeroSection = () => {
  const { portfolioContent } = useContext(PortfolioContext);
  const { personalInfo } = portfolioContent;

  return (
    <section className="text-center">
      <h1>{personalInfo.title}</h1>
      <p>{personalInfo.about}</p>
      <div>
        <a href={personalInfo.social.github}><FaGithub /></a>
        <a href={personalInfo.social.linkedin}><FaLinkedin /></a>
        <a href={`mailto:${personalInfo.email}`}><FaEnvelope /></a>
      </div>
    </section>
  );
};

export default HeroSection;
