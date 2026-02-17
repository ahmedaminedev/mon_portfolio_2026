
import React from 'react';

export type LocalizedString = {
  fr: string;
  en: string;
};

export interface SocialLink {
  name: string; // Social media names are often universal
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: LocalizedString;
  linkedinUser: string;
  linkedinUrl: string;
  facebookUrl?: string;
}

export interface CVLink {
  name: LocalizedString; // e.g., { fr: "CV Français", en: "French CV" }
  url: string;
}

export interface ProfileData {
  name: string; // Name usually stays the same
  title: LocalizedString;
  summary: LocalizedString;
  cvLinks?: CVLink[];
  heroBio: LocalizedString;
  profileImageUrl: string;
  socials: SocialLink[];
}

export interface EducationItem {
  degree: LocalizedString;
  institution: LocalizedString;
  location?: LocalizedString;
  period: string; // Dates are generally universal
  details: LocalizedString[];
}

export interface ExperienceItem {
  role: LocalizedString;
  company: LocalizedString;
  location: LocalizedString;
  period: string;
  responsibilities: LocalizedString[];
  technologies?: string[]; // Tech names are usually universal
  technologiesLabel?: LocalizedString; // For "Technologies:" label
}

export type ProjectCategory = 'ecommerce' | 'automobile' | 'portfolio' | 'elearning' | 'other';

export interface ProjectItem {
  id: string;
  title: LocalizedString;
  period?: string;
  description: LocalizedString;
  longDescription?: LocalizedString[];
  technologies: string[];
  type: 'academic' | 'freelance';
  category?: ProjectCategory;
  imageUrl: string;
  videoUrl?: string; // URL vers une vidéo de démo (Youtube embed ou mp4)
  liveLink?: string;
  repoLink?: string;
  liveLinkLabel?: LocalizedString;
  repoLinkLabel?: LocalizedString;
  technologiesLabel?: LocalizedString;
}

export interface SkillItem {
  name: string; // Skill names are often universal
  level: number; // Percentage 0-100
}

export interface SkillCategory {
  name: LocalizedString;
  skills: SkillItem[];
}

export interface LanguageItem {
  name: LocalizedString; // e.g., { fr: "Arabe", en: "Arabic" }
  level: number; // Proficiency level from 0 to 5
  levelText: LocalizedString; // e.g., { fr: "Natif", en: "Native" }
}

export interface AssociationItem {
  name: LocalizedString;
  period: string;
  roles: LocalizedString[];
}

export interface NavItem {
  name: LocalizedString;
  href: string;
}
