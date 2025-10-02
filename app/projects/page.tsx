// app/projects/page.tsx
'use client';

import React, { useState } from 'react';
import { Code, Filter } from 'lucide-react';
import { Hero } from '@/components/layout/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Badge } from '@/components/ui/Badge';
import { projectsData } from '@/lib/data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'ai', label: 'AI & ML', count: projectsData.filter(p => p.category === 'ai').length },
    { id: 'ml', label: 'Machine Learning', count: projectsData.filter(p => p.category === 'ml').length },
    { id: 'fullstack', label: 'Full-Stack', count: projectsData.filter(p => p.category === 'fullstack').length },
    { id: 'web', label: 'Web Development', count: projectsData.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <>
      <Hero 
        title="Projects"
        subtitle="Innovative AI and Full-Stack Development Work"
        minimal
      />

      <Section background="white">
        {/* <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="text-blue-600" size={24} />
            <h3 className="text-xl font-semibold text-gray-900">Filter by Category</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
                <Badge 
                  variant={selectedCategory === category.id ? 'default' : 'outline'} 
                  size="sm" 
                  className="ml-2"
                >
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div> */}

        <SectionHeader 
          title={`${filteredProjects.length} ${selectedCategory === 'all' ? 'Total' : categories.find(c => c.id === selectedCategory)?.label} Projects`}
          subtitle="Detailed showcase of my development and research work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} detailed />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Code className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </Section>

      {/* Project Statistics */}
      {/* <Section background="gradient">
        <SectionHeader 
          title="Project Statistics"
          subtitle="Overview of technologies and project scope"
        />
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {projectsData.length}
            </div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">
              {projectsData.filter(p => p.featured).length}
            </div>
            <div className="text-gray-600">Featured</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {new Set(projectsData.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {projectsData.filter(p => p.demo).length}
            </div>
            <div className="text-gray-600">Live Demos</div>
          </div>
        </div>
      </Section> */}
    </>
  );
}