
import React from 'react';
import type { SkillCategory } from '../data/portfolioData';

interface SkillsProps {
  skills: {
    technical: SkillCategory;
    soft: SkillCategory;
  };
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
    </h2>
);

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-slate-800/50 rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
    <ul className="space-y-3">
      {category.skills.map((skill, index) => (
        <li key={index} className="flex items-start">
          <i className="fas fa-check-circle text-cyan-400 mt-1 mr-3"></i>
          <span className="text-slate-400">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard category={skills.technical} />
        <SkillCard category={skills.soft} />
      </div>
    </section>
  );
};
