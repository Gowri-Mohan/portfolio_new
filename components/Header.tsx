import React from 'react';
import type { Contact } from '../data/portfolioData';

interface HeaderProps {
  contact: Contact;
}

export const Header: React.FC<HeaderProps> = ({ contact }) => {
  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Interests', href: '#extras' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800/80">
      <div className="container mx-auto max-w-4xl px-6 h-20 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider">
          GM
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>
        <a href={`mailto:${contact.email}`} className="hidden md:inline-block bg-cyan-500 text-slate-900 font-bold py-2 px-5 rounded-lg hover:bg-cyan-400 hover:shadow-cyan-400/20 hover:shadow-lg transition-all active:scale-95 duration-200 text-sm">
          Contact Me
        </a>
      </div>
    </header>
  );
};