
import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  number?: string;
  icon?: React.ReactNode;
  titleClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className, 
  number = "01",
  icon,
  titleClassName
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-16 md:py-24 px-4 md:px-12 reveal-section ${className} max-w-full overflow-hidden`}>
      <div className="container mx-auto">
        <div className="flex items-center gap-6 mb-12 md:mb-16 max-w-full">
          <div className="flex-shrink-0 flex items-center gap-4 max-w-full">
            {icon ? (
              <div className="flex-shrink-0">{icon}</div>
            ) : (
              <span className="text-primary font-mono text-sm font-bold opacity-40">{number}.</span>
            )}
            <h2 className={`font-display font-extrabold tracking-tighter uppercase text-white break-words ${titleClassName || 'text-3xl md:text-5xl lg:text-6xl'}`} style={{ fontSize: 'clamp(1.5rem, 5vw, 3.75rem)' }}>
              {title}
            </h2>
          </div>
          <div className="h-[1px] bg-white/10 flex-grow hidden md:block"></div>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};
