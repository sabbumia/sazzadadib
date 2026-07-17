// components/projects/ProjectsExplorer.tsx
'use client';

import React, { useState } from 'react';
import { Project } from '@/lib/types';
import { ProjectCard } from './ProjectCard';
import { cn } from '@/lib/utils';

interface ProjectsExplorerProps {
  projects: Project[];
  /** Cover image per project id, resolved server-side */
  covers?: Record<string, string | undefined>;
}

type CategoryId = 'all' | Project['category'];

const categories: Array<{ id: CategoryId; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & LLM' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'web', label: 'Web' },
];

/** Client-side category filter + grid; the page itself stays a server component. */
export const ProjectsExplorer: React.FC<ProjectsExplorerProps> = ({ projects, covers }) => {
  const [selected, setSelected] = useState<CategoryId>('all');

  const filtered = selected === 'all' ? projects : projects.filter((p) => p.category === selected);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap items-center gap-2.5"
      >
        {categories.map((category) => {
          const count =
            category.id === 'all'
              ? projects.length
              : projects.filter((p) => p.category === category.id).length;
          const isSelected = selected === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelected(category.id)}
              aria-pressed={isSelected}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                isSelected
                  ? 'border-indigo-400/50 bg-indigo-500/15 text-white'
                  : 'border-white/10 bg-white/3 text-zinc-400 hover:border-white/25 hover:text-white'
              )}
            >
              {category.label}
              <span className={cn('ml-2 font-mono text-xs', isSelected ? 'text-indigo-300' : 'text-zinc-500')}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} cover={covers?.[project.id]} detailed />
        ))}
      </div>
    </div>
  );
};
