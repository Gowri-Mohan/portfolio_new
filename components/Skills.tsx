
import React from 'react';
import type { SkillCategory } from '../data/portfolioData';

interface SkillsProps {
  skills: SkillCategory[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
  </h2>
);

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => (
  <div className="bg-slate-800/40 border border-slate-850 rounded-xl p-6 shadow-lg transform hover:-translate-y-1 hover:shadow-cyan-400/5 hover:border-cyan-400/30 transition-all duration-350 flex flex-col">
    <div className="flex items-center gap-3.5 mb-4">
      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 text-lg">
        <i className={`fas ${category.icon}`}></i>
      </div>
      <h3 className="text-lg font-bold text-white">{category.title}</h3>
    </div>
    <div className="flex flex-wrap gap-2.5">
      {category.skills.map((skill, index) => (
        <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-200">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};
