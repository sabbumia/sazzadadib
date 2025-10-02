// app/publications/page.tsx

import React from 'react';
import { BookOpen, Award, TrendingUp } from 'lucide-react';
import { Hero } from '@/components/layout/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { PublicationCard } from '@/components/publications/PublicationCard';
import { publicationsData } from '@/lib/data/publications';

export const metadata = {
  title: 'Publications - MD. Sazzad Hossain Adib',
  description: 'Academic publications and research papers by MD. Sazzad Hossain Adib.',
};

export default function PublicationsPage() {
  return (
    <>
      <Hero 
        title="Publications"
        subtitle="Academic Research & Contributions"
        minimal
      />

      {/* Publications List */}
      <Section background="white">
        <SectionHeader 
          title="Research Papers"
          subtitle="Peer-reviewed publications and preprints"
          icon={<BookOpen size={40} />}
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {publicationsData.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </Section>

      {/* Research Impact */}
      <Section background="gray">
        <SectionHeader 
          title="Research Impact"
          subtitle="Contribution to the academic community"
          icon={<TrendingUp size={40} />}
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="text-center pt-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {publicationsData.length}
              </div>
              <div className="text-gray-600">Publications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center pt-6">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {publicationsData.filter(p => p.status === 'accepted' || p.status === 'published').length}
              </div>
              <div className="text-gray-600">Accepted/Published</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="text-center pt-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {new Set(publicationsData.flatMap(p => p.authors)).size}
              </div>
              <div className="text-gray-600">Co-authors</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Research Focus */}
      <Section background="white">
        <SectionHeader 
          title="Research Focus Areas"
          subtitle="Key domains of academic contribution"
          icon={<Award size={40} />}
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card hover>
            <CardHeader>
              <CardTitle>Efficient AI Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developing techniques for model compression and optimization, including pruning 
                and quantization methods that maintain performance while reducing computational requirements.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Post-training pruning of Large Language Models</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Model efficiency without retraining</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Deployment optimization for edge devices</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle>Computer Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Advancing temporal action localization and video understanding through transformer-based 
                architectures and novel training methodologies.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Real-time action classification in videos</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Temporal segmentation with transformers</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>State-of-the-art performance on benchmark datasets</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Future Research */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Research Directions</h2>
          <p className="text-lg text-gray-700 mb-8">
            I am actively exploring new research opportunities in efficient AI deployment, 
            multimodal learning, and practical applications of large language models. 
            I welcome collaborations and discussions on these topics.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:sazzad.adib@northsouth.edu"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Discuss Research Collaboration
            </a>
            <a 
              href={publicationsData[0]?.links.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              View Research Code
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}