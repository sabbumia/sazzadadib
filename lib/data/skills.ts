// lib/data/skills.ts

import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C/C++",
      "PHP",
      "Java",
      "Node.js",
      "React.js",
      "Next.js",
      "Flask",
      "FastAPI",
      "Express.js"
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "HuggingFace Transformers",
      "LangChain",
      "LLamaIndex",
      "Ollama",
      "RAG",
      "LLM/SLM Fine-tuning",
      "Model Pruning",
      "Prompt Engineering",
      "Computer Vision",
      "NLP"
    ]
  },
  {
    category: "Data & Visualization",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Analysis",
      "Feature Engineering"
    ]
  },
  {
    category: "Database & DevOps",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "REST APIs",
      "Git",
      "Docker",
      "Vercel",
      "Database Design"
    ]
  },
  {
    category: "Tools & Productivity",
    skills: [
      "GitHub",
      "Trello",
      "JSDoc",
      "Jest",
      "Agile/Scrum",
      "Technical Writing"
    ]
  }
];

// Core stack surfaced prominently on the home page
export const coreStack = [
  "Python",
  "PyTorch",
  "LLMs",
  "RAG",
  "LangChain",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
];