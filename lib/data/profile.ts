// lib/data/profile.ts

import { Profile, Education, Reference, ResearchInterest } from '../types';

export const profileData: Profile = {
  name: "MD. Sazzad Hossain Adib",
  title: "AI Researcher & Full-Stack Developer",
  email: "sazzad.adib@northsouth.edu",
  location: "Uttara, Dhaka-1230, Bangladesh",
  linkedin: "https://linkedin.com/in/sazzadadib",
  github: "https://github.com/sazzadadib",
  scholar: "https://scholar.google.com/citations?user=sazzadadib",
  bio: [
    "I am a passionate Computer Science student at North South University with a strong focus on Applied AI and Full-Stack Development. Currently maintaining a CGPA of 3.83/4.00 and recognized with a Merit Scholarship for being in the top 1% of my class.",
    "My research and development work spans across cutting-edge areas including Temporal Action Localization, Efficient LLM Deployment, Retrieval-Augmented Generation systems, and scalable web applications. I have published research at IEEE AICCSA 2025 and developed multiple production-ready AI-powered applications.",
    "I am actively seeking research opportunities and collaborations in AI/ML, with a particular interest in efficient model deployment and real-world applications of large language models."
  ]
};

export const educationData: Education = {
  institution: "North South University",
  degree: "Bachelor of Science",
  field: "Computer Science and Engineering",
  duration: "Sep 2021 – Present",
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

