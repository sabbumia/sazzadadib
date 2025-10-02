// components/projects/ProjectCard.tsx

import React from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, detailed = false }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle>{project.title}</CardTitle>
          {project.featured && (
            <Badge variant="warning" size="sm">Featured</Badge>
          )}
        </div>
        <p className="text-gray-600 text-sm">
          {detailed ? project.longDescription || project.description : project.description}
        </p>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.slice(0, detailed ? undefined : 3).map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {!detailed && project.features.length > 3 && (
              <li className="text-sm text-gray-500 italic flex items-center gap-1">
                <ChevronRight size={14} />
                <span>and {project.features.length - 3} more features</span>
              </li>
            )}
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="primary" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex gap-3">
          {project.github && (
            <Button
              variant="outline"
              size="sm"
              href={project.github}
              icon={<Github size={16} />}
            >
              Code
            </Button>
          )}
          {project.demo && (
            <Button
              variant="primary"
              size="sm"
              href={project.demo}
              icon={<ExternalLink size={16} />}
            >
              Live Demo
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};