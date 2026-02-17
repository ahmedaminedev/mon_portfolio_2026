
import React, { useState, useMemo } from 'react';
import { ProjectItem, ProjectCategory } from '../types';
import { Section } from './Section';
import { Language } from '../App';
import { Card } from './ui/Card';
import { UI_LABELS } from '../constants';

interface ProjectCardProps {
  project: ProjectItem;
  language: Language;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, language, onClick }) => (
  <div className="animate-fade-in-scale h-full cursor-pointer" onClick={onClick}>
    <Card className="flex flex-col h-full !p-0 rounded-[2.5rem] border-white/5 hover:border-primary/40 bg-card-bg shadow-2xl overflow-hidden group/pcard transition-all">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title[language]} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover/pcard:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main to-transparent opacity-80 group-hover/pcard:opacity-60 transition-opacity"></div>
        
        <div className="absolute inset-0 flex items-center justify-center transition-all">
           {project.videoUrl ? (
             <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center justify-center text-primary shadow-2xl opacity-0 group-hover/pcard:opacity-100 scale-75 group-hover/pcard:scale-100 transition-all">
                <i className="fas fa-play text-xl ml-1"></i>
             </div>
           ) : (
             <div className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl text-[10px] font-black text-white/40 uppercase tracking-[0.2em] group-hover/pcard:text-primary transition-colors">
                {UI_LABELS.videoSoon[language]}
             </div>
           )}
        </div>

        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
           <span className="text-[9px] font-black uppercase tracking-[0.3em] bg-primary text-bg-main px-3 py-1.5 rounded-lg shadow-xl inline-block">
             {project.type}
           </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
            {project.title[language]}
          </h3>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-text-dim text-base leading-relaxed mb-8 font-light line-clamp-2">
          {project.description[language]}
        </p>
        
        <div className="mt-auto">
          <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Technologies</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map(tech => (
              <span key={tech} className="text-[9px] font-mono font-bold px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-white/30 group-hover/pcard:text-primary group-hover/pcard:border-primary/30 transition-all uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

type FilterType = 'all' | 'academic' | 'freelance';
type SubFilterType = 'all' | ProjectCategory;

interface ProjectsSectionProps {
  id?: string;
  academicProjects: ProjectItem[];
  freelanceProjects: ProjectItem[];
  language: Language;
  title: string;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, academicProjects, freelanceProjects, language, title, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [activeSubFilter, setActiveSubFilter] = useState<SubFilterType>('all');

  const freelanceCategories: { id: SubFilterType; label: keyof typeof UI_LABELS }[] = [
    { id: 'all', label: 'filterAll' },
    { id: 'ecommerce', label: 'catEcommerce' },
    { id: 'automobile', label: 'catAutomobile' },
    { id: 'portfolio', label: 'catPortfolios' },
    { id: 'elearning', label: 'catELearning' },
  ];

  const filteredProjects = useMemo(() => {
    let list: ProjectItem[] = [];
    if (activeFilter === 'all') {
      list = [...academicProjects, ...freelanceProjects];
    } else if (activeFilter === 'academic') {
      list = academicProjects;
    } else if (activeFilter === 'freelance') {
      list = freelanceProjects;
      if (activeSubFilter !== 'all') {
        list = list.filter(p => p.category === activeSubFilter);
      }
    }
    return list;
  }, [activeFilter, activeSubFilter, academicProjects, freelanceProjects]);

  return (
    <Section id={id} title={title} number="05">
      <div className="flex flex-col items-center mb-16 space-y-8">
        {/* Main Filter Bar */}
        <div className="inline-flex p-1.5 bg-white/[0.03] border border-white/5 rounded-[2rem] backdrop-blur-md shadow-xl">
          {['all', 'academic', 'freelance'].map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f as FilterType); setActiveSubFilter('all'); }}
              className={`px-8 py-3.5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                activeFilter === f ? 'bg-primary text-bg-main shadow-lg shadow-primary/20' : 'text-text-dim hover:text-white'
              }`}
            >
              {UI_LABELS[`filter${f.charAt(0).toUpperCase() + f.slice(1)}` as keyof typeof UI_LABELS][language]}
            </button>
          ))}
        </div>

        {/* Sub-Filter Bar (Only for Freelance) */}
        {activeFilter === 'freelance' && (
          <div className="animate-fade-in-slide-up flex flex-wrap justify-center gap-3">
            {freelanceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSubFilter(cat.id)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] transition-all border ${
                  activeSubFilter === cat.id 
                    ? 'bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(52,211,153,0.15)]' 
                    : 'bg-white/[0.02] border-white/5 text-text-dim hover:border-white/20 hover:text-white'
                }`}
              >
                {UI_LABELS[cat.label][language]}
              </button>
            ))}
          </div>
        )}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              language={language} 
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 opacity-40">
           <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
              <i className="fas fa-search text-xl"></i>
           </div>
           <p className="text-sm font-mono uppercase tracking-widest">Aucun projet trouvé dans cette catégorie</p>
        </div>
      )}
    </Section>
  );
};
