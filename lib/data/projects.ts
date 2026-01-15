// lib/data/projects.ts

import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "ai-doctor-assistant",
    title: "AI Doctor Assistant",
    description: "Voice-powered medical consultation platform with AI-driven healthcare assistance",
    longDescription: "A comprehensive SaaS platform that revolutionizes medical consultations through AI-powered voice interactions, providing intelligent symptom analysis and automated report generation.",
    features: [
      "LLM-based symptom analysis for natural doctor-patient conversations",
      "Real-time speech understanding with VAPI Voice Assistant + OpenRouter AI",
      "Automatic medical report generation (symptoms, prescriptions, advice, summary)",
      "Clerk authentication for secure access",
      "NEON PostgreSQL + Drizzle ORM for robust data operations",
      "SaaS-ready architecture: dashboards, doctor listings, pricing, health tips",
      "Deployed on Vercel for global accessibility"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "AI/LLM",
      "PostgreSQL",
      "Voice AI",
      "VAPI",
      "Clerk Auth",
      "Drizzle ORM",
      "SaaS"
    ],
    category: "ai",
    github: "https://github.com/sazzadadib/AI-Doctor-Agent",
    demo: "https://aidocassistant.vercel.app",
    featured: true
  },
  {
    id: "timeclip-ai",
    title: "TimeClipAI: Real-Time Action Classification",
    description: "Framework for online temporal action localization using Anchor Transformers",
    longDescription: "Advanced deep learning framework for real-time video analysis, achieving state-of-the-art performance in temporal action localization across multiple benchmark datasets.",
    features: [
      "Real-time action classification and time segmentation in videos",
      "Support for EGTEA, EPIC-Kitchen 100, THUMOS'14, CricShot10 datasets",
      "Pre-trained I3D features for efficient training/testing",
      "Offset Scoring Network (OSN) for refined action boundary predictions",
      "State-of-the-art performance with robust generalization",
      "Optimized for both accuracy and inference speed"
    ],
    technologies: [
      "PyTorch",
      "Python",
      "Computer Vision",
      "Transformers",
      "Video Analysis",
      "Deep Learning",
      "I3D Features"
    ],
    category: "ml",
    github: "https://github.com/sazzadadib/CSE499-TimeClip_AI",
    featured: true
  },
  {
    id: "deshiplate-ai",
    title: "DeshiPlate AI: Bangladeshi Food Recognition",
    description: "AI-powered food recognition system specialized in traditional Bangladeshi cuisine with nutrition assistance",
    longDescription: "An intelligent food recognition platform leveraging deep learning to identify 33 traditional Bangladeshi dishes, providing instant nutritional insights and personalized health recommendations.",
    features: [
      "AI-powered recognition of 33 traditional Bangladeshi dishes",
      "Custom-curated dataset of Bangladeshi cuisine for model training",
      "NextViT deep learning architecture achieving 89.76% accuracy",
      "Real-time inference engine for instant food classification from images",
      "Personalized nutrition recommendations based on classified dishes",
      "Health suggestions tailored to identified food items",
      "NEON PostgreSQL + Drizzle ORM for scalable data operations",
      "Modern, responsive UI deployed on Vercel"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "NextViT",
      "PyTorch",
      "Deep Learning",
      "PostgreSQL",
      "Drizzle ORM",
      "OpenRouter AI",
      "Computer Vision"
    ],
    category: "ai",
    github: "https://github.com/sazzadadib/DeshiPlate-AI",
    demo: "https://deshiplateai.vercel.app",
    featured: true
  },
  {
    id: "interviewbd",
    title: "InterviewBD: Interview Preparation Platform",
    description: "Community-driven platform for sharing and discovering real interview questions across various fields",
    longDescription: "A comprehensive interview preparation ecosystem where professionals share authentic interview experiences, enabling job seekers to prepare effectively with field-specific questions, verified contributors, and collaborative learning features.",
    features: [
      "Hierarchical content organization with fields, categories, and Q&A system",
      "Profile verification and badge system for credible contributors",
      "Real-time messaging with online status and activity tracking",
      "Three-tier role management: Admin, Moderator, and User permissions",
      "Advanced search, filtering, and like/bookmark functionality",
      "Comprehensive moderation tools with reporting and analytics dashboard",
      "JWT authentication with email verification and PostgreSQL + Drizzle ORM",
      "Deployed on Vercel with fully responsive design"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "JWT Auth",
      "Real-time Chat",
      "Nodemailer",
      "Tailwind CSS",
      "Vercel"
    ],
    category: "fullstack",
    github: "https://github.com/sazzadadib/InterviewBD-Platform",
    demo: "https://interviewbd.vercel.app",
    featured: true
  },
  {
    id: "educational-chatbot",
    title: "Educational Chatbot using RAG",
    description: "Lightweight SLM-based chatbot for offline, device-efficient educational assistance",
    longDescription: "An innovative educational tool leveraging Small Language Models and RAG architecture to provide accessible learning support for underserved communities, with offline capability.",
    features: [
      "Lightweight SLM architecture for device-efficient operation",
      "Web-based interface for easy accessibility",
      "75% accuracy on 4,000-question dataset validated with RAGChecker",
      "Offline capability for areas with limited internet connectivity",
      "Supports underserved communities in learning",
      "Retrieval-Augmented Generation for accurate responses"
    ],
    technologies: [
      "Python",
      "RAG",
      "SLM",
      "LangChain",
      "Ollama",
      "Flask",
      "NLP"
    ],
    category: "ai",
    github: "https://github.com/CSE299-LLM-CHATBOT/physics_chat_bot",
    featured: true
  },
  {
    id: "road-accident-analysis",
    title: "Road Accident Analysis System",
    description: "ML system for predicting patient status and injury severity from accident data",
    longDescription: "Comprehensive machine learning pipeline for emergency response optimization, comparing multiple algorithms to achieve high accuracy in critical medical predictions.",
    features: [
      "Predictive models for patient status and injury type classification",
      "Comparative analysis: Logistic Regression, Decision Tree, SVM, XGBoost, Random Forest",
      "Achieved 99.1% accuracy for patient status prediction",
      "89% accuracy for injury type classification",
      "Data preprocessing and feature engineering pipeline",
      "Insights for improving emergency response strategies"
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "ML",
      "Data Analysis"
    ],
    category: "ml",
    github: "https://github.com/B-I-T-W-I-S-E-M-I-N-D-S/Apply-Data-PreProcessing",
    featured: false
  },
  {
    id: "movie-reservation",
    title: "Agile-Driven Movie Reservation Website",
    description: "Scalable full-stack application built with Agile Scrum methodology",
    longDescription: "Professional web application demonstrating modern development practices, built by a 5-member team following Agile principles with comprehensive testing and documentation.",
    features: [
      "Complete movie browsing and reservation system",
      "Frontend/backend architecture with MVC pattern",
      "RESTful API design for seamless communication",
      "Comprehensive code documentation using JSDoc",
      "Unit and integration testing with Jest",
      "Agile Scrum methodology with sprint planning and retrospectives",
      "Team collaboration using Git and Trello"
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "MVC",
      "Jest",
      "JSDoc",
      "Agile"
    ],
    category: "fullstack",
    github: "https://github.com/sazzadadib/BookMySeats-A-cinema-seat-booking-system",
    featured: false
  },
  {
    id: "viper-travel",
    title: "Viper Travel Booking Website",
    description: "Full-featured travel booking platform with SQL-based backend",
    longDescription: "Complete travel management system with robust database operations, providing users with seamless booking experiences and travel planning capabilities.",
    features: [
      "Comprehensive travel booking functionality",
      "SQL-based CRUD operations for data management",
      "User authentication and session management",
      "Search and filter capabilities for destinations",
      "Booking history and management features",
      "Responsive design for mobile and desktop"
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "CRUD API"
    ],
    category: "web",
    github: "https://github.com/sazzadadib/Viper_Travels",
    featured: false
  }
];

