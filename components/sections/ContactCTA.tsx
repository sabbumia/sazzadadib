// components/sections/ContactCTA.tsx

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

interface ContactCTAProps {
  title?: string;
  description?: string;
}

/** Closing call-to-action band shared across pages. */
export const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Let's build something together",
  description = "I'm open to AI engineering roles, research collaborations, and PhD opportunities — particularly around efficient LLM deployment and production AI systems.",
}) => (
  <section className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-indigo-500/15 via-zinc-900 to-cyan-500/10 px-6 py-16 text-center md:px-12 md:py-20">
          <div className="absolute inset-0 bg-grid" aria-hidden />
          <div
            className="absolute -top-24 left-1/2 h-48 w-xl -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-indigo-300">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-zinc-400 md:text-lg">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" icon={<ArrowRight size={18} />}>
                Contact Me
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                variant="outline"
                icon={<Mail size={18} />}
                iconPosition="left"
              >
                {siteConfig.email}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
