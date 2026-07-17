// components/ui/Reveal.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  /** Stagger delay in ms, applied to the CSS transition */
  delay?: number;
  className?: string;
}

/**
 * Fades content up once it scrolls into view. Pure CSS transition driven by
 * an IntersectionObserver — no animation library needed. Respects
 * prefers-reduced-motion via globals.css.
 */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn('reveal', className)} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
};
