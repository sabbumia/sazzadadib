// app/not-found.tsx

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-lg text-center">
        <p className="font-mono text-sm font-medium uppercase tracking-[0.25em] text-indigo-400">
          404
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Button href="/" variant="outline" icon={<ArrowLeft size={18} />} iconPosition="left" className="mt-8">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
