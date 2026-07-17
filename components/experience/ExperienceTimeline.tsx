// components/experience/ExperienceTimeline.tsx

import React from 'react';
import { Briefcase, FlaskConical, MapPin } from 'lucide-react';
import { Experience } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

interface ExperienceTimelineProps {
  items: Experience[];
  /** Compact mode trims each entry to its top three highlights (used on the home page) */
  compact?: boolean;
  className?: string;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  items,
  compact = false,
  className,
}) => (
  <ol className={cn('relative ml-4 border-l border-white/10 md:ml-6', className)}>
    {items.map((exp, idx) => {
      const TypeIcon = exp.type === 'industry' ? Briefcase : FlaskConical;
      return (
        <li key={exp.id} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
          {/* Timeline marker */}
          <span
            className="absolute top-7 -left-[8.5px] flex h-4 w-4 items-center justify-center"
            aria-hidden
          >
            {exp.current && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-40" />
            )}
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-indigo-400" />
          </span>

          <Reveal delay={idx * 120}>
            <Card hover>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-indigo-300">
                    <TypeIcon size={20} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 font-medium text-indigo-300">{exp.organization}</p>
                    {exp.location && (
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
                        <MapPin size={12} aria-hidden />
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>
                <Badge variant={exp.current ? 'success' : 'neutral'} className="font-mono">
                  {exp.duration}
                </Badge>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{exp.summary}</p>

              <ul className="mt-4 space-y-2">
                {(compact ? exp.highlights.slice(0, 3) : exp.highlights).map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-indigo-400" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        </li>
      );
    })}
  </ol>
);
