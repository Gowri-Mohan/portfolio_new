
import React from 'react';
import type { Contact } from '../data/portfolioData';

interface FooterProps {
  name: string;
  contact: Contact;
}

export const Footer: React.FC<FooterProps> = ({ name, contact }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="container mx-auto max-w-4xl px-6 py-8 text-center text-slate-500">
        <div className="flex justify-center items-center gap-6 text-2xl mb-4">
          <a href={`mailto:${contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Github">
            <i className="fab fa-github"></i>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        <p className="text-sm mt-2">Designed with passion and coded with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};
