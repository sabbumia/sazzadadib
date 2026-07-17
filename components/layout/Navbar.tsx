// components/layout/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, FileDown } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/config/site';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        isScrolled || mobileOpen
          ? 'border-white/10 bg-zinc-950/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-18">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          >
            <span className="font-mono text-indigo-400 transition-colors group-hover:text-cyan-400">
              λ
            </span>
             Sazzad Hossain
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            >
              <FileDown size={15} aria-hidden />
              CV
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          >
            {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div id="mobile-menu" className="animate-menu-in border-t border-white/10 py-3 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={cn(
                  'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950"
            >
              <FileDown size={15} aria-hidden />
              Download CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};
