
import React from 'react';
import { ProfileData, LocalizedString } from '../types';
import { Section } from './Section';
import { Language } from '../App';

interface AboutSectionProps {
  id?: string;
  profile: ProfileData;
  language: Language;
  title: string;
  uiLabels: { [key: string]: LocalizedString };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ id, profile, language, title, uiLabels }) => {
  const getLabel = (label: LocalizedString) => label[language];

  const stats = [
    { label: getLabel(uiLabels.yearsOfStudy), value: "6" },
    { label: getLabel(uiLabels.projectsCompleted), value: "15+" },
    { label: getLabel(uiLabels.stackMastery), value: "95%" }
  ];

  const expertiseItems = [
    { 
      label: language === 'fr' ? 'ARCHITECTURE' : 'ARCHITECTURE', 
      val: 'Microservices, Monitoring, CQRS', 
      icon: 'fa-layer-group',
      desc: {
        fr: "Expertise en systèmes distribués avec microservices, monitoring temps réel et patterns CQRS. Assure une scalabilité horizontale massive.",
        en: "Expertise in distributed systems with microservices, real-time monitoring, and CQRS patterns. Ensures massive horizontal scalability."
      }
    },
    { 
      label: language === 'fr' ? 'INFRASTRUCTURE' : 'INFRASTRUCTURE', 
      val: 'Docker / CI-CD', 
      icon: 'fa-server',
      desc: {
        fr: "Mise en œuvre de pipelines CI/CD automatisés et orchestration via Docker. Garantit des déploiements fluides et une haute disponibilité.",
        en: "Implementation of automated CI/CD pipelines and orchestration via Docker. Guarantees smooth deployments and high availability."
      }
    },
    { 
      label: language === 'fr' ? 'BACKEND' : 'BACKEND', 
      val: 'Node.js, Laravel, Spring Boot, .NET', 
      icon: 'fa-code',
      desc: {
        fr: "Développement robuste avec Node.js, Laravel, Spring Boot et .NET. Optimisation des performances serveur et gestion sécurisée.",
        en: "Robust development with Node.js, Laravel, Spring Boot, and .NET. Optimization of server performance and secure data management."
      }
    },
    { 
      label: language === 'fr' ? 'FRONTEND' : 'FRONTEND', 
      val: 'React / Angular', 
      icon: 'fa-laptop-code',
      desc: {
        fr: "Création d'interfaces utilisateur modernes et réactives avec React et Angular. Priorité à l'ergonomie et à l'accessibilité.",
        en: "Creation of modern and reactive user interfaces with React and Angular. Priority on ergonomics and accessibility."
      }
    }
  ];

  return (
    <Section id={id} title={title} number="01">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="lg:col-span-7">
          <div className="space-y-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              {language === 'fr' ? 'Un ' : 'A '}<span className="text-primary">{getLabel(profile.title)}</span> {language === 'fr' ? "dévoué à l'excellence technique et à l'innovation logicielle." : "dedicated to technical excellence and software innovation."}
            </h3>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-text-dim">
              {profile.summary[language]}
            </p>

            <div className="flex flex-wrap gap-10 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/5">
              <div className="group cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors">{getLabel(uiLabels.directContact)}</span>
                <p className="text-lg font-bold text-white mt-1">nafti.ahmed.amine@gmail.com</p>
              </div>
              <div className="group cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors">{getLabel(uiLabels.location)}</span>
                <p className="text-lg font-bold text-white mt-1">{language === 'fr' ? 'Ben Arous, Tunisie' : 'Ben Arous, Tunisia'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-6 bg-primary/10 blur-[100px] rounded-full opacity-40"></div>
          
          <div className="relative bg-[#141417]/60 border border-white/10 rounded-[3rem] p-10 md:p-14 backdrop-blur-2xl shadow-2xl overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
            
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/40"></span>
              {getLabel(uiLabels.coreExpertise)}
            </h4>
            
            <div className="space-y-6">
              {expertiseItems.map((item, i) => (
                <div key={i} className="relative group/item border-b border-white/5 pb-6 last:border-0 last:pb-0 cursor-help">
                  <div className="flex justify-between items-center mb-1">
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase text-text-dim tracking-[0.2em] group-hover/item:text-primary transition-colors flex items-center gap-2">
                         <i className={`fas ${item.icon} text-[8px]`}></i>
                         {item.label}
                      </span>
                      <div className="text-[15px] font-bold text-white group-hover/item:translate-x-1 transition-transform tracking-tight">{item.val}</div>
                    </div>
                    <i className="fas fa-chevron-right text-[8px] text-white/10 group-hover/item:text-primary group-hover/item:translate-x-1 transition-all"></i>
                  </div>

                  <div className="max-h-0 overflow-hidden group-hover/item:max-h-24 transition-all duration-500 ease-in-out">
                    <p className="text-[11px] leading-relaxed text-text-dim/70 pt-3 border-t border-white/5 mt-2">
                      {item.desc[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-white/10 flex items-center justify-between">
              <div className="relative group/grad">
                <div className="absolute -inset-2 bg-primary/20 blur-md rounded-xl opacity-0 group-hover/grad:opacity-100 transition-opacity"></div>
                <div className="relative px-5 py-2.5 bg-primary text-bg-main text-[11px] font-black uppercase tracking-[0.25em] rounded-xl border border-primary/30 shadow-lg shadow-primary/20 flex items-center gap-2">
                  <i className="fas fa-graduation-cap"></i>
                  {getLabel(uiLabels.engineeringGraduate)}
                </div>
              </div>
              <div className="flex gap-1.5">
                {[1,2,3,4,5].map(dot => (
                  <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot < 6 ? 'bg-primary' : 'bg-white/10'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
