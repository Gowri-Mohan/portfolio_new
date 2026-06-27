import React, { useState } from 'react';
import type { Volunteering, Certificate, ExtraCurricular } from '../data/portfolioData';

interface SecondaryInfoProps {
    volunteering: Volunteering[];
    certificates: Certificate[];
    languages: string[];
    extraCurriculars: ExtraCurricular[];
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
    </h2>
);

export const SecondaryInfo: React.FC<SecondaryInfoProps> = ({
    volunteering,
    certificates,
    languages,
    extraCurriculars
}) => {
    const [openSection, setOpenSection] = useState<string | null>('volunteering');

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        {
            id: 'volunteering',
            title: 'Community Outreach & Volunteering',
            icon: 'fa-hands-helping',
            content: (
                <div className="space-y-6 pl-2">
                    {volunteering.map((item, index) => (
                        <div key={index} className="border-l-2 border-slate-700 pl-4 py-1 relative">
                            <div className="absolute -left-[7px] top-2.5 w-3 h-3 bg-cyan-400 rounded-full"></div>
                            <div className="flex flex-col sm:flex-row sm:justify-between items-baseline mb-1">
                                <h4 className="text-base font-bold text-white">{item.role}</h4>
                                <span className="text-xs text-slate-500 font-medium">{item.date}</span>
                            </div>
                            <p className="text-cyan-400 text-sm font-medium">{item.organization}</p>
                            {item.location && <p className="text-slate-400 text-xs mt-1">{item.location}</p>}
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: 'certificates',
            title: 'Certificates & Courses',
            icon: 'fa-award',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certificates.map((cert, index) => (
                        <div key={index} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                            <div className="text-cyan-400 mt-1">
                                <i className="fas fa-certificate text-lg"></i>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-white leading-snug">{cert.title}</h4>
                                <p className="text-xs text-slate-500 mt-1 font-medium">{cert.issuer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: 'languages',
            title: 'Languages',
            icon: 'fa-language',
            content: (
                <div className="flex flex-wrap gap-4">
                    {languages.map((lang, index) => (
                        <div key={index} className="bg-slate-900/50 px-5 py-3 rounded-xl border border-slate-800 flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></div>
                            <span className="text-sm font-medium text-slate-200">{lang}</span>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: 'extraCurriculars',
            title: 'Extracurricular Activities',
            icon: 'fa-star',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {extraCurriculars.map((item, index) => {
                        let iconClass = 'fa-pen-fancy';
                        if (item.title.toLowerCase().includes('music')) iconClass = 'fa-music';
                        if (item.title.toLowerCase().includes('dance')) iconClass = 'fa-shoe-prints';
                        return (
                            <div key={index} className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex flex-col justify-start">
                                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3.5 text-sm">
                                    <i className={`fas ${iconClass}`}></i>
                                </div>
                                <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            )
        }
    ];

    return (
        <section id="extras" className="py-16 md:py-24 border-b border-slate-800">
            <SectionTitle>Secondary Background & Interests</SectionTitle>
            <div className="space-y-4">
                {sections.map((section) => {
                    const isOpen = openSection === section.id;
                    return (
                        <div key={section.id} className="bg-slate-850/25 border border-slate-800/80 rounded-xl overflow-hidden shadow-lg transition-all duration-300">
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-800/40 focus:outline-none transition-colors duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <i className={`fas ${section.icon} text-cyan-400 text-lg w-5 text-center`}></i>
                                    <span className="text-md md:text-lg font-bold text-slate-100">{section.title}</span>
                                </div>
                                <i className={`fas fa-chevron-down text-slate-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}></i>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] border-t border-slate-800/40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                            >
                                <div className="p-6 bg-slate-900/20">
                                    {section.content}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
