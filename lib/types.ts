// lib/types.ts

export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  scholar: string;
  bio: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  cgpa: string;
  achievements: string[];
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  type: 'industry' | 'research';
  location?: string;
  duration: string;
  current: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  technologies: string[];
  category: 'ai' | 'web' | 'ml' | 'fullstack';
  github?: string;
  demo?: string;
  /** Notable difficulties faced during development */
  challenges?: string[];
  /** How the challenges were addressed */
  solutions?: string[];
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'accepted' | 'published' | 'under-review';
  links: {
    arxiv?: string;
    github?: string;
    pdf?: string;
    doi?: string;
  };
  abstract?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export interface ResearchInterest {
  category: string;
  topics: string[];
  description?: string;
}

export interface Reference {
  name: string;
  title: string;
  institution: string;
  email: string;
}