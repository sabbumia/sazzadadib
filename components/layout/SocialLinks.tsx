// components/layout/SocialLinks.tsx

import React from 'react';
import { Github, Linkedin, GraduationCap, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const socials = [
  { label: 'GitHub', href: siteConfig.links.github, Icon: Github },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, Icon: Linkedin },
  { label: 'Google Scholar', href: siteConfig.links.scholar, Icon: GraduationCap },
  { label: 'Email', href: `mailto:${siteConfig.email}`, Icon: Mail },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({ className, iconSize = 20 }) => (
  <ul className={cn('flex items-center gap-2', className)}>
    {socials.map(({ label, href, Icon }) => (
      <li key={label}>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={label}
          title={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-zinc-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:text-white"
        >
          <Icon size={iconSize} strokeWidth={1.75} aria-hidden />
        </a>
      </li>
    ))}
  </ul>
);
