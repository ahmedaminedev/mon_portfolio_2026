
import React from 'react';
import { ExperienceItem, LocalizedString } from '../types';
import { Section } from './Section';
import { Language } from '../App';

interface ExperienceSectionProps {
  id?: string;
  experiences: ExperienceItem[];
  language: Language;
  title: string;
  uiLabels: { [key: string]: LocalizedString };
}

const ExperienceCard: React.FC<{ exp: ExperienceItem, language: Language, uiLabels: { [key: string]: LocalizedString } }> = ({ exp, language, uiLabels }) => {
  return (
    <div className="relative pl-8 pb-16 last:pb-0 group">
      <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10 group-hover:bg-primary/20 transition-colors"></div>
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-card-bg border border-white/20 group-hover:border-primary group-hover:bg-primary transition-all duration-500"></div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none group-hover:text-primary transition-colors">
              {exp.role[language]}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-text-dim">
              <span className="text-white font-semibold">{exp.company[language]}</span>
              <span className="text-white/20">•</span>
              <span className="text-sm italic">{exp.location[language]}</span>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black text-primary tracking-[0.2em] uppercase">
              {exp.period}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <ul className="space-y-3 max-w-4xl">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-3 text-text-dim leading-relaxed text-base md:text-lg font-light">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0"></span>
                <span>{resp[language]}</span>
              </li>
            ))}
          </ul>
        </div>

        {exp.technologies && (
          <div className="mt-4 p-6 bg-white/[0.02] border border-white/[0.05] rounded-2xl group-hover:border-primary/20 transition-all duration-500">
            <div className="flex items-center gap-2 mb-4">
               <i className="fas fa-microchip text-[10px] text-primary/40"></i>
               <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">{uiLabels.techStackLabel[language]}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map(tech => (
                <span key={tech} className="text-[11px] font-mono font-bold px-3 py-1.5 bg-primary/5 border border-primary/20 rounded-md text-primary hover:bg-primary hover:text-bg-main transition-all cursor-default uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id, experiences, language, title, uiLabels }) => {
  return (
    <Section id={id} title={title} number="04">
      <div className="max-w-5xl">
        <div className="relative mt-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} language={language} uiLabels={uiLabels} />
          ))}
        </div>
      </div>
    </Section>
  );
};
