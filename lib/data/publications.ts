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
  },
  {
    id: "bangla-whisperdiar-2026",
    title:
      "Bangla-WhisperDiar: Fine-Tuning Whisper and PyAnnote for Bangla Long-Form Speech Recognition and Speaker Diarization",
    authors: [
      "Mohammed Aman Bhuiyan",
      "Md. Sazzad Hossain Adib",
      "Samiul Basir Bhuiyan",
      "Amit Chakraborty",
      "Aritra Islam Saswato",
      "Ahmed Faizul Haque Dhrubo",
      "Mohammad Ashrafuzzaman Khan",
    ],
    venue: "arXiv preprint",
    year: 2026,
    status: "under-review",
    links: {
      arxiv: "https://arxiv.org/abs/2605.08214",
      github: "https://github.com/sazzadadib/BitwiseMind_DL_Sprint_4.0",
    },
    abstract:
      "Fine-tunes Whisper for long-form Bangla ASR and PyAnnote's segmentation model for speaker diarization, tackling diverse acoustic conditions and speaker variability in real-world recordings. Achieves a 0.2441 Word Error Rate and a 0.2392 Diarization Error Rate on the test set, notably improving over pretrained baselines.",
  },
  {
    id: "reg2bangla-2026",
    title: "Reg2Bangla: An End-to-End Regional Speech Standardization",
    authors: [
      "Samiul Basir Bhuiyan",
      "Md. Sazzad Hossain Adib",
      "Mohammed Aman Bhuiyan",
      "Amit Chakraborty",
      "Aritra Islam Saswato",
      "Ahmed Faizul Haque Dhrubo",
      "Mohammad Ashrafuzzaman Khan",
      "Mohammad Abdul Qayum",
    ],
    venue: "arXiv preprint",
    year: 2026,
    status: "under-review",
    links: {
      pdf: "https://assets-eu.researchsquare.com/files/rs-9118485/v2_covered_c0b1b319-eeb1-46da-ab5f-4a946f98ed2c.pdf?c=1779889776",
      github: "https://github.com/sazzadadib/shobdotori-bangla-dialect-ai-televerse",
    },
    abstract:
      "Fine-tunes a Whisper-based ASR model on 3,350 dialectal recordings to transcribe twenty regional Bangladeshi dialects into standard Bangla text, with KenLM post-processing and KV-cache optimization for faster inference. Delivers strong performance despite substantial pronunciation and vocabulary variation across dialects.",
  },
];