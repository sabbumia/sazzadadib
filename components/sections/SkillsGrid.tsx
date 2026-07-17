// components/sections/SkillsGrid.tsx

import React from 'react';
import { Code2, BrainCircuit, BarChart3, Database, Wrench, LucideIcon } from 'lucide-react';
import { skillsData } from '@/lib/data/skills';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

const categoryIcons: Record<string, LucideIcon> = {
  'Languages & Frameworks': Code2,
  'Machine Learning & AI': BrainCircuit,
  'Data & Visualization': BarChart3,
  'Database & DevOps': Database,
  'Tools & Productivity': Wrench,
};

interface SkillsGridProps {
  /** Caps the number of skills shown per category (home page teaser) */
  limitPerCategory?: number;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ limitPerCategory }) => (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
    {skillsData.map((category, idx) => {
      const Icon = categoryIcons[category.category] ?? Code2;
      const skills = limitPerCategory ? category.skills.slice(0, limitPerCategory) : category.skills;
      const hiddenCount = category.skills.length - skills.length;
      return (
        <Reveal key={category.category} delay={idx * 80}>
          <Card hover className="h-full">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-indigo-300">
                <Icon size={19} aria-hidden />
              </span>
              <h3 className="font-semibold tracking-tight text-white">{category.category}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="neutral">
                  {skill}
                </Badge>
              ))}
              {hiddenCount > 0 && <Badge variant="outline">+{hiddenCount} more</Badge>}
            </div>
          </Card>
        </Reveal>
      );
    })}
  </div>
);
