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

const highlightTechTerms = (text: string) => {
  const terms = [
    'AWS SNS', 'Redis', 'Celery', 'PostgreSQL', 'event-driven architecture',
    'Pub/Sub model', 'LMS', 'Lending Management System', 'Docker', 'Azure',
    'Bitbucket', '\\.NET', 'fintech operations', 'credit workflows', 'financial data structures',
    'Agile environment', 'daily scrums', 'sprint planning', 'CI/CD pipelines', 'caching bottlenecks',
    'cross-functional teams'
  ];

  const regex = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const isTerm = terms.some(t => {
      const cleanT = t.replace('\\\\', '\\');
      return new RegExp(`^${cleanT}$`, 'i').test(part);
    });

    if (isTerm) {
      return <strong key={index} className="text-cyan-300 font-semibold">{part}</strong>;
    }
    return part;
  });
};

export const Experience: React.FC<ExperienceProps> = ({ organizations }) => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative border-l-2 border-slate-800 pl-8 space-y-12 ml-3">
        <div className="absolute top-0 -left-[1px] w-0.5 h-full bg-slate-800"></div>
        {organizations.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 bg-slate-900 rounded-full border-2 border-cyan-400 shadow-[0_0_8px_#22d3ee] transition-all group-hover:scale-125 duration-300"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
              <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-cyan-450">{exp.role}</h3>
              <span className="text-xs text-slate-500 font-semibold sm:text-right">{exp.date} &bull; {exp.location}</span>
            </div>
            <p className="text-cyan-400 font-semibold mb-3">{exp.company}</p>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              {highlightTechTerms(exp.description)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};