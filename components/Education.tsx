import React from 'react';
// FIX: Renamed imported 'Education' type to 'EducationType' to resolve name collision with the 'Education' component.
import type { Education as EducationType } from '../data/portfolioData';

interface EducationProps {
  education: EducationType[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
    </h2>
);

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
            <p className="text-cyan-400 mb-1">{edu.degree}</p>
            <p className="text-slate-400">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};