// app/experience/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { experienceData } from '@/lib/data/experience';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Professional experience of MD. Sazzad Hossain Adib — AI Research Engineer at Robot Bulls and Research Assistant at MILAB, North South University.',
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Industry & research, in parallel"
        description="I research and build a real-time conversational AI avatar at Robot Bulls, while conducting machine learning research at MILAB — each side sharpens the other."
      />

      <Section>
        <SectionHeading
          eyebrow="Timeline"
          title="Professional journey"
          align="left"
          className="mx-auto max-w-3xl"
        />
        <div className="mx-auto max-w-3xl">
          <ExperienceTimeline items={experienceData} />
        </div>
      </Section>

      <ContactCTA
        title="Want the full picture?"
        description="My CV covers the details — or reach out directly and I'll be happy to talk through my experience."
      />
    </>
  );
}
