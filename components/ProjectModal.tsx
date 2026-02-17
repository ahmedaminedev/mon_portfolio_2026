
import React, { useEffect, useState, useRef } from 'react';
import { ProjectItem, LocalizedString } from '../types';
import { Language } from '../App';

interface ProjectModalProps {
  project: ProjectItem;
  language: Language;
  onClose: () => void;
  uiLabels: { [key: string]: LocalizedString };
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, language, onClose, uiLabels }) => {
  const [isMounted, setIsMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }, 10);

    document.body.style.overflow = 'hidden';
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => { 
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
      clearTimeout(timer);
    };
  }, [onClose]);

  const getLabel = (label: LocalizedString) => label[language];

  const isLocalVideo = project.videoUrl?.toLowerCase().endsWith('.mp4');

  return (
    <div 
      ref={modalRef}
      tabIndex={0}
      className={`fixed inset-0 z-[9999] overflow-y-auto bg-[#050505]/98 backdrop-blur-2xl transition-opacity duration-500 outline-none ${isMounted ? 'opacity-100' : 'opacity-0'}`}
    >
      
      <div className="fixed inset-0 z-0 cursor-default" onClick={onClose}></div>

      <div className="min-h-screen w-full flex justify-center py-10 md:py-20 px-4 md:px-8 relative z-10 pointer-events-none">
        
        <div className={`w-full max-w-7xl bg-[#0c0c0e] border border-white/10 rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] flex flex-col pointer-events-auto transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isMounted ? 'scale-100 translate-y-0' : 'scale-[0.98] translate-y-12'}`}>
          
          <div className="flex-shrink-0 p-8 md:p-12 border-b border-white/5 bg-white/[0.01] flex justify-between items-start gap-8 rounded-t-[2rem]">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-primary text-[11px] font-bold uppercase tracking-[0.15em]">
                  {project.type === 'freelance' ? 'Freelance' : (language === 'fr' ? 'Académique' : 'Academic')}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
                <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.15em]">
                  {project.category ? getLabel(uiLabels[`cat${project.category.charAt(0).toUpperCase() + project.category.slice(1)}` as keyof typeof uiLabels] || {fr:'', en:''}) : ''}
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-[1.1]">
                {getLabel(project.title)}
              </h2>
            </div>
            
            <button 
              onClick={onClose}
              className="group flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 shadow-xl"
            >
              <i className="fas fa-times text-xl transition-transform group-hover:rotate-90"></i>
            </button>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
              
              <div className="lg:col-span-8 space-y-16">
                
                <div className="relative rounded-3xl overflow-hidden bg-black border border-white/5 aspect-video shadow-2xl ring-1 ring-white/10">
                  {project.videoUrl ? (
                    isLocalVideo ? (
                      <video 
                        src={project.videoUrl} 
                        className="w-full h-full object-cover" 
                        controls 
                        autoPlay 
                        muted 
                        loop
                        playsInline
                      ></video>
                    ) : (
                      <iframe 
                        src={`${project.videoUrl}?modestbranding=1&rel=0&autoplay=0`}
                        className="w-full h-full border-0" 
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      ></iframe>
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <img 
                         src={project.imageUrl} 
                         className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[4px] scale-105" 
                         alt="Background placeholder"
                       />
                       
                       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 flex flex-col items-center justify-center p-12 text-center">
                          <div className="w-20 h-20 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/20 mb-8 backdrop-blur-md">
                            <i className="fas fa-video-slash text-2xl"></i>
                          </div>
                          
                          <div className="space-y-4 max-w-md">
                             <div className="inline-block px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                               <span className="text-white/60 text-xs font-bold uppercase tracking-[0.3em]">
                                 {getLabel(uiLabels.videoSoon)}
                               </span>
                             </div>
                             <p className="text-white/30 text-base font-medium italic leading-relaxed">
                               {getLabel(uiLabels.demoInProduction)}
                             </p>
                          </div>
                       </div>
                    </div>
                  )}
                </div>

                <div className="space-y-16">
                  <div className="space-y-6">
                    <h3 className="text-[11px] font-bold text-primary uppercase tracking-[0.4em] flex items-center gap-5">
                      {getLabel(uiLabels.theConcept)}
                      <div className="h-[1px] flex-grow bg-primary/10"></div>
                    </h3>
                    <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                      {getLabel(project.description)}
                    </p>
                  </div>

                  {project.longDescription && (
                    <div className="space-y-8">
                      <h3 className="text-[11px] font-bold text-white/20 uppercase tracking-[0.4em] flex items-center gap-5">
                        {getLabel(uiLabels.technicalSolutions)}
                        <div className="h-[1px] flex-grow bg-white/5"></div>
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {project.longDescription.map((item, i) => (
                          <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-primary/20 transition-all group/item">
                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-bg-main transition-all">
                              <i className="fas fa-bolt text-[10px]"></i>
                            </div>
                            <p className="text-lg text-zinc-400 leading-relaxed font-light">{getLabel(item)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-10">
                
                <div className="flex flex-col gap-4">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      className="flex items-center justify-center gap-4 w-full px-8 py-6 bg-primary text-bg-main rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 hover:-translate-y-1 transition-all shadow-[0_20px_50px_-10px_rgba(var(--primary-rgb),0.3)]"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {getLabel(uiLabels.exploreLive)}
                    </a>
                  )}
                  {project.repoLink && (
                    <a 
                      href={project.repoLink} 
                      target="_blank" 
                      className="flex items-center justify-center gap-4 w-full px-8 py-6 bg-white/5 border border-white/10 text-white rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 hover:-translate-y-1 transition-all"
                    >
                      <i className="fab fa-github text-lg"></i>
                      {getLabel(uiLabels.sourceCode)}
                    </a>
                  )}
                </div>

                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 space-y-10">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">{getLabel(uiLabels.integratedStack)}</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-xl text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/5 space-y-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">{getLabel(uiLabels.timeline)}</span>
                      <span className="text-sm text-zinc-300 font-bold">{project.period || '2024'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">{getLabel(uiLabels.status)}</span>
                      <span className="flex items-center gap-2 text-sm text-primary font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        {getLabel(uiLabels.productionReady)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                  <p className="text-xs text-zinc-500 leading-relaxed italic">
                    {language === 'fr' 
                      ? "Cette solution a été conçue selon des normes d'ingénierie rigoureuses, en mettant l'accent sur la maintenabilité et la performance système." 
                      : "This solution was designed according to rigorous engineering standards, with a focus on maintainability and system performance."}
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          <div className="p-10 border-t border-white/5 bg-white/[0.01] flex justify-center rounded-b-[2rem]">
            <button 
              onClick={onClose}
              className="text-xs font-bold text-white/20 hover:text-white transition-colors uppercase tracking-[0.5em] flex items-center gap-4 group"
            >
              <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
              {getLabel(uiLabels.backToPortfolio)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
