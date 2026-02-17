
import React from 'react';
import { ContactInfo, LocalizedString } from '../types';
import { EnvelopeIcon, PhoneIcon, LinkedInIcon, FacebookIcon } from '../constants'; 
import { Language } from '../App';

interface ContactFooterProps {
  id?: string;
  contact: ContactInfo;
  profileName: string;
  language: Language;
  uiLabels: { [key: string]: LocalizedString };
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ id, contact, profileName, language, uiLabels }) => {
  const getLabel = (labelObj: LocalizedString) => labelObj[language];
  return (
    <footer id={id} className="bg-bg-main text-text-light py-24 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 flex flex-col items-center">
             <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-bg-main font-black text-xl mb-4 shadow-xl shadow-primary/20">AN</div>
             <h2 className="font-display text-2xl font-black tracking-tighter text-white uppercase">Ahmed Amine Nafti</h2>
             <span className="text-[10px] font-bold tracking-[0.4em] text-text-dim uppercase mt-1">{getLabel(uiLabels.portfolioPersonnel)}</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{getLabel(uiLabels.contactFooterTitle)}</h2>
        <p className="max-w-xl mx-auto mb-12 text-lg text-text-dim font-light">
          {getLabel(uiLabels.contactFooterPitch)}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-16 text-md font-bold uppercase tracking-widest text-white">
          <a href={`mailto:${contact.email}`} className="flex items-center hover:text-primary transition-colors duration-200 group">
            <EnvelopeIcon className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" /> {contact.email}
          </a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-primary transition-colors duration-200 group">
            <PhoneIcon className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" /> {contact.phone}
          </a>
          <div className="flex gap-6">
              <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200 group">
                <LinkedInIcon className="w-6 h-6 text-text-dim group-hover:text-primary" />
              </a>
              <a href={contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200 group">
                <FacebookIcon className="w-6 h-6 text-text-dim group-hover:text-primary" />
              </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 mt-12">
            <p className="text-[10px] font-bold uppercase tracking-widest text-text-dim">&copy; {new Date().getFullYear()} AHMED AMINE NAFTI. {getLabel(uiLabels.copyrightReserved)}.</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-text-dim/40 mt-3">
                {getLabel(uiLabels.designedWith)} <span className="text-primary">&#x2764;</span> React & Tailwind.
            </p>
        </div>
      </div>
    </footer>
  );
};
