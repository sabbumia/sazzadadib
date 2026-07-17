// components/layout/Hero.tsx

import React from 'react';
import Image from 'next/image';
import { ArrowRight, FileDown, Briefcase, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { profileData } from '@/lib/data/profile';
import { experienceData } from '@/lib/data/experience';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SocialLinks } from './SocialLinks';

export const Hero: React.FC = () => {
  const currentRole = experienceData[0];

  return (
    <div className="relative flex min-h-svh items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-130 w-4xl -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-32 sm:px-6 md:pt-32 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Copy */}
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for opportunities
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
                {profileData.name.replace('MD. ', '')}
              </h1>
              <p className="mt-4 bg-linear-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
                {siteConfig.role}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-zinc-400 md:text-lg">
                {siteConfig.tagline}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="/projects" icon={<ArrowRight size={18} />}>
                  View Projects
                </Button>
                <Button
                  href={siteConfig.cvPath}
                  variant="outline"
                  icon={<FileDown size={18} />}
                  iconPosition="left"
                >
                  Download CV
                </Button>
                <SocialLinks className="ml-1" />
              </div>
            </Reveal>
          </div>

          {/* Portrait */}
          <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-4xl bg-linear-to-br from-indigo-500/25 via-transparent to-cyan-500/15 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 shadow-2xl shadow-indigo-950/40">
                <Image
                  src="/myphoto.png"
                  alt={`Portrait of ${profileData.name}`}
                  width={520}
                  height={520}
                  priority
                  className="h-auto w-full object-cover"
                />
                <div
                  className="absolute inset-0 rounded-3xl bg-linear-to-t from-zinc-950/30 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
              {/* Current role card */}
              <div className="absolute -bottom-5 left-1/2 flex w-max max-w-[90%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 px-5 py-3 shadow-xl backdrop-blur">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
                  <Briefcase size={16} aria-hidden />
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-white">{currentRole.role}</span>
                  <span className="text-zinc-400">@ {currentRole.organization}</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#experience"
        aria-label="Scroll down to explore"
        className="group absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300">
          Scroll to explore
        </span>
        <span className="animate-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-indigo-300 backdrop-blur transition-colors duration-300 group-hover:border-indigo-400/40 group-hover:text-indigo-200">
          <ChevronDown size={18} aria-hidden />
        </span>
      </a>
    </div>
  );
};
