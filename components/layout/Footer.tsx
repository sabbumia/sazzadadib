// components/layout/Footer.tsx

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, BookOpen, MapPin, Phone } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: profileData.github, label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: profileData.linkedin, label: 'LinkedIn' },
    { icon: <BookOpen size={20} />, href: profileData.scholar, label: 'Google Scholar' },
    { icon: <Mail size={20} />, href: `mailto:${profileData.email}`, label: 'Email' }
  ];

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/publications', label: 'Publications' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sazzad Hossain</h3>
            <p className="text-gray-400 mb-4">
              AI Researcher & Full-Stack Developer specializing in efficient LLM deployment and scalable web applications.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{profileData.location}</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{profileData.phone}</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Open to research collaborations and full-stack development opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} MD. Sazzad Hossain Adib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};