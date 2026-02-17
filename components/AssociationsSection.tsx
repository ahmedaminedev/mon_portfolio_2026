
import React from 'react';
import { AssociationItem } from '../types';
import { Section } from './Section';
import { Card } from './ui/Card';
import { UsersIcon } from './icons/UsersIcon';
import { Language } from '../App';

interface AssociationsSectionProps {
  associations: AssociationItem[];
  language: Language;
  title: string;
}

export const AssociationsSection: React.FC<AssociationsSectionProps> = ({ associations, language, title }) => {
  return (
    <div className="animate-fade-in-slide-up delay-300">
      <Section title={title} icon={<UsersIcon className="w-7 h-7 text-primary" />} titleClassName="text-2xl !mb-6">
        <div className="space-y-6">
          {associations.map((assoc, index) => (
            <Card key={index} interactive={true}>
              <h3 className="text-lg font-semibold text-primary mb-1">{assoc.name[language]}</h3>
              <p className="text-xs text-text-light mb-2">{assoc.period}</p>
              <ul className="list-disc list-inside text-text-light text-sm space-y-1 pl-1">
                {assoc.roles.map((role, idx) => (
                  <li key={idx}>{role[language]}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};
