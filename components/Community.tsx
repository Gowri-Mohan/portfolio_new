
import React from 'react';
import type { CommunityItem } from '../data/portfolioData';

interface CommunityProps {
  community: CommunityItem[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
    </h2>
);

export const Community: React.FC<CommunityProps> = ({ community }) => {
  return (
    <section id="community" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>Community Outreach</SectionTitle>
       <div className="space-y-8">
        {community.map((item, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg">
            <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.date}</p>
            </div>
            <p className="text-cyan-400 mb-1">{item.role}</p>
            {item.location && <p className="text-slate-400 text-sm">{item.location}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
