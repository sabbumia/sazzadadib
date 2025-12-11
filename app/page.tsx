// app/page.tsx

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, BookOpen, Briefcase, Award } from 'lucide-react';
import { Hero } from '@/components/layout/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { PublicationCard } from '@/components/publications/PublicationCard';
import { projectsData } from '@/lib/data/projects';
import { publicationsData } from '@/lib/data/publications';
import { researchInterests } from '@/lib/data/profile';
import { skillsData } from '@/lib/data/skills';

export default function Home() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero 
        description="Computer Science student at North South University, specializing in Applied AI and Full-Stack Development with published research in efficient LLM deployment."
      />

      {/* Research Interests Section */}
      <Section background="white">
        <SectionHeader 
          title="Research Interests"
          subtitle="Exploring cutting-edge areas in AI and software engineering"
          icon={<Award size={40} />}
        />
         <div className="max-w-2xl mx-auto">
          {researchInterests.map((interest, idx) => (
            <Card key={idx} hover>
              <CardHeader>
                <CardTitle className="text-xl mb-3">{interest.category}</CardTitle>
                {interest.description && (
                  <p className="text-gray-600 text-sm mb-4">{interest.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {interest.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section background="gray">
        <SectionHeader 
          title="Featured Projects"
          subtitle="Showcasing innovative AI and full-stack development work"
          icon={<Code size={40} />}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            href="/projects"
            icon={<ArrowRight size={20} />}
          >
            View All Projects
          </Button>
        </div>
      </Section>

      {/* Publications Section */}
      <Section background="white">
        <SectionHeader 
          title="Recent Publications"
          subtitle="Contributing to academic research in AI efficiency"
          icon={<BookOpen size={40} />}
        />
        <div className="max-w-4xl mx-auto mb-8">
          {publicationsData.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg"
            href="/publications"
            icon={<ArrowRight size={20} />}
          >
            View All Publications
          </Button>
        </div>
      </Section>

      {/* Skills Overview Section */}
      <Section background="gradient">
        <SectionHeader 
          title="Technical Skills"
          subtitle="Expertise across AI, full-stack development, and data science"
          icon={<Briefcase size={40} />}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 6).map((skill, skillIdx) => (
                    <Badge key={skillIdx} variant="primary" size="sm">
                      {skill}
                    </Badge>
                  ))}
                  {category.skills.length > 6 && (
                    <Badge variant="outline" size="sm">
                      +{category.skills.length - 6} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button 
            variant="primary" 
            size="lg"
            href="/about"
            icon={<ArrowRight size={20} />}
          >
            Learn More About Me
          </Button>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Collaborate
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm actively seeking research opportunities and collaborations in AI/ML, 
            particularly in efficient model deployment and real-world LLM applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg"
              href="/contact"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href="/research"
            >
              View Research
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}