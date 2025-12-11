// components/layout/Hero.tsx
'use client';

import React from 'react';
import { Github, Linkedin, BookOpen, Mail, ArrowDown } from 'lucide-react';
import { profileData } from '@/lib/data/profile';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  minimal?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title = profileData.name,
  subtitle = profileData.title,
  description,
  showCTA = true,
  minimal = false
}) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (minimal) {
    return (
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
  {/* Geometric Background Pattern */}
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
      backgroundSize: '100px 100px'
    }}></div>
  </div>

  {/* Subtle Glow Effects */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-96 h-96 bg-gray-700/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse"></div>
    <div className="absolute w-96 h-96 bg-gray-600/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <div className="text-center">
      {/* Profile Photo */}
      <div className="mb-8 animate-fade-in">
        <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full blur-xl opacity-30"></div>
          <img
            src="myphoto.png"
            alt={title}
            className="relative w-full h-full rounded-full object-cover border-4 border-gray-700/50 shadow-2xl backdrop-blur"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <h1 className="text-5xl md:text-5xl font-bold mb-4 animate-fade-in text-white tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6 animate-fade-in delay-200 font-light">
          {subtitle}
        </p>
        {description && (
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
            {description}
          </p>
        )}
      </div>

      {/* Social Media Icons */}
      {showCTA && (
        <div className="flex justify-center gap-6 mb-12 animate-fade-in delay-500">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github size={28} strokeWidth={1.5} />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} strokeWidth={1.5} />
          </a>
          <a
            href={profileData.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
            aria-label="Google Scholar"
          >
            <BookOpen size={28} strokeWidth={1.5} />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail size={28} strokeWidth={1.5} />
          </a>
        </div>
      )}

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="animate-bounce inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors"
        aria-label="Scroll to content"
      >
        <span className="text-sm font-medium">Explore More</span>
        <ArrowDown size={18} />
      </button>
    </div>
  </div>
</div>

  );
};