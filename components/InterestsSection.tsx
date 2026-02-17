
import React from 'react';
import { Section } from './Section';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { PuzzlePieceIcon } from './icons/PuzzlePieceIcon';
import { Language } from '../App';
import { LocalizedString } from '../types';

interface InterestsSectionProps {
  interests: LocalizedString[];
  language: Language;
  title: string;
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({ interests, language, title }) => {
  return (
    <Section title={title} icon={<PuzzlePieceIcon className="w-7 h-7 text-primary" />} titleClassName="text-2xl !mb-6">
      <Card interactive={true}>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <Tag key={index} text={interest[language]} className="text-sm px-3 py-1.5" color="accent" />
          ))}
        </div>
      </Card>
    </Section>
  );
};
