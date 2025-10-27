import React from 'react';
import type { Contact } from '../data/portfolioData';

interface HeaderProps {
  contact: Contact;
}

export const Header: React.FC<HeaderProps> = ({ contact }) => {
  const navLinks = [
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700/50">
      <div className="container mx-auto max-w-4xl px-6 h-20 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          GM
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <a href={`mailto:${contact.email}`} className="hidden md:inline-block bg-cyan-500 text-slate-900 font-bold py-2 px-4 rounded-md hover:bg-cyan-400 transition-colors">
          Contact Me
        </a>
      </div>
    </header>
  );
};