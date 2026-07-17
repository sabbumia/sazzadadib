// components/contact/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClasses =
  'w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-400/60 focus:outline-none';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', company: '' });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '', company: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Network error — please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center py-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 size={28} aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">Message sent!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-400">
          Thanks for reaching out — I'll get back to you as soon as I can.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="jane@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={update('subject')}
          placeholder="Research collaboration inquiry"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          value={form.message}
          onChange={update('message')}
          placeholder="Your message…"
          className={`resize-y ${inputClasses}`}
        />
      </div>

      {/* Honeypot — hidden from real visitors, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={update('company')}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {status === 'error' && (
        <p className="flex items-start gap-2 text-sm text-red-400">
          <AlertCircle size={16} className="mt-0.5 shrink-0" aria-hidden />
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={status === 'submitting'}
        icon={status === 'submitting' ? <Loader2 size={17} className="animate-spin" /> : <Send size={17} />}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  );
};
