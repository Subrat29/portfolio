// src/components/SkillsSection.js
import React, { useContext } from 'react';
import { PortfolioContext } from '../context/portfolioContent';

const SkillsSection = () => {
  const { portfolioContent } = useContext(PortfolioContext);
  const { skills } = portfolioContent;

  return (
    <section>
      <h2>Technical Skills</h2>
      <div>
        {skills.map((skillSet, index) => (
          <div key={index}>
            <h3>{skillSet.category}</h3>
            <div>
              {skillSet.items.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
