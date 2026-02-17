
import React from 'react';
import { ProfileData, ContactInfo, EducationItem, ExperienceItem, ProjectItem, SkillCategory, LanguageItem, AssociationItem, NavItem, SocialLink, CVLink, LocalizedString } from './types';

// Icons components
export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
  </svg>
);

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1-1.465 1.175l.716 3.001a1.5 1.5 0 0 1-2.252 1.503l-1.034.492a.75.75 0 0 0-.342.943l.848 1.848a.75.75 0 0 0 .943.342l.492-1.034a1.5 1.5 0 0 1 1.503-2.252l3.001.716A1.5 1.5 0 0 1 18 11.5v1.148a1.5 1.5 0 0 1-1.175 1.465l-3.001.716a1.5 1.5 0 0 1-1.503-2.252l1.034-.492a.75.75 0 0 0-.943-.342l-1.848.848a.75.75 0 0 0-.342.943l1.034.492a.75.75 0 0 1 2.252 1.503l.716 3.001A1.5 1.5 0 0 1 11.5 18h-1.148a1.5 1.5 0 0 1-1.465-1.175l-.716-3.001a1.5 1.5 0 0 1 2.252-1.503l1.034-.492a.75.75 0 0 0 .342-.943l-.848-1.848a.75.75 0 0 0-.943-.342l-.492 1.034a1.5 1.5 0 0 1-1.503 2.252l-3.001-.716A1.5 1.5 0 0 1 2 8.5v-1.148A1.5 1.5 0 0 1 3.175 5.9l3.001-.716a1.5 1.5 0 0 1 1.503 2.252l-1.034.492a.75.75 0 0 0 .943.342l1.848-.848a.75.75 0 0 0 .342-.943l-1.034-.492A1.5 1.5 0 0 1 5.352 3.5H3.5Z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 116.5 4.75a1.75 1.75 0 010 3.5zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66V19z" />
  </svg>
);

export const GitHubIconConst: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.869-.013-1.704-2.782.603-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.071 1.532 1.03 1.532 1.03.891 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.707 9.707 0 0112 6.885c.853 0 1.732.114 2.548.336 1.909-1.294 2.748-1.025 2.748-1.025.546 1.376.203 2.393.1 2.646.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.565 4.935.359.309.679.922.679 1.857 0 1.337-.012 2.417-.012 2.745 0 .268.18.578.688.48C19.138 20.163 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const CONTACT_INFO: ContactInfo = {
  email: "nafti.ahmed.amine@gmail.com",
  phone: "+216 92 702 533",
  location: {
    fr: "Ezzahra, Ben Arous, Tunisie",
    en: "Ezzahra, Ben Arous, Tunisia"
  },
  linkedinUser: "ahmed-nafti-bab147201",
  linkedinUrl: "https://www.linkedin.com/in/ahmed-nafti-bab147201/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61576603472809"
};

export const PROFILE_DATA: ProfileData = {
  name: "AHMED AMINE NAFTI",
  title: {
    fr: "Ingénieur Web FullStack",
    en: "FullStack Web Engineer"
  },
  summary: {
    fr: "Diplômé de l'ESPRIT, je suis un ingénieur passionné par l'architecture logicielle et les technologies de pointe. Mon approche combine une expertise robuste en backend (Spring Boot, Node.js, Laravel) avec une maîtrise des frameworks frontend modernes (React, Angular). Je m'efforce de concevoir des systèmes scalables, sécurisés et centrés sur l'utilisateur, tout en explorant activement l'intégration de l'intelligence artificielle pour optimiser les performances des applications complexes.",
    en: "An ESPRIT graduate, I am an engineer passionate about software architecture and cutting-edge technologies. My approach combines robust backend expertise (Spring Boot, Node.js, Laravel) with a mastery of modern frontend frameworks (React, Angular). I strive to design scalable, secure, and user-centric systems, while actively exploring the integration of artificial intelligence to optimize the performance of complex applications."
  },
  cvLinks: [
    { name: { fr: "CV Français", en: "French CV" }, url: "/ahmed-amine-nafti-cv-fr.pdf" },
    { name: { fr: "CV English", en: "English CV" }, url: "/ahmed-amine-nafti-cv-en.pdf" }
  ],
  heroBio: {
    fr: "Ingénieur Junior passionné par le FullStack et l'IA, transformant vos idées en produits numériques performants.",
    en: "Junior Engineer passionate about FullStack and AI, transforming your ideas into high-performance digital products."
  },
  profileImageUrl: "/images/mon_image.png", // Chemin local. Si non trouvé, Header utilisera le fallback.
  socials: [
    { name: 'LinkedIn', url: CONTACT_INFO.linkedinUrl, icon: LinkedInIcon },
    { name: 'GitHub', url: 'https://github.com/ahmedaminedev', icon: GitHubIconConst },
    { name: 'Facebook', url: CONTACT_INFO.facebookUrl!, icon: FacebookIcon },
  ]
};

