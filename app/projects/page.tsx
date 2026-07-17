// app/projects/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import { Github } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { projectsData } from '@/lib/data/projects';
import { getProjectCovers } from '@/lib/projectImages';
import { siteConfig } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'AI, machine learning, and full-stack projects by MD. Sazzad Hossain Adib — LLM applications, computer vision frameworks, and production web platforms.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description={`${projectsData.length} projects spanning LLM applications, computer vision research, and production full-stack platforms — most with live demos or open-source code.`}
      />

      <Section>
        <ProjectsExplorer
          projects={projectsData}
          covers={getProjectCovers(projectsData.map((p) => p.id))}
        />
        <Reveal className="mt-14 text-center">
          <Button
            href={siteConfig.links.github}
            variant="outline"
            icon={<Github size={18} />}
            iconPosition="left"
          >
            More on GitHub
          </Button>
        </Reveal>
      </Section>

      <ContactCTA
        title="Have a project in mind?"
        description="From RAG pipelines to full-stack AI products — I'd love to hear what you're building."
      />
    </>
  );
}
