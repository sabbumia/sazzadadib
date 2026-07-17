// app/about/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import { GraduationCap, Award, Microscope, Globe2 } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { SkillsGrid } from '@/components/sections/SkillsGrid';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { profileData, educationData } from '@/lib/data/profile';

export const metadata: Metadata = {
  title: 'About',
  description: `Background, education, and philosophy of ${profileData.name} — AI Engineer & Researcher.`,
};

const futureGoals = [
  {
    icon: GraduationCap,
    title: 'Graduate Studies',
    description: 'Pursuing advanced research in efficient AI systems and model optimization.',
  },
  {
    icon: Microscope,
    title: 'Research Impact',
    description: 'Publishing impactful research that advances AI accessibility and efficiency.',
  },
  {
    icon: Globe2,
    title: 'Global Collaboration',
    description: 'Collaborating with researchers worldwide on meaningful AI projects.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineer by trade, researcher at heart"
        description="I move between shipping production AI systems and publishing research on making them efficient — here's the longer story."
      />

      {/* Bio */}
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {profileData.bio.map((paragraph, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <p className="text-lg leading-relaxed text-zinc-300">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section tinted>
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          align="left"
          className="mx-auto max-w-3xl"
        />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Card hover padding="lg">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-indigo-300">
                    <GraduationCap size={22} aria-hidden />
                  </span>
                  <div>
                    <CardTitle className="text-2xl">{educationData.institution}</CardTitle>
                    <p className="mt-1 font-medium text-indigo-300">
                      {educationData.degree} in {educationData.field}
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      {educationData.duration} · {educationData.location}
                    </p>
                  </div>
                </div>
                <Badge variant="success" size="md" className="font-mono">
                  CGPA {educationData.cgpa}
                </Badge>
              </div>
              <ul className="mt-6 space-y-3">
                {educationData.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Award className="mt-0.5 shrink-0 text-indigo-400" size={16} aria-hidden />
                    {achievement}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Skills */}
      <Section>
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="Everything I use across research prototyping and production engineering."
        />
        <SkillsGrid />
      </Section>

      {/* Philosophy + goals */}
      <Section tinted>
        <SectionHeading
          eyebrow="Philosophy"
          title="How I think about the work"
          description="The most impactful research doesn't stay in the paper — it ships."
        />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Card padding="lg">
              <div className="space-y-4 leading-relaxed text-zinc-300">
                <p>
                  My research philosophy centers on bridging the gap between cutting-edge AI research
                  and practical, real-world applications. The most impactful research not only
                  advances theoretical understanding but also provides tangible benefits to society.
                </p>
                <p>
                  I am particularly passionate about making AI more accessible and efficient. Through
                  my work on LLM pruning and RAG systems, I aim to democratize access to powerful AI
                  capabilities — enabling deployment in resource-constrained environments and
                  underserved communities.
                </p>
                <p>
                  In engineering work, I prioritize scalable, maintainable systems that integrate AI
                  seamlessly, and I believe strongly in interdisciplinary collaboration and open
                  science.
                </p>
              </div>
            </Card>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {futureGoals.map((goal, idx) => (
              <Reveal key={goal.title} delay={idx * 100}>
                <Card hover className="h-full">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-indigo-300">
                    <goal.icon size={19} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight text-white">{goal.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{goal.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
