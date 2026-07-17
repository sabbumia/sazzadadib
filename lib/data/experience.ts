// lib/data/experience.ts

import { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    id: 'robot-bulls-ai-research-engineer',
    role: 'AI Research Engineer',
    organization: 'Robot Bulls',
    type: 'industry',
    duration: 'Mar 2026 – Present',
    current: true,
    summary:
      'Researching and developing a real-time Talking Head system — a conversational AI with a live, responsive face that lets users hold natural, face-to-face voice conversations with AI.',
    highlights: [
      'Researching and building a real-time Talking Head system for live, face-to-face AI conversations',
      'Designing low-latency streaming pipelines for natural, real-time speech-to-speech interaction',
      'Integrating conversational LLMs with synchronized facial animation for a responsive AI avatar',
      'Prototyping the real-time audio/video streaming architecture end to end, from research to implementation',
      'Iterating on model and system performance to keep conversations fluid under real-time constraints',
    ],
    technologies: [
      'Python',
      'Real-Time Streaming',
      'LLMs',
      'Speech-to-Text',
      'Text-to-Speech',
      'WebRTC',
      'Computer Vision',
    ],
  },
  {
    id: 'milab-research-assistant',
    role: 'Research Assistant',
    organization: 'MILAB, North South University',
    type: 'research',
    location: 'Dhaka, Bangladesh',
    duration: 'Apr 2025 – Present',
    current: true,
    summary:
      'Conducting applied AI/ML research spanning efficient LLM deployment and real-time video understanding — co-authored Z-Pruner (IEEE AICCSA 2025) and developed TimeClipAI, a real-time action localization framework.',
    highlights: [
      'Co-authoring Z-Pruner, a post-training LLM pruning method published at IEEE AICCSA 2025',
      'Developing TimeClipAI, a real-time temporal action localization framework with state-of-the-art benchmark results',
      'Implementing and benchmarking deep learning models in PyTorch',
      'Reading, reproducing, and extending state-of-the-art research papers',
      'Collaborating with faculty members and co-authors across research labs',
    ],
    technologies: [
      'PyTorch',
      'Transformers',
      'LLM Pruning',
      'Temporal Action Localization',
      'Computer Vision',
      'HuggingFace',
    ],
  },
];