export const NAVIGATION_LINKS: NavItem[] = [
  { name: { fr: "À Propos", en: "About" }, href: "#about" },
  { name: { fr: "Éducation", en: "Education" }, href: "#education" },
  { name: { fr: "Compétences", en: "Skills" }, href: "#skills" },
  { name: { fr: "Expériences", en: "Experience" }, href: "#experience" },
  { name: { fr: "Projets", en: "Projects" }, href: "#projects" },
  { name: { fr: "Contact", en: "Contact" }, href: "#contact" },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: { fr: "Ingénierie en développement web", en: "Engineering in Web Development" },
    institution: { fr: "ESPRIT", en: "ESPRIT" },
    location: { fr: "Ariana", en: "Ariana" },
    period: "Sept. 2021 - Août 2024",
    details: [{ fr: "Formation axée sur la pratique, les projets collaboratifs et les technologies récentes.", en: "Training focused on practice, collaborative projects, and recent technologies." }]
  },
  {
    degree: { fr: "Licence appliquée en développement des systèmes d'information", en: "Applied Bachelor's Degree in Information Systems Development" },
    institution: { fr: "ISET Rades", en: "ISET Rades" },
    location: { fr: "Radès, Ben Arous", en: "Rades, Ben Arous" },
    period: "Sept. 2018 - Juin 2021",
    details: [{ fr: "Fondamentaux en informatique et développement logiciel.", en: "Fundamentals in computer science and software development." }]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: { fr: "Stagiaire PFE - Ingénieur développement web", en: "Final Project Intern - Web Development Engineer" },
    company: { fr: "Medianet", en: "Medianet" },
    location: { fr: "Menzah, Tunis", en: "Menzah, Tunis" },
    period: "Avril 2024 - Déc. 2024",
    responsibilities: [
      { fr: "Conception d'une application de comparaison de prix basée sur le scraping avec architecture microservices.", en: "Designed a price comparison app based on scraping with microservices architecture." },
      { fr: "Intégration du scraping avec BeautifulSoup pour optimiser le rapport qualité-prix.", en: "Integrated scraping with BeautifulSoup to optimize value for money." },
      { fr: "Utilisation du threading pour améliorer les performances concurrentes.", en: "Used threading to improve concurrent performance." },
      { fr: "Implémentation d'APScheduler pour l'automatisation des tâches.", en: "Implemented APScheduler for task automation." },
      { fr: "Gestion des identités via Keycloak et calcul de similarité via TF-IDF.", en: "Identity management via Keycloak and similarity calculation via TF-IDF." }
    ],
    technologies: ["Spring Boot", "Django", "Angular", "MongoDB", "MySQL", "BeautifulSoup", "Keycloak", "TF-IDF"]
  },
  {
    role: { fr: "Stagiaire PFE - Technicien supérieur", en: "Final Project Intern - Senior Technician" },
    company: { fr: "ISET Rades", en: "ISET Rades" },
    location: { fr: "Ben Arous, Tunisie", en: "Ben Arous, Tunisia" },
    period: "Janv. 2020 - Juin 2020",
    responsibilities: [
      { fr: "Développement d'une application administrative pour la gestion des notes en mastère.", en: "Developed an administrative app for managing master's grades." },
      { fr: "Automatisation de l'admission et des plans d'étude.", en: "Automated admission and study plans." },
      { fr: "Génération de PDF personnalisés avec Dompdf.", en: "Generated custom PDFs with Dompdf." }
    ],
    technologies: ["Laravel", "Ajax", "MySQL", "Dompdf"]
  }
];

