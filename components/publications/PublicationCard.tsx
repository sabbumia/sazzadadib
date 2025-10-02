// components/publications/PublicationCard.tsx

import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Publication } from '@/lib/types';

interface PublicationCardProps {
  publication: Publication;
  emphasizeAuthor?: string;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({ 
  publication, 
  emphasizeAuthor = "Md. Sazzad Hossain Adib" 
}) => {
  const statusVariant = {
    'accepted': 'success',
    'published': 'primary',
    'under-review': 'warning'
  } as const;

  const formatAuthors = (authors: string[]) => {
    return authors.map((author, idx) => {
      const isEmphasized = author === emphasizeAuthor;
      return (
        <span key={idx}>
          {idx > 0 && ', '}
          <span className={isEmphasized ? 'font-semibold text-blue-600' : ''}>
            {author}
          </span>
        </span>
      );
    });
  };

  return (
    <Card hover>
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <Badge variant={statusVariant[publication.status]}>
            {publication.status.toUpperCase()}
          </Badge>
          <span className="text-sm text-gray-600">{publication.year}</span>
        </div>
        <CardTitle className="mb-3">{publication.title}</CardTitle>
        <div className="text-sm text-gray-700 mb-2">
          {formatAuthors(publication.authors)}
        </div>
        <div className="text-blue-600 font-semibold">{publication.venue}</div>
      </CardHeader>

      {publication.abstract && (
        <CardContent>
          <p className="text-gray-700 text-sm leading-relaxed">
            {publication.abstract}
          </p>
        </CardContent>
      )}

      <CardFooter>
        <div className="flex flex-wrap gap-3">
          {publication.links.arxiv && (
            <Button
              variant="primary"
              size="sm"
              href={publication.links.arxiv}
              icon={<FileText size={16} />}
            >
              arXiv
            </Button>
          )}
          {publication.links.github && (
            <Button
              variant="secondary"
              size="sm"
              href={publication.links.github}
              icon={<Github size={16} />}
            >
              Code
            </Button>
          )}
          {publication.links.pdf && (
            <Button
              variant="outline"
              size="sm"
              href={publication.links.pdf}
              icon={<ExternalLink size={16} />}
            >
              PDF
            </Button>
          )}
          {publication.links.doi && (
            <Button
              variant="outline"
              size="sm"
              href={publication.links.doi}
              icon={<ExternalLink size={16} />}
            >
              DOI
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};