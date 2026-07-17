// lib/resend.ts

import { Resend } from 'resend';

// Resend's constructor throws immediately on a falsy key, which would crash the build
// (Next.js imports route modules to collect page data) before RESEND_API_KEY is set.
// The route handler checks for a real key before ever calling `.send()`, so this
// placeholder is never actually used to send anything.
export const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');
