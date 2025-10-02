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
      "OpenCV",
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
      "MS Office Suite",
      "Technical Writing"
    ]
  }
];

// Skill proficiency levels (for visualization)
export const skillProficiency = {
  expert: ["Python", "JavaScript", "TypeScript", "React.js", "Next.js", "PyTorch", "Machine Learning"],
  advanced: ["Node.js", "PostgreSQL", "LangChain", "RAG", "Computer Vision", "Git"],
  intermediate: ["C/C++", "PHP", "Java", "MongoDB", "Docker"]
};