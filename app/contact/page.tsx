// app/contact/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import { Mail, MapPin, Github, Linkedin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig } from '@/lib/config/site';
import { profileData } from '@/lib/data/profile';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${profileData.name} for AI engineering roles, research collaborations, and opportunities.`,
};

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@sazzadadib',
    href: siteConfig.links.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/sazzadadib',
    href: siteConfig.links.linkedin,
  },
  {
    icon: GraduationCap,
    label: 'Google Scholar',
    value: 'Publications & citations',
    href: siteConfig.links.scholar,
  },
];

const seeking = [
  'AI Engineering Roles',
  'Research Collaborations',
  'PhD Opportunities',
  'Research Internships',
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Whether it's a research idea, a role, or a collaboration proposal — I'd love to hear from you."
      />

      <Section>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Channels + availability */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-white">Reach me directly</h2>
              <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                <MapPin size={14} aria-hidden />
                {profileData.location}
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {channels.map((channel, idx) => (
                <Reveal key={channel.label} delay={idx * 80}>
                  <li>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400/40"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-indigo-300">
                        <channel.icon size={20} aria-hidden />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {channel.label}
                        </span>
                        <span className="text-sm text-zinc-400 transition-colors group-hover:text-zinc-300">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={350}>
              <Card className="mt-8">
                <h3 className="flex items-center gap-2 font-semibold text-white">
                  <span className="relative flex h-2 w-2" aria-hidden>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Currently seeking
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {seeking.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 size={15} className="shrink-0 text-emerald-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>

          {/* Message form */}
          <Reveal delay={150}>
            <Card padding="lg" className="relative h-full">
              <h2 className="text-2xl font-bold tracking-tight text-white">Send a message</h2>
              <p className="mt-2 text-sm text-zinc-400">
                I'll get an email the moment you hit send — no email client required.
              </p>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
