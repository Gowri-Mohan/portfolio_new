import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { SecondaryInfo } from './components/SecondaryInfo';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans leading-relaxed text-slate-300 antialiased selection:bg-cyan-500/30 selection:text-cyan-300">
      <Header contact={portfolioData.contact} />
      <main className="container mx-auto max-w-4xl px-6 py-12 md:py-20">
        <Hero name={portfolioData.name} subtitle={portfolioData.subtitle} profile={portfolioData.profile} contact={portfolioData.contact} />
        <Experience organizations={portfolioData.organizations} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Education education={portfolioData.education} />
        <SecondaryInfo
          volunteering={portfolioData.volunteering}
          certificates={portfolioData.certificates}
          languages={portfolioData.languages}
          extraCurriculars={portfolioData.extraCurriculars}
        />
      </main>
      <Footer name={portfolioData.name} contact={portfolioData.contact} />
    </div>
  );
};

export default App;