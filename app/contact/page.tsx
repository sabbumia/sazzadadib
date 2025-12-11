// app/contact/page.tsx

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Send } from 'lucide-react';
import { Hero } from '@/components/layout/Hero';
import { Section, SectionHeader } from '@/components/ui/Section';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { profileData, references } from '@/lib/data/profile';

export const metadata = {
  title: 'Contact - MD. Sazzad Hossain Adib',
  description: 'Get in touch with MD. Sazzad Hossain Adib for research collaborations and opportunities.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      color: 'blue'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: profileData.location,
      color: 'purple'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      value: '@sazzadadib',
      href: profileData.github,
      color: 'gray'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      value: 'sazzadadib',
      href: profileData.linkedin,
      color: 'blue'
    },
    {
      icon: <BookOpen size={32} />,
      label: 'Google Scholar',
      value: 'Publications',
      href: profileData.scholar,
      color: 'red'
    }
  ];

  return (
    <>
      <Hero 
        title="Get In Touch"
        subtitle="Let's Discuss Research & Collaboration Opportunities"
        minimal
      />

      {/* Contact Information */}
      <Section background="white">
        <SectionHeader 
          title="Contact Information"
          subtitle="Reach out through any of these channels"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {contactMethods.map((method, idx) => (
            <Card key={idx} hover>
              <CardContent className="text-center pt-8 pb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${method.color}-100 text-${method.color}-600 mb-4`}>
                  {method.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{method.label}</h3>
                {method.href ? (
                  <a 
                    href={method.href}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{method.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card hover>
                <CardContent className="text-center pt-8 pb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${link.color}-100 text-${link.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                    {link.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{link.label}</h3>
                  <p className="text-gray-600">{link.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Quick Contact Form */}
      <Section background="gray">
        <SectionHeader 
          title="Send a Message"
          subtitle="Direct email contact for inquiries"
        />
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <form action={`mailto:${profileData.email}`} method="get" className="space-y-6">
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Research Collaboration Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="body" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="body"
                    name="body"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your message..."
                  />
                </div>
                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg" 
                  icon={<Send size={20} />}
                  className="w-full"
                >
                  Open in Email Client
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  This will open your default email client with a pre-filled message
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Academic References */}
      {/* <Section background="white">
        <SectionHeader 
          title="Academic References"
          subtitle="Research mentors and supervisors"
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((ref, idx) => (
            <Card key={idx} hover>
              <CardHeader>
                <CardTitle className="text-xl mb-2">{ref.name}</CardTitle>
                <p className="text-blue-600 font-semibold text-lg">{ref.title}</p>
                <p className="text-gray-600">{ref.institution}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="text-gray-400" size={18} />
                  <a 
                    href={`mailto:${ref.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {ref.email}
                  </a>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  href={`mailto:${ref.email}`}
                  icon={<Mail size={16} />}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section> */}

      {/* Availability */}
      <Section background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Open to Opportunities
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Currently Seeking:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Research Internships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>PhD Opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Research Collaborations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Full-Stack Development Roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-lg">
            Whether you have a research idea, collaboration proposal, or just want to connect, 
            I'd love to hear from you!
          </p>
        </div>
      </Section>
    </>
  );
}