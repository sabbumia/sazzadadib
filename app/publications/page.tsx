// app/publications/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import { Cpu, Video } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card, CardTitle } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { PublicationCard } from '@/components/publications/PublicationCard';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { publicationsData } from '@/lib/data/publications';
import { researchInterests } from '@/lib/data/profile';

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Academic publications by MD. Sazzad Hossain Adib, including Z-Pruner (IEEE AICCSA 2025) on efficient post-training pruning of large language models.',
};

const focusAreas = [
  {
    icon: Cpu,
    title: 'Efficient AI Systems',
    description:
      'Model compression and optimization — pruning and quantization methods that preserve performance while cutting computational cost.',
    points: [
      'Post-training pruning of Large Language Models',
      'Model efficiency without retraining',
      'Deployment optimization for edge devices',
    ],
  },
  {
    icon: Video,
    title: 'Computer Vision',
    description:
      'Temporal action localization and video understanding through transformer-based architectures and novel training methodologies.',
    points: [
      'Real-time action classification in videos',
      'Temporal segmentation with transformers',
      'State-of-the-art results on benchmark datasets',
    ],
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Research contributions"
        description="Peer-reviewed publications and preprints — with open-source code for every paper."
      />

      {/* Papers */}
      <Section>
        <div className="mx-auto max-w-4xl space-y-8">
          {publicationsData.map((publication, idx) => (
            <Reveal key={publication.id} delay={idx * 100}>
              <PublicationCard publication={publication} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Research interests */}
      <Section id="research-interests" tinted>
        <SectionHeading
          eyebrow="Interests"
          title="Research interests"
          description="Current focus areas across applied AI and machine learning."
        />
        <div className="mx-auto max-w-4xl">
          {researchInterests.map((interest) => (
            <Reveal key={interest.category}>
              <Card padding="lg">
                <CardTitle className="text-2xl">{interest.category}</CardTitle>
                {interest.description && (
                  <p className="mt-2 text-sm text-zinc-400">{interest.description}</p>
                )}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {interest.topics.map((topic, topicIdx) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-4 py-3 transition-colors hover:border-indigo-400/40"
                    >
                      <span className="font-mono text-xs text-indigo-400" aria-hidden>
                        {String(topicIdx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-zinc-200">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Focus areas */}
      <Section>
        <SectionHeading
          eyebrow="Focus"
          title="Research focus areas"
          description="The domains where my academic work concentrates."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {focusAreas.map((area, idx) => (
            <Reveal key={area.title} delay={idx * 100}>
              <Card hover className="h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-indigo-300">
                  <area.icon size={20} aria-hidden />
                </span>
                <CardTitle className="mt-4">{area.title}</CardTitle>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{area.description}</p>
                <ul className="mt-4 space-y-2">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-indigo-400" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCTA
        title="Interested in the research?"
        description="I'm actively exploring efficient AI deployment, multimodal learning, and practical LLM applications — and always open to research discussions."
      />
    </>
  );
}
