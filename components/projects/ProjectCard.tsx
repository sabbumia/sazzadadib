// components/projects/ProjectCard.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '@/lib/types';
import { Card, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface ProjectCardProps {
  project: Project;
  /** Cover screenshot shown above the card content (resolved server-side) */
  cover?: string;
  detailed?: boolean;
}

export const categoryLabels: Record<Project['category'], string> = {
  ai: 'AI & LLM',
  ml: 'Machine Learning',
  fullstack: 'Full-Stack',
  web: 'Web',
};

const MAX_TECH_BADGES = 5;

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, cover, detailed = false }) => (
  <Card hover padding="none" className="group relative flex h-full flex-col overflow-hidden">
    <Link
      href={`/projects/${project.id}`}
      className="absolute inset-0 z-10 rounded-2xl"
      aria-label={`View details for ${project.title}`}
    />

    {cover && (
      <div className="pointer-events-none relative aspect-video w-full overflow-hidden border-b border-white/10">
        <Image
          src={cover}
          alt=""
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent"
          aria-hidden
        />
      </div>
    )}

    <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="pointer-events-none flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
            {categoryLabels[project.category]}
          </p>
          {project.featured && (
            <Badge variant="warning">
              <Star size={11} aria-hidden />
              Featured
            </Badge>
          )}
        </div>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-indigo-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {detailed ? project.longDescription || project.description : project.description}
        </p>

        <ul className="mt-4 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
              <span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-indigo-400" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, MAX_TECH_BADGES).map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > MAX_TECH_BADGES && (
            <Badge variant="neutral">+{project.technologies.length - MAX_TECH_BADGES}</Badge>
          )}
        </div>
      </div>

      <CardFooter className="relative z-20 mt-auto flex items-center gap-5 pt-4 text-sm font-medium">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
          >
            <Github size={16} aria-hidden />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-1.5 text-indigo-300 transition-colors hover:text-indigo-200"
          >
            <ExternalLink size={16} aria-hidden />
            Live Demo
          </a>
        )}
      </CardFooter>
    </div>
  </Card>
);
