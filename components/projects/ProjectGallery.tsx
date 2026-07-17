// components/projects/ProjectGallery.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectGalleryProps {
  images: string[];
  title: string;
  /** Milliseconds between automatic slides */
  autoPlayInterval?: number;
}

/** Responsive image slider with autoplay, arrow, dot, keyboard, and swipe navigation. */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  images,
  title,
  autoPlayInterval = 5000,
}) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = images.length;
  const goTo = (next: number) => setIndex(((next % count) + count) % count);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    if (count <= 1) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, count]);

  // Auto-advance on a timer; pauses on hover/focus/touch and honors reduced-motion.
  useEffect(() => {
    if (count <= 1 || isPaused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [index, count, isPaused, autoPlayInterval]);

  // Pause while the tab is in the background so it doesn't jump ahead on return.
  useEffect(() => {
    const onVisibilityChange = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  if (count === 0) return null;

  return (
    <div
      className="group/gallery relative overflow-hidden rounded-2xl border border-white/10 bg-white/3"
      role="region"
      aria-label={`${title} image gallery`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={(e) => {
        setIsPaused(true);
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        setIsPaused(false);
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > 50) prev();
        if (delta < -50) next();
        touchStartX.current = null;
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={src} className="relative h-full w-full shrink-0">
              <Image
                src={src}
                alt={`${title} — screenshot ${i + 1} of ${count}`}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-950/70 text-white opacity-0 backdrop-blur transition-all duration-200 group-hover/gallery:opacity-100 hover:bg-zinc-900/90 focus-visible:opacity-100"
          >
            <ChevronLeft size={20} aria-hidden />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-zinc-950/70 text-white opacity-0 backdrop-blur transition-all duration-200 group-hover/gallery:opacity-100 hover:bg-zinc-900/90 focus-visible:opacity-100"
          >
            <ChevronRight size={20} aria-hidden />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === index ? 'w-6 bg-indigo-400' : 'w-1.5 bg-white/30 hover:bg-white/50'
                )}
              />
            ))}
          </div>

          <div className="absolute top-3 right-3 z-10 rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 font-mono text-xs text-zinc-300 backdrop-blur">
            {index + 1} / {count}
          </div>
        </>
      )}
    </div>
  );
};
