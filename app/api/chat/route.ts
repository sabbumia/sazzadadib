// src/app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/config/OpenAIModel";

const SAZZAD_CV_DATA = `
MD. Sazzad Hossain Adib - Computer Science & Engineering Student

CONTACT INFORMATION:
- Email: sazzad.adib@northsouth.edu
- GitHub: github.com/sazzadadib
- LinkedIn: linkedin.com/in/sazzadadib
- Location: Uttara, Dhaka-1230, Bangladesh

EDUCATION:
- North South University (Sep 2021 – Present)
- Bachelor of Science in Computer Science and Engineering
- CGPA: 3.85/4.00
- Merit Scholarship (Top 1% of class)

KEY PROJECTS:
1. AI Doctor Assistant (SaaS Web Application)
   - Technologies: Next.js, TypeScript, NEON PostgreSQL, Clerk, Drizzle ORM, VAPI, OpenRouter AI
   - Voice-powered medical consultation platform with real-time AI healthcare assistance
   - LLM-based symptom analysis and natural doctor-patient conversations
   - Integrated VAPI Voice Assistant with OpenRouter AI
   - Automatic medical report generation
   - Deployed on Vercel
   - GitHub: github.com/sazzadadib/AI-Doctor-Assistant

2. TimeClipAI: Real-Time Action Classification
   - Technologies: PyTorch, Anchor Transformers, I3D, Python
   - Framework for online temporal action localization
   - Real-time action classification in full-length videos
   - Supports multiple benchmark datasets (EGTEA, EPIC-Kitchen 100, THUMOS'14, CricShot10)
   - State-of-the-art performance
   - GitHub: github.com/sazzadadib/CSE499-TimeClip_AI

3. Educational Chatbot using RAG
   - Technologies: SLMs, Python, Ollama, LangChain, HuggingFace, FastAPI
   - Lightweight SLM-based chatbot for offline use
   - 75% accuracy on 4,000-question dataset using RAGChecker
   - Designed for underserved communities

4. Road Accident Analysis System
   - Technologies: Python, Scikit-learn, NumPy, Pandas
   - Predicted patient status and injury type using ML models
   - 99.1% accuracy for status prediction, 89% for injury type
   - Compared multiple algorithms: Logistic Regression, Decision Tree, SVM, XGBoost, Random Forest

5. Agile-Driven Movie Reservation Website
   - Technologies: Node.js, React, MongoDB, Postman, Jest
   - Developed with 5-member team using Agile Scrum
   - MVC architecture, JSDoc documentation, Jest unit tests

6. Viper Travel Booking Website
   - Technologies: PHP, MySQL, JavaScript, CSS
   - Dynamic SQL-based CRUD API
   - End-to-end booking features

PUBLICATIONS:
- "Z-Pruner: Post-Training Pruning of Large Language Models for Efficiency without Retraining"
- Authors: Md. Samiul Basir Bhuiyan, Md. Sazzad Hossain Adib, Mohammed Aman Bhuiyan, Muhammad Rafsan Kabir, Moshiur Farazi, Shafin Rahman, Nabeel Mohammed
- Accepted at IEEE AICCSA 2025
- ArXiv: arxiv.org/abs/2508.15828
- GitHub: github.com/sazzadadib/Z-Pruner

DOMAIN OF INTEREST:
Applied AI and Machine Learning:
- Temporal Action Localization in Videos
- Efficient LLM Deployment (Pruning, Quantization)
- Retrieval-Augmented Generation (RAG) Systems
- Small Language Models for Edge AI

Full-Stack & Scalable Systems:
- MERN Stack and API Development
- Agile-Based Scalable Web Applications
- AI-Integrated Web Interfaces
- Cloud-Ready ML Pipelines

TECHNICAL SKILLS:
Languages & Frameworks:
- Python, JavaScript, TypeScript, C/C++, PHP, Java
- Node.js, React.js, Next.js, Flask, FastAPI, Express.js

Machine Learning & AI:
- PyTorch, Scikit-learn, HuggingFace Transformers
- LangChain, LLamaIndex, Ollama
- RAG, LLM/SLM Fine-tuning, Pruning, Prompt Engineering

Data & Visualization:
- Pandas, NumPy, Matplotlib, Seaborn, OpenCV

Database & DevOps:
- PostgreSQL, MySQL, MongoDB, REST APIs, Git

Tools & Productivity:
- GitHub, Trello, JSDoc, MS Word, Excel, PowerPoint

REFERENCES:
- Dr. Shafin Rahman, Associate Professor, North South University
  Email: shafin.rahman@northsouth.edu
- Dr. Nabeel Mohammed, Associate Professor, North South University
  Email: nabeel.mohammed@northsouth.edu
`;

const SYSTEM_PROMPT = `You are Sazzad's AI Assistant, a helpful chatbot that answers questions about MD. Sazzad Hossain Adib based on his CV and resume.

IMPORTANT RULES:
1. You can ONLY answer questions about Sazzad Hossain Adib using the CV information provided
2. If the question is NOT related to Sazzad or his CV information, respond EXACTLY with: "I was made only for Sazzad Boss. Please ask questions about his education, projects, skills, publications, or experience."
3. Be friendly, professional, and concise in your responses
4. When discussing projects, mention the technologies used
5. If asked about contact information, provide it from the CV
6. If asked about skills, education, or experience, provide detailed information
7. Always refer to Sazzad respectfully (as Sazzad, Sazzad Hossain Adib, or Sazzad Boss)
8. Format your responses clearly with proper spacing

CV INFORMATION:
${SAZZAD_CV_DATA}`;

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: "Invalid message" },
        { status: 400 }
      );
    }

    // Build conversation context
    const messages: any[] = [
      { role: "system", content: SYSTEM_PROMPT }
    ];

    // Add conversation history (last 6 messages for context)
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.slice(-6).forEach((msg: any) => {
        messages.push({
          role: msg.role,
          content: msg.content
        });
      });
    }

    // Add current user message
    messages.push({
      role: "user",
      content: message
    });

    // Call OpenRouter API
    const completion = await openai.chat.completions.create({
      model: "x-ai/grok-4-fast:free",
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseMessage = completion.choices[0]?.message?.content;

    if (!responseMessage) {
      return NextResponse.json(
        { error: "No response from AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: responseMessage.trim(),
      success: true
    });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to process chat request",
        details: error.message 
      },
      { status: 500 }
    );
  }
}