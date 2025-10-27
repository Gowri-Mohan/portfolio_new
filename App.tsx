import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans leading-relaxed">
      <Header contact={portfolioData.contact} />
      <main className="container mx-auto max-w-4xl px-6 py-12 md:py-20">
        <Hero name={portfolioData.name} profile={portfolioData.profile} contact={portfolioData.contact} />
        <Education education={portfolioData.education} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience organizations={portfolioData.organizations} />
      </main>
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
    </div>
  );
};

export default App;