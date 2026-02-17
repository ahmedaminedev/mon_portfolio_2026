
import React, { useState, useEffect, useRef } from 'react';
import { ProfileData, NavItem, LocalizedString, ContactInfo } from '../types';
import { Language } from '../App';

interface HeaderProps {
  profile: ProfileData;
  navItems: NavItem[];
  contact: ContactInfo;
  language: Language;
  setLanguage: (language: Language) => void;
  uiLabels: { [key: string]: LocalizedString };
}

// Fallback image plus robuste (Portrait professionnel via Unsplash)
const FALLBACK_PROFILE_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";

export const Header: React.FC<HeaderProps> = ({ profile, navItems, contact, language, setLanguage, uiLabels }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavName, setShowNavName] = useState(false);
  
  // Fonction pour résoudre l'URL de l'image de manière robuste
  const resolveImageUrl = (path: string) => {
    if (!path) return FALLBACK_PROFILE_IMAGE;
    if (path.startsWith('http')) return path;
    
    // Simule la logique PUBLIC_URL pour Vercel/React
    const baseUrl = (window as any).process?.env?.PUBLIC_URL || '';
    // Nettoyage des slashes pour éviter "//"
    const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    
    return `${cleanBase}${cleanPath}`;
  };

  const [imgSrc, setImgSrc] = useState(() => resolveImageUrl(profile.profileImageUrl));
  const [imgLoading, setImgLoading] = useState(true);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  // Synchronisation si profileImageUrl change
  useEffect(() => {
    setImgSrc(resolveImageUrl(profile.profileImageUrl));
    setImgLoading(true);
  }, [profile.profileImageUrl]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavName(!entry.isIntersecting && window.scrollY > 50);
      },
      { 
        threshold: 0,
        rootMargin: "-100px 0px 0px 0px"
      }
    );

    if (heroTitleRef.current) {
      observer.observe(heroTitleRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (heroTitleRef.current) observer.unobserve(heroTitleRef.current);
    };
  }, []);

  const getLabel = (labelObj: LocalizedString) => labelObj[language];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const personalSocials = profile.socials.filter(s => s.name === 'LinkedIn' || s.name === 'GitHub');
  const techbridgeSocials = profile.socials.filter(s => s.name === 'Facebook');

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-bg-main/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4 group">
            <div 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className={`w-11 h-11 bg-primary rounded-xl flex items-center justify-center text-bg-main font-black text-sm transition-all duration-500 shadow-lg cursor-pointer hover:scale-110 active:scale-95 ${isScrolled ? 'shadow-primary/40 scale-90' : 'shadow-primary/20'}`}
            >
              AN
            </div>
            
            <div className="relative h-10 flex items-center">
              <div className={`absolute left-0 flex items-center space-x-3 px-4 py-1.5 bg-white/[0.05] rounded-full border border-white/10 backdrop-blur-sm transition-all duration-500 ease-out ${!showNavName ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary text-[9px] font-black uppercase tracking-[0.3em] whitespace-nowrap">{getLabel(uiLabels.helloItsMe)}</span>
              </div>

              <div className={`flex flex-col transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) transform ${showNavName ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                <div className="font-display text-lg font-extrabold tracking-tighter leading-none">
                  <span className="text-white">Ahmed</span>
                  <span className="text-white ml-1">Amine</span>
                </div>
                <span className="text-[9px] font-bold tracking-[0.3em] text-primary uppercase mt-1">Nafti</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.25em] text-text-dim">
            {navItems.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-primary transition-all hover:tracking-[0.35em] cursor-pointer"
              >
                {getLabel(item.name)}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="group relative overflow-hidden text-[10px] font-black border border-primary/30 px-6 py-2.5 rounded-xl bg-white/[0.03] hover:bg-primary transition-all uppercase tracking-[0.2em] text-primary hover:text-bg-main"
            >
              <span className="relative z-10 flex items-center gap-2">
                <i className="fas fa-globe text-[11px]"></i>
                {language === 'fr' ? 'EN' : 'FR'}
              </span>
            </button>
            <button 
              className="lg:hidden text-text-main"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[45] bg-bg-main/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-12 animate-fade-in">
           {navItems.map((item, i) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-4xl font-display font-black tracking-tighter text-white uppercase hover:text-primary transition-colors cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {getLabel(item.name)}
              </a>
            ))}
        </div>
      )}

      <section ref={heroSectionRef} className="relative min-h-screen flex items-center pt-32 lg:pt-48 pb-12 px-4 md:px-12 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px] opacity-40"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-12 text-left order-2 lg:order-1 relative z-20">
              <div className="space-y-6">
                <h1 ref={heroTitleRef} className="font-display text-6xl sm:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-white uppercase break-words">
                  AHMED<br />
                  <span className="text-primary">AMINE</span><br />
                  <span className="text-white">NAFTI</span>
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-text-dim max-w-2xl font-light leading-relaxed">
                {getLabel(profile.heroBio)}
              </p>
              
              <div className="flex flex-col gap-14 pt-4">
                <div className="flex flex-wrap items-start gap-12 md:gap-20">
                  <div className="space-y-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-white/70 flex items-center gap-4">
                      <span className="w-10 h-[1px] bg-primary/40"></span>
                      Ahmed Amine
                    </p>
                    <div className="flex space-x-5">
                      {personalSocials.map(social => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/60 text-text-dim hover:text-primary transition-all shadow-xl hover:-translate-y-2 group">
                          <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary flex items-center gap-4">
                      <span className="w-10 h-[1px] bg-primary/40"></span>
                      TechBridge
                    </p>
                    <div className="flex space-x-5">
                      {techbridgeSocials.map(social => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-primary/20 hover:border-primary text-text-dim hover:text-primary transition-all shadow-xl hover:-translate-y-2 group">
                          <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8">
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="group relative bg-primary text-bg-main font-black py-6 px-16 rounded-2xl text-[12px] uppercase tracking-[0.35em] hover:brightness-110 hover:-translate-y-1 transition-all shadow-2xl shadow-primary/30 overflow-hidden"
                  >
                    <span className="relative z-10">{getLabel(uiLabels.contactMe)}</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative order-1 lg:order-2 mt-0 lg:-ml-12">
              <div className="aspect-[4/5] max-w-md mx-auto relative group">
                {/* Badge Status Localisé */}
                <div className="absolute -top-10 -right-6 bg-[#0c0c0e] border border-white/20 px-8 py-5 rounded-[2.5rem] shadow-2xl z-30 flex items-center gap-5 hover:border-primary/60 transition-all backdrop-blur-md">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                  <div className="flex flex-col">
                    <span className="text-primary font-black tracking-tighter uppercase text-xl leading-none mb-1">
                      {language === 'fr' ? 'Ingénieur' : 'Junior'}
                    </span>
                    <span className="text-[10px] text-text-dim font-black uppercase tracking-[0.3em] opacity-80">
                      {language === 'fr' ? 'Junior' : 'Engineer'}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 w-full h-full rounded-[4.5rem] overflow-hidden border border-white/10 shadow-2xl bg-card-bg">
                  {imgLoading && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse flex items-center justify-center">
                      <i className="fas fa-circle-notch fa-spin text-primary/30"></i>
                    </div>
                  )}
                  <img 
                    src={imgSrc} 
                    alt={profile.name} 
                    onLoad={() => setImgLoading(false)}
                    onError={(e) => {
                      console.warn("Failed to load profile image, using fallback.", e);
                      setImgSrc(FALLBACK_PROFILE_IMAGE);
                      setImgLoading(false);
                    }}
                    className={`w-full h-full object-cover transition-all duration-1000 scale-[1.02] group-hover:scale-100 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-main/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Glow de fond pour l'image */}
                <div className="absolute -inset-8 bg-primary/10 rounded-[5.5rem] blur-2xl -z-10 group-hover:bg-primary/20 transition-all duration-700"></div>
                <div className="absolute -inset-2 border border-white/[0.1] rounded-[4.8rem] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
