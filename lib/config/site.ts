// lib/config/site.ts
// Single source of truth for site-wide metadata, navigation, and external links.

export const siteConfig = {
  name: 'MD. Sazzad Hossain Adib',
  shortName: 'Sazzad Adib',
  role: 'AI Engineer & Researcher',
  tagline:
    'AI Research Engineer at Robot Bulls and Research Assistant at MILAB, North South University — building real-time conversational AI systems and publishing research on efficient AI.',
  description:
    'Portfolio of MD. Sazzad Hossain Adib — AI Engineer and Researcher specializing in LLM systems, RAG pipelines, efficient model deployment, and full-stack AI applications.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'sazzad.adib@northsouth.edu',
  location: 'Dhaka, Bangladesh',
  cvPath: '/sazzad.pdf',
  availability: 'Open to AI engineering roles, research collaborations & PhD opportunities',
  links: {
    github: 'https://github.com/sazzadadib',
    linkedin: 'https://linkedin.com/in/sazzadadib',
    scholar: 'https://scholar.google.com/citations?user=sazzadadib',
  },
  keywords: [
    'AI Engineer',
    'AI Researcher',
    'Machine Learning',
    'LLM',
    'RAG',
    'Model Pruning',
    'Full-Stack Developer',
    'Next.js',
    'PyTorch',
  ],
} as const;

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
];
