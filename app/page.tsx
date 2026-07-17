// app/page.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/layout/Hero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { PublicationCard } from '@/components/publications/PublicationCard';
import { SkillsGrid } from '@/components/sections/SkillsGrid';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { experienceData } from '@/lib/data/experience';
import { projectsData } from '@/lib/data/projects';
import { publicationsData } from '@/lib/data/publications';
import { getProjectCover } from '@/lib/projectImages';

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Experience */}
      <Section id="experience" tinted>
        <SectionHeading
          eyebrow="01 · Experience"
          title="Where I work"
          description="Shipping AI in industry while pushing research forward in the lab."
        />
        <div className="mx-auto max-w-3xl">
          <ExperienceTimeline items={experienceData} compact />
          <Reveal className="mt-12 text-center">
            <Button href="/experience" variant="outline" icon={<ArrowRight size={18} />}>
              Full Experience
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Featured projects */}
      <Section id="projects">
        <SectionHeading
          eyebrow="02 · Projects"
          title="Featured work"
          description="Production AI applications and research frameworks — from voice-driven medical assistants to real-time video understanding."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100}>
              <ProjectCard project={project} cover={getProjectCover(project.id)} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Button href="/projects" variant="outline" icon={<ArrowRight size={18} />}>
            View All Projects
          </Button>
        </Reveal>
      </Section>

      {/* Research & publications */}
      <Section id="research" tinted>
        <SectionHeading
          eyebrow="03 · Research"
          title="Published research"
          description="Peer-reviewed work on making large language models cheaper to deploy."
        />
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <PublicationCard publication={publicationsData[0]} />
          </Reveal>
          <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button href="/publications" variant="outline" icon={<ArrowRight size={18} />}>
              All Publications
            </Button>
            <Button href="/publications#research-interests" variant="ghost" icon={<ArrowRight size={18} />}>
              Research Interests
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <SectionHeading
          eyebrow="04 · Skills"
          title="Technical toolkit"
          description="A stack that spans research prototyping and production engineering."
        />
        <SkillsGrid limitPerCategory={6} />
      </Section>

      <ContactCTA />
    </>
  );
}
