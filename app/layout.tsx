// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
//@ts-ignore
import './globals.css';
import CVChatbot from '@/components/CVChatbot';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MD. Sazzad Hossain Adib - AI Researcher & Developer',
  description: 'Portfolio of MD. Sazzad Hossain Adib, an AI Researcher and Full-Stack Developer specializing in efficient LLM deployment, RAG systems, and scalable web applications.',
  keywords: ['AI', 'Machine Learning', 'Full-Stack Developer', 'Research', 'LLM', 'RAG', 'Next.js'],
  authors: [{ name: 'MD. Sazzad Hossain Adib' }],
  openGraph: {
    title: 'MD. Sazzad Hossain Adib - AI Researcher & Developer',
    description: 'Portfolio showcasing AI research and full-stack development projects',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
          <CVChatbot />
        </main>
        <Footer />
      </body>
    </html>
  );
}