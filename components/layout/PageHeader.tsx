// components/layout/PageHeader.tsx

import React from 'react';
import { Reveal } from '@/components/ui/Reveal';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Consistent header band for all inner pages. */
export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, description }) => (
  <header className="relative overflow-hidden border-b border-white/5">
    <div className="absolute inset-0 bg-grid" aria-hidden />
    <div
      className="absolute -top-32 left-1/2 h-64 w-2xl -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
      aria-hidden
    />
    <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-14 sm:px-6 md:pt-40 md:pb-18 lg:px-8">
      <Reveal>
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-balance text-white md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-pretty text-zinc-400 md:text-lg">
            {description}
          </p>
        )}
      </Reveal>
    </div>
  </header>
);
