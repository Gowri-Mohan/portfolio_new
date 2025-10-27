import React from 'react';
// FIX: Renamed imported 'Experience' type to 'ExperienceType' to resolve name collision with the 'Experience' component.
import type { Experience as ExperienceType } from '../data/portfolioData';

interface ExperienceProps {
  organizations: ExperienceType[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
    </h2>
);

export const Experience: React.FC<ExperienceProps> = ({ organizations }) => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative border-l-2 border-slate-700 pl-8 space-y-12">
         <div className="absolute top-0 -left-[1px] w-0.5 h-full bg-slate-700"></div>
        {organizations.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[38px] top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
            <p className="text-sm text-slate-500 mb-1">{exp.date} &bull; {exp.location}</p>
            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <p className="text-cyan-400 mb-3">{exp.company}</p>
            <p className="text-slate-400">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};