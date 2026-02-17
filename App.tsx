
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { QualitiesSection } from './components/QualitiesSection';
import { InterestsSection } from './components/InterestsSection';
import { AssociationsSection } from './components/AssociationsSection';
import { ContactFooter } from './components/ContactFooter';
import { ProjectModal } from './components/ProjectModal';
import { PROFILE_DATA, CONTACT_INFO, EDUCATION_DATA, EXPERIENCE_DATA, ACADEMIC_PROJECTS_DATA, FREELANCE_PROJECTS_DATA, SKILLS_DATA, LANGUAGES_DATA, QUALITIES_DATA, INTERESTS_DATA, ASSOCIATIONS_DATA, NAVIGATION_LINKS, UI_LABELS } from './constants';
import { LocalizedString, ProjectItem } from './types';

export type Language = 'fr' | 'en';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    document.documentElement.lang = language;
    const root = document.documentElement;
    // Mise à jour de la couleur primaire selon la langue
    if (language === 'fr') {
      root.style.setProperty('--primary-color', '#38bdf8'); // Sky Blue
    } else {
      root.style.setProperty('--primary-color', '#2dd4bf'); // Turquoise
    }
  }, [language]);

  const getLabel = (labelObj: LocalizedString) => labelObj[language];

  return (
    <div className="min-h-screen">
      <Header 
        navItems={NAVIGATION_LINKS} 
        profile={PROFILE_DATA} 
        contact={CONTACT_INFO} 
        language={language}
        setLanguage={setLanguage}
        uiLabels={UI_LABELS}
      />
      
      <main className="overflow-hidden">
        <AboutSection id="about" profile={PROFILE_DATA} language={language} title={getLabel(UI_LABELS.aboutMeTitle)} uiLabels={UI_LABELS} />
        <EducationSection id="education" educationItems={EDUCATION_DATA} language={language} title={getLabel(UI_LABELS.educationTitle)} />
        <SkillsSection id="skills" skillsCategories={SKILLS_DATA} language={language} title={getLabel(UI_LABELS.skillsTitle)} />
        <ExperienceSection id="experience" experiences={EXPERIENCE_DATA} language={language} title={getLabel(UI_LABELS.experienceTitle)} uiLabels={UI_LABELS} />
        <ProjectsSection 
          id="projects" 
          academicProjects={ACADEMIC_PROJECTS_DATA} 
          freelanceProjects={FREELANCE_PROJECTS_DATA} 
          language={language} 
          title={getLabel(UI_LABELS.projectsTitle)}
          onSelectProject={setSelectedProject}
        />
        
        <div className="container mx-auto px-6 md:px-12 py-32 grid grid-cols-1 md:grid-cols-2 gap-24">
          <LanguagesSection languages={LANGUAGES_DATA} language={language} title={getLabel(UI_LABELS.languagesTitle)} />
          <QualitiesSection qualities={QUALITIES_DATA} language={language} title={getLabel(UI_LABELS.qualitiesTitle)} />
          <InterestsSection interests={INTERESTS_DATA} language={language} title={getLabel(UI_LABELS.interestsTitle)} />
          <AssociationsSection associations={ASSOCIATIONS_DATA} language={language} title={getLabel(UI_LABELS.associationsTitle)} />
        </div>
      </main>
      
      <ContactFooter 
        id="contact" 
        contact={CONTACT_INFO} 
        profileName={PROFILE_DATA.name} 
        language={language}
        uiLabels={UI_LABELS}
      />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          language={language} 
          onClose={() => setSelectedProject(null)} 
          uiLabels={UI_LABELS}
        />
      )}
    </div>
  );
};

export default App;
