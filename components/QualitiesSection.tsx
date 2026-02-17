
import React from 'react';
import { Section } from './Section';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { SparklesIcon } from './icons/SparklesIcon';
import { Language } from '../App';
import { LocalizedString } from '../types';

interface QualitiesSectionProps {
  qualities: LocalizedString[];
  language: Language;
  title: string;
}

export const QualitiesSection: React.FC<QualitiesSectionProps> = ({ qualities, language, title }) => {
  return (
    <div className="animate-fade-in-slide-up delay-100">
      <Section title={title} icon={<SparklesIcon className="w-7 h-7 text-primary" />} titleClassName="text-2xl !mb-6">
        <Card interactive={true}>
          <div className="flex flex-wrap gap-2">
            {qualities.map((quality, index) => (
              <Tag key={index} text={quality[language]} className="text-sm px-3 py-1.5" color="accent"/>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  );
};
