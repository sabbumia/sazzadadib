// lib/data/publications.ts

import { Publication } from '../types';

export const publicationsData: Publication[] = [
  {
    id: "z-pruner-2025",
    title: "Z-Pruner: Post-Training Pruning of Large Language Models for Efficiency without Retraining",
    authors: [
      "Md. Samiul Basir Bhuiyan",
      "Md. Sazzad Hossain Adib",
      "Mohammed Aman Bhuiyan",
      "Muhammad Rafsan Kabir",
      "Moshiur Farazi",
      "Shafin Rahman",
      "Nabeel Mohammed"
    ],
    venue: "IEEE AICCSA 2025",
    year: 2025,
    status: "accepted",
    links: {
      arxiv: "https://arxiv.org/abs/2508.15828",
      github: "https://github.com/sazzadadib/Z-Pruner"
    },
    abstract: "This paper introduces Z-Pruner, a novel post-training pruning technique for Large Language Models that achieves significant efficiency improvements without requiring retraining. Our method addresses the computational challenges of deploying LLMs by strategically removing redundant parameters while maintaining model performance. Extensive experiments demonstrate that Z-Pruner can reduce model size and inference time substantially while preserving the quality of generated outputs."
  }
];

// Helper function to get featured publications
export const getFeaturedPublications = () => {
  return publicationsData.filter(pub => pub.status === 'accepted' || pub.status === 'published');
};

// Helper function to format author list with emphasis on specific author
export const formatAuthors = (authors: string[], emphasizeAuthor: string) => {
  return authors.map(author => ({
    name: author,
    isEmphasized: author === emphasizeAuthor
  }));
};