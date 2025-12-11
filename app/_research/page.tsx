// app/research/page.tsx

import React from 'react';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { Hero } from '@/components/layout/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { researchInterests, references } from '@/lib/data/profile';

export const metadata = {
  title: 'Research - MD. Sazzad Hossain Adib',
  description: 'Research interests, methodologies, and collaborations of MD. Sazzad Hossain Adib.',
};

export default function ResearchPage() {
  return (
    <>
      <Hero 
        title="Research"
        subtitle="Advancing AI Efficiency & Practical Applications"
        minimal
      />

      {/* Research Overview */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Research Philosophy"
            subtitle="Bridging theory and practice in AI research"
            icon={<Lightbulb size={40} />}
          />
          <Card>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                My research focuses on making artificial intelligence more accessible, efficient, and 
                practical for real-world deployment. I am particularly interested in developing methods 
                that reduce the computational burden of state-of-the-art AI models without sacrificing 
                their capabilities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Through my work on efficient LLM deployment, I aim to democratize access to powerful 
                AI technologies, enabling their use in resource-constrained environments such as edge 
                devices and underserved communities. This research direction combines theoretical 
                innovation with practical implementation, ensuring that academic contributions translate 
                into tangible benefits.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe in interdisciplinary collaboration and open-source research. By sharing code, 
                methodologies, and insights with the broader community, we can accelerate progress and 
                ensure that AI advances benefit everyone.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Research Interests */}
<Section background="gray">
  <SectionHeader 
    title="Research Interests"
    subtitle="Current focus areas and expertise"
    icon={<Target size={40} />}
  />
  <div className="max-w-4xl mx-auto">
    {researchInterests.map((interest, idx) => (
      <Card key={idx} hover>
        <CardHeader>
          <CardTitle className="text-2xl mb-3 text-center">
            {interest.category}
          </CardTitle>
          {interest.description && (
            <p className="text-gray-600 mb-6 text-center">{interest.description}</p>
          )}
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {interest.topics.map((topic, topicIdx) => (
              <div key={topicIdx} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <Badge variant="primary" size="sm" className="mt-1 flex-shrink-0">
                  {topicIdx + 1}
                </Badge>
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</Section>

      {/* Current Research Projects */}
      <Section background="white">
        <SectionHeader 
          title="Current Research Projects"
          subtitle="Ongoing investigations and developments"
          icon={<TrendingUp size={40} />}
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card hover>
            <CardHeader>
              <Badge variant="success" className="mb-3">Active</Badge>
              <CardTitle>Z-Pruner: Efficient LLM Pruning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Developing post-training pruning techniques for Large Language Models that achieve 
                significant efficiency improvements without requiring retraining or fine-tuning.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Published at IEEE AICCSA 2025</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Open-source implementation available</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Collaboration with multiple research labs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Badge variant="success" className="mb-3">Active</Badge>
              <CardTitle>TimeClipAI: Action Localization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Framework for real-time temporal action localization using transformer-based 
                architectures, achieving state-of-the-art performance on multiple benchmark datasets.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Novel Offset Scoring Network (OSN)</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Real-time inference capability</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Robust generalization across datasets</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Badge variant="info" className="mb-3">Completed</Badge>
              <CardTitle>RAG for Educational Access</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Lightweight Small Language Model with Retrieval-Augmented Generation for 
                offline educational assistance in underserved communities.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>75% accuracy on 4,000-question dataset</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Offline-first design for accessibility</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Validated with RAGChecker framework</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card hover>
            <CardHeader>
              <Badge variant="warning" className="mb-3">Planned</Badge>
              <CardTitle>Multimodal LLM Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Exploring efficient deployment strategies for multimodal large language models, 
                focusing on vision-language tasks and edge device compatibility.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Joint optimization of vision and language components</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Memory-efficient attention mechanisms</span>
                </div>
                <div className="flex items-start gap-2 text-gray-600">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Real-world deployment benchmarks</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Research Collaborations */}
      {/* <Section background="gradient">
        <SectionHeader 
          title="Research Collaborations"
          subtitle="Academic mentors and collaborators"
          icon={<Users size={40} />}
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((ref, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-xl">{ref.name}</CardTitle>
                <p className="text-blue-600 font-semibold">{ref.title}</p>
                <p className="text-gray-600">{ref.institution}</p>
              </CardHeader>
              <CardContent>
                <a 
                  href={`mailto:${ref.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {ref.email}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section> */}

      {/* Research Methodology */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            title="Research Methodology"
            subtitle="Approach to scientific investigation"
          />
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl mb-3 text-center">🔬</div>
                <h3 className="font-semibold text-lg text-center mb-2">Rigorous Experimentation</h3>
                <p className="text-gray-600 text-sm text-center">
                  Systematic testing with multiple datasets and baseline comparisons
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl mb-3 text-center">📊</div>
                <h3 className="font-semibold text-lg text-center mb-2">Data-Driven Analysis</h3>
                <p className="text-gray-600 text-sm text-center">
                  Comprehensive evaluation metrics and statistical validation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl mb-3 text-center">🌐</div>
                <h3 className="font-semibold text-lg text-center mb-2">Open Science</h3>
                <p className="text-gray-600 text-sm text-center">
                  Publishing code, data, and methodologies for reproducibility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I'm always open to discussing research opportunities, collaborations, and innovative 
            ideas in AI and machine learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:sazzad.adib@northsouth.edu"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              Email Me
            </a>
            <a 
              href="/publications"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition shadow-lg"
            >
              View Publications
            </a>
            <a 
              href="/contact"
              className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition"
            >
              Contact Form
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}