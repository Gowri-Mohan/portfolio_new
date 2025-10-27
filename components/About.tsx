
import React from 'react';

interface AboutProps {
  profile: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-cyan-400"></span>
    </h2>
);

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-800">
      <SectionTitle>About Me</SectionTitle>
      <p className="text-slate-400 text-lg leading-relaxed">
        {profile} I am passionate about leveraging technology to build innovative solutions. My background in Electronics and Computer Engineering, combined with hands-on experience in web development, data science, and cloud technologies, drives me to tackle complex challenges and continuously learn.
      </p>
    </section>
  );
};
