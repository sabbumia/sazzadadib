// components/publications/PublicationCard.tsx

import React from 'react';
import { ExternalLink, Github, FileText, BookOpen } from 'lucide-react';
import { Publication } from '@/lib/types';
import { Card, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

interface PublicationCardProps {
  publication: Publication;
  emphasizeAuthor?: string;
}

const statusConfig: Record<Publication['status'], { label: string; variant: 'success' | 'accent' | 'warning' }> = {
  accepted: { label: 'Accepted', variant: 'success' },
  published: { label: 'Published', variant: 'accent' },
  'under-review': { label: 'Under Review', variant: 'warning' },
};

export const PublicationCard: React.FC<PublicationCardProps> = ({
  publication,
  emphasizeAuthor = 'Md. Sazzad Hossain Adib',
}) => {
  const status = statusConfig[publication.status];

  return (
    <Card hover padding="lg">
      <div className="flex flex-wrap items-center gap-2.5">
        <Badge variant={status.variant}>{status.label}</Badge>
        <Badge variant="info">
          <BookOpen size={11} aria-hidden />
          {publication.venue}
        </Badge>
        <span className="ml-auto font-mono text-sm text-zinc-500">{publication.year}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-white md:text-2xl">
        {publication.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        {publication.authors.map((author, idx) => (
          <span key={author}>
            {idx > 0 && ', '}
            <span className={author === emphasizeAuthor ? 'font-semibold text-indigo-300' : undefined}>
              {author}
            </span>
          </span>
        ))}
      </p>

      {publication.abstract && (
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{publication.abstract}</p>
      )}

      <CardFooter className="flex flex-wrap items-center gap-5 text-sm font-medium">
        {publication.links.arxiv && (
          <a
            href={publication.links.arxiv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-indigo-300 transition-colors hover:text-indigo-200"
          >
            <FileText size={16} aria-hidden />
            arXiv
          </a>
        )}
        {publication.links.github && (
          <a
            href={publication.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
          >
            <Github size={16} aria-hidden />
            Code
          </a>
        )}
        {publication.links.pdf && (
          <a
            href={publication.links.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
          >
            <ExternalLink size={16} aria-hidden />
            PDF
          </a>
        )}
        {publication.links.doi && (
          <a
            href={publication.links.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
          >
            <ExternalLink size={16} aria-hidden />
            DOI
          </a>
        )}
      </CardFooter>
    </Card>
  );
};
