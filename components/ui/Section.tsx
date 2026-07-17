// components/ui/Section.tsx

import React from 'react';
import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** Adds a faint panel tint to visually alternate sections */
  tinted?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className, tinted = false }) => (
  <section
    id={id}
    className={cn('py-20 md:py-28', tinted && 'border-y border-white/5 bg-white/1.5', className)}
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}) => (
  <Reveal className={cn('mb-12 md:mb-16', align === 'center' && 'text-center', className)}>
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto')}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-balance text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-pretty text-zinc-400 md:text-lg">{description}</p>}
    </div>
  </Reveal>
);
