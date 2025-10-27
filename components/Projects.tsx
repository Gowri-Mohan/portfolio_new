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
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-cyan-400/10 hover:border-l-4 hover:border-cyan-400">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold text-cyan-400">{project.title}</h3>
              <p className="text-sm text-slate-500">{project.date}</p>
            </div>
            {project.description && <p className="text-slate-400 mb-4">{project.description}</p>}
            {project.details && (
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                {project.details.map((detail, i) => (
                  <li key={i}>{renderDetailWithLinks(detail)}</li>
                ))}
              </ul>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                View Project <i className="fas fa-arrow-right ml-1"></i>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};