// app/about/page.tsx

import React from 'react';
import { GraduationCap, Award, Target, BookOpen, Briefcase } from 'lucide-react';
import { Hero } from '@/components/layout/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { profileData, educationData, researchInterests } from '@/lib/data/profile';
import { skillsData } from '@/lib/data/skills';

export const metadata = {
  title: 'About - MD. Sazzad Hossain Adib',
  description: 'Learn more about MD. Sazzad Hossain Adib, his education, research interests, and academic journey.',
};

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About Me"
        subtitle="AI Researcher & Full-Stack Developer"
        minimal
      />

      {/* Bio Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section background="gray">
        <SectionHeader 
          title="Education"
          subtitle="Academic background and achievements"
          icon={<GraduationCap size={40} />}
        />
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <CardTitle className="text-2xl mb-2">
                    {educationData.institution}
                  </CardTitle>
                  <p className="text-lg font-semibold text-blue-600">
                    {educationData.degree} in {educationData.field}
                  </p>
                  <p className="text-gray-600">
                    {educationData.duration} • {educationData.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Badge variant="success" size="lg">
                    CGPA: {educationData.cgpa}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {educationData.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Award className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
                  {category.skills.map((skill, skillIdx) => (
                    <Badge key={skillIdx} variant="primary" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Research Interests Section */}
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

      {/* Academic Philosophy Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-blue-600" size={32} />
                <CardTitle className="text-2xl">Academic Philosophy</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  My research philosophy centers on bridging the gap between cutting-edge AI research 
                  and practical, real-world applications. I believe that the most impactful research 
                  is that which not only advances theoretical understanding but also provides tangible 
                  benefits to society.
                </p>
                <p>
                  I am particularly passionate about making AI more accessible and efficient. Through 
                  my work on LLM pruning and RAG systems, I aim to democratize access to powerful AI 
                  capabilities, enabling their deployment in resource-constrained environments and 
                  underserved communities.
                </p>
                <p>
                  In my development work, I prioritize creating scalable, maintainable systems that 
                  integrate AI capabilities seamlessly. I believe in the power of interdisciplinary 
                  collaboration and am always eager to learn from diverse perspectives.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Future Goals Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Goals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-semibold text-lg mb-2">Graduate Studies</h3>
                <p className="text-gray-600 text-sm">
                  Pursuing advanced research in efficient AI systems and model optimization
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🔬</div>
                <h3 className="font-semibold text-lg mb-2">Research Impact</h3>
                <p className="text-gray-600 text-sm">
                  Publishing impactful research that advances AI accessibility and efficiency
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-semibold text-lg mb-2">Global Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Collaborating with researchers worldwide on meaningful AI projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
