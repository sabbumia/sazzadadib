// components/layout/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/config/site';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold tracking-tight text-white">
              <span className="font-mono text-indigo-400">λ </span>
              Sazzad Hossain
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              {siteConfig.role} — building production LLM systems and researching efficient AI
              deployment.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
              <MapPin size={14} aria-hidden />
              {siteConfig.location}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Connect
            </h2>
            <SocialLinks className="mt-4" iconSize={18} />
            <p className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.availability}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
