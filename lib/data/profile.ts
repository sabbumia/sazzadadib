// lib/data/profile.ts

import { Profile, Education, Reference, ResearchInterest } from '../types';

export const profileData: Profile = {
  name: "MD. Sazzad Hossain Adib",
  title: "AI Engineer & Researcher",
  email: "sazzad.adib@northsouth.edu",
  location: "Uttara, Dhaka-1230, Bangladesh",
  linkedin: "https://linkedin.com/in/sazzadadib",
  github: "https://github.com/sazzadadib",
  scholar: "https://scholar.google.com/citations?user=sazzadadib",
  bio: [
    "I am an AI Research Engineer at Robot Bulls and a Research Assistant at MILAB, North South University, where I completed my B.Sc. in Computer Science and Engineering in December 2025 with a CGPA of 3.83/4.00 and a Merit Scholarship for ranking in the top 1% of my class.",
    "My work sits at the intersection of research and production: at Robot Bulls, I'm researching and building a real-time Talking Head system — letting users hold natural, face-to-face voice conversations with AI. At MILAB, I co-authored Z-Pruner, a post-training LLM pruning method published at IEEE AICCSA 2025, and developed TimeClipAI, a real-time temporal action localization framework. My research spans Temporal Action Localization, Efficient LLM Deployment, and Small Language Models for edge AI.",
    "I am actively open to research collaborations and AI engineering opportunities, with a particular interest in real-time conversational AI, efficient model deployment, and real-world applications of large language models."
  ]
};

export const educationData: Education = {
  institution: "North South University",
  degree: "Bachelor of Science",
  field: "Computer Science and Engineering",
  duration: "Sep 2021 – Dec 2025",
  location: "Dhaka, Bangladesh",
  cgpa: "3.83/4.00",
  achievements: [
    "Merit Scholarship - Top 1% of class",
    "Published research at IEEE AICCSA 2025",
    "Led multiple AI and full-stack development projects"
  ]
};

export const researchInterests: ResearchInterest[] = [
  {
    category: "Applied AI and Machine Learning",
    topics: [
      "Temporal Action Localization in Videos",
      "Efficient LLM Deployment (Pruning, Quantization)",
      "Retrieval-Augmented Generation (RAG) Systems",
      "Small Language Models for Edge AI",
      "AI-Integrated Web Interfaces",
      "Cloud-Ready ML Pipelines"
    ],
    description: "Focused on developing efficient and practical AI solutions for real-world applications"
  }
];


export const references: Reference[] = [
  {
    name: "Dr. Shafin Rahman",
    title: "Associate Professor",
    institution: "North South University",
    email: "shafin.rahman@northsouth.edu"
  },
  {
    name: "Dr. Nabeel Mohammed",
    title: "Associate Professor",
    institution: "North South University",
    email: "nabeel.mohammed@northsouth.edu"
  }
];