export const FREELANCE_PROJECTS_DATA: ProjectItem[] = [
  {
    id: "freelance-techbridge",
    title: { fr: "TechBridge – The Bridge Experience", en: "TechBridge – The Bridge Experience" },
    period: "Janv. 2025 - Présent",
    description: { fr: "Conception et développement d’un portfolio immersif et d’un portail business d’élite basé sur le concept du 'Cyber-Pont'.", en: "Design and development of an immersive portfolio and elite business portal based on the 'Cyber-Bridge' concept." },
    longDescription: [
      { fr: "Expérience UI 'Bubble Cyber' : Interface futuriste sous React 19 & Tailwind (angles 2.5rem, accents Néon Azur).", en: " 'Bubble Cyber' UI Experience: Futuristic interface using React 19 & Tailwind (2.5rem corners, Azure Neon accents)." },
      { fr: "Moteur d'Animation Immersif : Fonds de particules dynamiques (Canvas API) et transitions Framer Motion.", en: "Immersive Animation Engine: Dynamic particle backgrounds (Canvas API) and Framer Motion transitions." },
      { fr: "Command Center BI : Module d'analytics natif intégré pour le suivi des flux visiteurs et business intelligence.", en: "BI Command Center: Integrated native analytics module for visitor flow tracking and business intelligence." },
      { fr: "Gestion Hybride des Assets : Système intelligent supportant importation locale (Multer) et liens distants.", en: "Hybrid Asset Management: Intelligent system supporting local import (Multer) and remote links." },
      { fr: "Cockpit d'Admin Live : Interface propriétaire avec module de Live Preview pour une gestion de contenu temps réel.", en: "Live Admin Cockpit: Proprietary interface with Live Preview module for real-time content management." }
    ],
    technologies: ["React 19", "Node.js", "Express", "MongoDB", "TypeScript", "Framer Motion", "Tailwind CSS", "Canvas API", "JWT", "Vite"],
    type: "freelance",
    category: "portfolio",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/images/techbridge.mp4"
  },
  {
    id: "freelance-autocare",
    title: { fr: "AutoCare - Écosystème Automobile Intelligent", en: "AutoCare - Intelligent Automotive Ecosystem" },
    period: "Janv. 2024 - Présent",
    description: { fr: "Architecture SaaS Multi-Rôles avec diagnostic prédictif IA Gemini et mapping Leaflet interactif.", en: "Multi-Role SaaS Architecture with Gemini AI predictive diagnosis and interactive Leaflet mapping." },
    longDescription: [
      { fr: "Moteur Prédictif IA (Gemini API) : Analyse de l'historique d'entretien pour prédictions personnalisées selon standards constructeurs.", en: "AI Predictive Engine (Gemini API): Analysis of maintenance history for personalized predictions based on manufacturer standards." },
      { fr: "Expérience UI/UX Neumorphic : Interface moderne sous React & Tailwind avec mode sombre dynamique.", en: "Neumorphic UI/UX Experience: Modern interface using React & Tailwind with dynamic dark mode." },
      { fr: "Système de Géolocalisation Leaflet : Calcul de distance (Haversine) et APIs Photon pour trouver les garages partenaires.", en: "Leaflet Geolocation System: Distance calculation (Haversine) and Photon APIs to find partner garages." },
      { fr: "Génération Assistée par IA : Module d'admin créant descriptions et icônes via prompts génératifs dynamiques.", en: "AI-Assisted Generation: Admin module creating descriptions and icons via dynamic generative prompts." },
      { fr: "Sécurisation JWT & Rotation : Rotation sophistiquée de Refresh Tokens et intégration OAuth2 (Google/Facebook).", en: "JWT & Rotation Security: Sophisticated Refresh Token rotation and OAuth2 integration (Google/Facebook)." },
      { fr: "Carnet d'Entretien Numérique : Exportation PDF via jsPDF-AutoTable et gestion QR Code pour partage public sécurisé.", en: "Digital Maintenance Log: PDF export via jsPDF-AutoTable and QR Code management for secure public sharing." }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Google Gemini API", "Leaflet", "TypeScript", "Vite", "jsPDF", "Tailwind"],
    type: "freelance",
    category: "automobile",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "/images/autocare.mp4"
  }
];

// Academic Projects Data
export const ACADEMIC_PROJECTS_DATA: ProjectItem[] = [
  {
    id: "academic-elearning",
    title: { fr: "EduHub – Plateforme E-Learning", en: "EduHub – E-Learning Platform" },
    period: "Sept. 2023 - Janv. 2024",
    description: { fr: "Conception d'une plateforme d'apprentissage en ligne avec gestion de cours, examens et certificats.", en: "Design of an online learning platform with course management, exams, and certificates." },
    longDescription: [
      { fr: "Gestion multi-rôles : Interfaces dédiées pour Étudiants, Formateurs et Administrateurs.", en: "Multi-role management: Dedicated interfaces for Students, Trainers, and Administrators." },
      { fr: "Système de Quiz Interactive : Création et passage d'examens avec correction automatique.", en: "Interactive Quiz System: Creation and taking of exams with automatic correction." }
    ],
    technologies: ["Spring Boot", "Angular", "MySQL", "Docker"],
    type: "academic",
    category: "elearning",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
    {
        name: { fr: "Frameworks & Librairies", en: "Frameworks & Libraries" },
        skills: [
            { name: "Spring Boot", level: 85 }, { name: "Django", level: 80 }, { name: "Laravel", level: 85 },
            { name: "React / Angular", level: 90 }, { name: "Node.js / Express", level: 88 }
        ]
    },
    {
        name: { fr: "Langages & IA", en: "Languages & AI" },
        skills: [
            { name: "JavaScript / TypeScript", level: 90 }, { name: "Python", level: 85 }, 
            { name: "Java", level: 80 }, { name: "Google Gemini API", level: 88 }
        ]
    },
    {
        name: { fr: "Bases de Données & Outils", en: "Databases & Tools" },
        skills: [
            { name: "MySQL / MongoDB", level: 85 }, { name: "Docker / CI-CD", level: 75 }, 
            { name: "Git / Jenkins", level: 85 }
        ]
    }
];

// Languages Data
export const LANGUAGES_DATA: LanguageItem[] = [
  { name: { fr: "Arabe", en: "Arabic" }, level: 5, levelText: { fr: "Natif", en: "Native" } },
  { name: { fr: "Français", en: "French" }, level: 5, levelText: { fr: "Bilingue", en: "Bilingual" } },
  { name: { fr: "Anglais", en: "English" }, level: 4, levelText: { fr: "Avancé", en: "Advanced" } }
];

// Soft Skills / Qualities Data
export const QUALITIES_DATA: LocalizedString[] = [
  { fr: "Autonomie", en: "Autonomy" },
  { fr: "Esprit d'équipe", en: "Teamwork" },
  { fr: "Curiosité technique", en: "Technical Curiosity" },
  { fr: "Capacité d'adaptation", en: "Adaptability" }
];

// Interests Data
export const INTERESTS_DATA: LocalizedString[] = [
  { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
  { fr: "Nouvelles Technologies", en: "New Technologies" },
  { fr: "Football", en: "Football" },
  { fr: "Voyages", en: "Traveling" }
];

// Associations Data
export const ASSOCIATIONS_DATA: AssociationItem[] = [
  {
    name: { fr: "Club Informatique ESPRIT", en: "ESPRIT Computer Club" },
    period: "2022 - 2024",
    roles: [
      { fr: "Membre actif du pôle développement", en: "Active member of the development pole" },
      { fr: "Organisation de workshops techniques", en: "Organization of technical workshops" }
    ]
  }
];

export const UI_LABELS = {
  helloItsMe: { fr: "BONJOUR, C'EST MOI", en: "HELLO, IT'S ME" },
  contactMe: { fr: "Contactez-moi", en: "Contact Me" },
  aboutMeTitle: { fr: "À Propos de Moi", en: "About Me" },
  skillsTitle: { fr: "Compétences Techniques", en: "Technical Skills" },
  experienceTitle: { fr: "Expériences Professionnelles", en: "Professional Experience" },
  projectsTitle: { fr: "Projets Réalisés", en: "Projects" },
  educationTitle: { fr: "Éducation", en: "Education" },
  languagesTitle: { fr: "Langues", en: "Languages" },
  qualitiesTitle: { fr: "Qualités", en: "Soft Skills" },
  interestsTitle: { fr: "Centres d'Intérêt", en: "Interests" },
  associationsTitle: { fr: "Engagement Associatif", en: "Associations" },
  contactFooterTitle: { fr: "Contactez-moi", en: "Contact Me" },
  contactFooterPitch: { fr: "Prêt à relever de nouveaux défis.", en: "Ready for new challenges." },
  copyrightReserved: { fr: "Tous droits réservés", en: "All rights reserved" },
  designedWith: { fr: "Conçu avec", en: "Designed with" },
  portfolioPersonnel: { fr: "Portfolio Personnel", en: "Personal Portfolio" },
  juniorStatus: { fr: "Ingénieur Junior", en: "Junior Engineer" },
  yearsOfStudy: { fr: "Années d'études", en: "Years of Study" },
  projectsCompleted: { fr: "Projets Réalisés", en: "Projects Completed" },
  stackMastery: { fr: "Maîtrise Stack", en: "Stack Mastery" },
  directContact: { fr: "CONTACT DIRECT", en: "DIRECT CONTACT" },
  location: { fr: "LOCALISATION", en: "LOCATION" },
  coreExpertise: { fr: "EXPERTISE CLÉ", en: "CORE EXPERTISE" },
  engineeringGraduate: { fr: "Diplômé Ingénieur", en: "Engineering Graduate" },
  techStackLabel: { fr: "Stack Technique", en: "Tech Stack" },
  demoInProduction: { fr: "Vidéo de démonstration en cours de production", en: "Demo video in production" },
  videoSoon: { fr: "Vidéo bientôt", en: "Video soon" },
  backToPortfolio: { fr: "Retour au Portfolio", en: "Back to Portfolio" },
  theConcept: { fr: "Le Concept", en: "The Concept" },
  technicalSolutions: { fr: "Solutions Techniques", en: "Technical Solutions" },
  integratedStack: { fr: "Stack Intégrée", en: "Integrated Stack" },
  exploreLive: { fr: "Explorer Live", en: "Explore Live" },
  sourceCode: { fr: "Code Source", en: "Source Code" },
  timeline: { fr: "Chronologie", en: "Timeline" },
  status: { fr: "Statut", en: "Status" },
  productionReady: { fr: "Prêt pour la Prod", en: "Production Ready" },
  filterAll: { fr: "VOIR TOUT", en: "VIEW ALL" },
  filterAcademic: { fr: "ACADÉMIQUE", en: "ACADEMIC" },
  filterFreelance: { fr: "FREELANCE", en: "FREELANCE" },
  catEcommerce: { fr: "E-COMMERCE", en: "E-COMMERCE" },
  catAutomobile: { fr: "AUTOMOBILE", en: "AUTOMOBILE" },
  catPortfolios: { fr: "PORTFOLIOS", en: "PORTFOLIOS" },
  catELearning: { fr: "E-LEARNING", en: "E-LEARNING" },
};
