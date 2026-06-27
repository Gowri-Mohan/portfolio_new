import React from 'react';
import type { Project } from '../data/portfolioData';

interface ProjectsProps {
  projects: Project[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
  </h2>
);

const renderDetailWithLinks = (text: string) => {
  const urlRegex = /\((https?:\/\/[^\s)]+)\)/; // Find URL in parentheses
  const match = text.match(urlRegex);

  if (!match) {
    return text; // Return original text if no URL
  }

  const url = match[1]; // The URL itself
  const mainText = text.replace(urlRegex, '').trim(); // Text without the (url) part

  return (
    <>
      {mainText}{' '}
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium underline">
        View Project <i className="fas fa-external-link-alt text-xs"></i>
      </a>
    </>
  );
};


export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/40 border border-slate-850 p-6 rounded-xl shadow-lg transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-400/5">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-3">
              <h3 className="text-xl font-bold text-cyan-400 tracking-tight leading-snug">{project.title}</h3>
              <span className="text-sm text-slate-500 font-semibold flex-shrink-0">{project.date}</span>
            </div>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.description && <p className="text-slate-350 leading-relaxed text-sm md:text-base mb-4">{project.description}</p>}
            {project.details && (
              <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm md:text-base">
                {project.details.map((detail, i) => (
                  <li key={i}>{renderDetailWithLinks(detail)}</li>
                ))}
              </ul>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors text-sm">
                View Project <i className="fas fa-arrow-up-right-from-square ml-1 text-xs"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};