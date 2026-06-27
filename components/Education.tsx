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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-slate-800/40 border border-slate-850 p-6 rounded-xl flex flex-col justify-between shadow-lg hover:border-cyan-400/20 transition-all">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{edu.institution}</h3>
              <p className="text-sm font-semibold text-cyan-400 mb-3">{edu.degree}</p>
            </div>
            <p className="text-xs text-slate-400 border-t border-slate-800/60 pt-3 mt-auto font-medium">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};