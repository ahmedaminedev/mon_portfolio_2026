
import React from 'react';
import { SkillCategory } from '../types';
import { Section } from './Section';
import { Language } from '../App';

interface SkillsSectionProps {
  id?: string;
  skillsCategories: SkillCategory[];
  language: Language;
  title: string;
}

const ProgressBar: React.FC<{ level: number, label: string }> = ({ level, label }) => {
  return (
    <div className="group/skill relative py-4">
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-bold text-white/70 uppercase tracking-widest group-hover/skill:text-primary transition-colors duration-300">
          {label}
        </span>
        <span className="text-[10px] font-mono text-primary/60 font-black">{level}%</span>
      </div>
      <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(52,211,153,0.6)] transition-all duration-1000 ease-out origin-left"
          style={{ width: `${level}%` }}
        ></div>
        {/* Glow tip */}
        <div 
          className="absolute top-0 h-full w-4 bg-gradient-to-r from-transparent to-primary/80 blur-[2px] transition-all duration-1000 ease-out"
          style={{ left: `calc(${level}% - 16px)` }}
        ></div>
      </div>
    </div>
  );
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({ id, skillsCategories, language, title }) => {
  return (
    <Section id={id} title={title} number="03" className="relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-[150px] opacity-30 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:auto-rows-[minmax(180px,auto)]">
        
        {skillsCategories.map((category, index) => {
          // Logic for grid span to create bento effect
          const spanClasses = [
            "lg:col-span-8 lg:row-span-2", // Big block for primary skills
            "lg:col-span-4 lg:row-span-2", // Tall side block
            "lg:col-span-4 lg:row-span-1", // Small block
            "lg:col-span-8 lg:row-span-1"  // Wide bottom block
          ];
          
          return (
            <div 
              key={index} 
              className={`${spanClasses[index % spanClasses.length]} group relative bg-[#0c0c0e] border border-white/[0.03] rounded-[2.5rem] p-8 md:p-10 overflow-hidden hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 shadow-2xl`}
            >
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.4em] block">
                      Category_Module_{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-300">
                      {category.name[language]}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:border-primary/20 transition-all">
                    <i className="fas fa-microchip text-xs"></i>
                  </div>
                </div>

                <div className={`grid gap-x-12 gap-y-2 ${index === 0 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                  {category.skills.map((skill) => (
                    <ProgressBar key={skill.name} level={skill.level} label={skill.name} />
                  ))}
                </div>

                {/* Status indicator footer inside card */}
                <div className="mt-auto pt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
                   <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Runtime: Stable // System: Verified</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
