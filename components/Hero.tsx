import React from 'react';
import type { Contact } from '../data/portfolioData';

interface HeroProps {
  name: string;
  subtitle: string;
  profile: string;
  contact: Contact;
}

export const Hero: React.FC<HeroProps> = ({ name, subtitle, profile, contact }) => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center gap-12 py-16 md:py-24 border-b border-slate-800">
      <div className="flex-shrink-0 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-450 to-indigo-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
        <img
          src="photo.png" // <-- This is the correct path
          alt="Gowri Mohan"
          className="relative rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-slate-900 shadow-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-4">
          {subtitle}
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-xl">
          {profile}
        </p>
        <div className="flex justify-center md:justify-start items-center gap-6 text-2xl">
          <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 active:scale-95 duration-200" aria-label="Email" title={contact.email}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 active:scale-95 duration-200" aria-label="Github">
            <i className="fab fa-github"></i>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-450 transition-colors transform hover:scale-110 active:scale-95 duration-200" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          {contact.portfolio && (
            <a href={contact.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 active:scale-95 duration-200" aria-label="Portfolio" title="Portfolio">
              <i className="fas fa-globe"></i>
            </a>
          )}
          <a href={`tel:${contact.phone}`} className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110 active:scale-95 duration-200" aria-label="Phone" title={contact.phone}>
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </section>
  );
};