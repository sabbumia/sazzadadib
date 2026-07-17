// app/projects/[id]/page.tsx

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Github,
  ExternalLink,
  Star,
  Sparkles,
  ShieldAlert,
  Lightbulb,
} from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectCard, categoryLabels } from '@/components/projects/ProjectCard';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { projectsData } from '@/lib/data/projects';
import { getProjectImages, getProjectCover } from '@/lib/projectImages';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return {};

  const images = getProjectImages(project.id);

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: images[0] ? [images[0]] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) notFound();

  const images = getProjectImages(project.id);

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <header className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div
          className="absolute -top-32 left-1/2 h-64 w-2xl -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-14 sm:px-6 md:pt-36 md:pb-18 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
                {categoryLabels[project.category]}
              </p>
              {project.featured && (
                <Badge variant="warning">
                  <Star size={11} aria-hidden />
                  Featured
                </Badge>
              )}
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              {project.longDescription || project.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.demo && (
                <Button href={project.demo} icon={<ExternalLink size={18} />}>
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button
                  href={project.github}
                  variant="outline"
                  icon={<Github size={18} />}
                  iconPosition="left"
                >
                  View Code
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </header>

      <Section className="pt-14! md:pt-20!">
        <Reveal className="mx-auto max-w-5xl">
          <ProjectGallery images={images} title={project.title} />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {project.features.length > 0 && (
              <Reveal>
                <div className="mb-5 flex items-center gap-2.5">
                  <Sparkles size={18} className="text-indigo-400" aria-hidden />
                  <h2 className="text-xl font-semibold tracking-tight text-white">Key Features</h2>
                </div>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <Reveal>
                <div className="mb-5 flex items-center gap-2.5">
                  <ShieldAlert size={18} className="text-amber-400" aria-hidden />
                  <h2 className="text-xl font-semibold tracking-tight text-white">
                    Challenges Faced
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.solutions && project.solutions.length > 0 && (
              <Reveal>
                <div className="mb-5 flex items-center gap-2.5">
                  <Lightbulb size={18} className="text-emerald-400" aria-hidden />
                  <h2 className="text-xl font-semibold tracking-tight text-white">
                    Solutions Implemented
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                      {solution}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <Reveal className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/3 p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Technologies Used
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm font-medium text-indigo-300 transition-colors hover:text-indigo-200"
                    >
                      <ExternalLink size={16} aria-hidden />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                    >
                      <Github size={16} aria-hidden />
                      GitHub Repository
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section tinted>
          <Reveal className="mb-10 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              More {categoryLabels[project.category]} Projects
            </h2>
            <Button href="/projects" variant="ghost" size="sm" icon={<ArrowRight size={16} />}>
              View All
            </Button>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedProjects.map((related, idx) => (
              <Reveal key={related.id} delay={idx * 100}>
                <ProjectCard project={related} cover={getProjectCover(related.id)} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <ContactCTA
        title="Curious how it was built?"
        description={`I'd be glad to walk through the architecture and decisions behind ${project.title}.`}
      />
    </>
  );
}
