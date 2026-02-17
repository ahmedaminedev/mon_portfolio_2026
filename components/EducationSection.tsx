
import React from 'react';
import { EducationItem } from '../types';
import { Section } from './Section';
import { Card } from './ui/Card';
import { Language } from '../App';

interface EducationSectionProps {
  id?: string;
  educationItems: EducationItem[];
  language: Language;
  title: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ id, educationItems, language, title }) => {
  return (
    <Section id={id} title={title} number="02">
      <div className="grid md:grid-cols-2 gap-8">
        {educationItems.map((item, index) => (
          <div key={index} className="bg-white/[0.02] border border-white/5 p-8 rounded-xl hover:border-primary/20 transition-all">
            <div className="flex flex-col h-full">
              <span className="inline-block self-start px-2 py-1 bg-primary/10 rounded text-[10px] font-mono text-primary uppercase tracking-wider mb-6">
                {item.period}
              </span>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {item.degree[language]}
              </h3>
              <p className="text-text-dim mb-6 font-medium">
                {item.institution[language]} <span className="text-white/20 mx-2">•</span> {item.location?.[language]}
              </p>
              <div className="mt-auto space-y-2">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-xs text-text-dim flex items-center gap-3">
                    <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                    {detail[language]}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
