
import React from 'react';
import type { Contact } from '../data/portfolioData';

interface HeroProps {
  name: string;
  profile: string;
  contact: Contact;
}

export const Hero: React.FC<HeroProps> = ({ name, profile, contact }) => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center gap-12 py-16 md:py-24 border-b border-slate-800">
      <div className="flex-shrink-0">
        {/*
          TODO: Replace this placeholder with your actual picture.
          1. Add your image to the `public/` folder (e.g., `public/profile.jpg`).
          2. Change the `src` attribute below to `/profile.jpg`.
        */}
        <img
          src="/photo.png"
          alt="Gowri Mohan"
          className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-cyan-400 shadow-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-6 max-w-xl">
          {profile}
        </p>
        <div className="flex justify-center md:justify-start items-center gap-4 text-2xl">
          <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Github">
            <i className="fab fa-github"></i>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href={`tel:${contact.phone}`} className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
