// components/chat/CVChatbot.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

// Lightweight Markdown renderer tuned for the assistant's responses
const MarkdownMessage = ({ content }: { content: string }) => {
  const parseInlineMarkdown = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    const boldRegex = /(\*{2,3})(.*?)\1/g;
    let match;
    let lastIndex = 0;
    let key = 0;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={`bold-${key++}`} className="font-semibold text-white">
          {match[2]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    return <>{parts}</>;
  };

  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-3 ml-2 list-inside list-disc space-y-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-zinc-300">
                {parseInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    lines.forEach((line, index) => {
      const headingMatch = line.match(/^(#{1,3})\s+(.*)/);
      if (headingMatch) {
        flushList();
        elements.push(
          <p
            key={`h-${index}`}
            className="mt-4 mb-2 flex items-center gap-2 text-base font-bold text-white"
          >
            <span className="h-4 w-1 rounded-full bg-linear-to-b from-indigo-400 to-cyan-400" aria-hidden />
            {headingMatch[2]}
          </p>
        );
      } else if (line.match(/^[\*\-]\s+/) || line.match(/^\d+\.\s+/)) {
        listItems.push(line.replace(/^[\*\-]\s+/, '').replace(/^\d+\.\s+/, ''));
      } else if (line.trim() !== '') {
        flushList();
        elements.push(
          <p key={`p-${index}`} className="mb-2 text-sm leading-relaxed text-zinc-300">
            {parseInlineMarkdown(line)}
          </p>
        );
      } else {
        flushList();
      }
    });

    flushList();
    return elements;
  };

  return <div>{renderMarkdown(content)}</div>;
};

// Character-by-character typing effect for assistant replies
const TypingMessage = ({ content, onComplete }: { content: string; onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => setCurrentIndex((prev) => prev + 1), 15);
      return () => clearTimeout(timeout);
    }
    if (content.length > 0) onComplete();
  }, [currentIndex, content, onComplete]);

  return <MarkdownMessage content={content.slice(0, currentIndex)} />;
};

const quickSuggestions = [
  'Tell me about his experience',
  'What projects has Sazzad built?',
  'What are his key skills?',
  'Tell me about his research',
];

export default function CVChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content:
        "👋 Hello! I'm Sazzad's AI Assistant. I can help you learn about his experience, projects, research, and skills. What would you like to know?",
      timestamp: new Date(),
      isTyping: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim() || isLoading) return;

    setShowQuickActions(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date(),
      isTyping: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: messages.slice(-6),
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.message,
          timestamp: new Date(),
          isTyping: true,
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: '⚠️ Sorry, I encountered an error. Please try again.',
          timestamp: new Date(),
          isTyping: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTypingComplete = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, isTyping: false } : msg))
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating launcher */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI assistant chat"
          className="group fixed right-6 bottom-6 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-cyan-500 shadow-2xl shadow-indigo-500/30 transition-transform duration-300 hover:scale-110"
        >
          <MessageCircle className="h-7 w-7 text-white transition-transform group-hover:scale-110" aria-hidden />
          <span
            className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 animate-pulse rounded-full border-2 border-zinc-950 bg-emerald-400"
            aria-hidden
          />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Sazzad AI Assistant"
          className="animate-panel-in fixed inset-0 z-50 flex h-full w-full flex-col overflow-hidden border border-white/10 bg-zinc-900/95 backdrop-blur-xl sm:inset-auto sm:right-6 sm:bottom-6 sm:h-[650px] sm:max-h-[85vh] sm:w-105 sm:rounded-3xl sm:shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-linear-to-r from-indigo-500/15 to-cyan-500/10 p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-cyan-500">
                  <Bot className="h-5.5 w-5.5 text-white" aria-hidden />
                </div>
                <span
                  className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-zinc-900 bg-emerald-400"
                  aria-hidden
                />
              </div>
              <div>
                <p className="flex items-center gap-1.5 font-semibold text-white">
                  Sazzad&apos;s AI Assistant
                  <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden />
                </p>
                <p className="text-xs text-zinc-400">Online · Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    message.role === 'user'
                      ? 'bg-white/10'
                      : 'bg-linear-to-br from-indigo-500 to-cyan-500'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="h-4 w-4 text-zinc-300" aria-hidden />
                  ) : (
                    <Bot className="h-4 w-4 text-white" aria-hidden />
                  )}
                </div>
                <div className="flex max-w-[80%] flex-col">
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'rounded-tr-sm bg-indigo-500 text-white'
                        : 'rounded-tl-sm border border-white/10 bg-white/5 text-zinc-200'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      message.isTyping ? (
                        <TypingMessage
                          content={message.content}
                          onComplete={() => handleTypingComplete(message.id)}
                        />
                      ) : (
                        <MarkdownMessage content={message.content} />
                      )
                    ) : (
                      <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                        {message.content}
                      </p>
                    )}
                  </div>
                  <span
                    className={`mt-1.5 px-1 text-xs text-zinc-500 ${
                      message.role === 'user' ? 'text-right' : ''
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-cyan-500">
                  <Bot className="h-4 w-4 text-white" aria-hidden />
                </div>
                <div className="rounded-2xl rounded-tl-sm border border-white/10 bg-white/5 px-4 py-3.5">
                  <div className="flex gap-1.5" aria-label="Assistant is typing">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400" />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-sky-400"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          {showQuickActions && messages.length === 1 && (
            <div className="border-t border-white/10 p-4">
              <p className="mb-3 flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                <Sparkles className="h-3 w-3" aria-hidden />
                Quick questions
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSendMessage(suggestion)}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-indigo-400/40 hover:text-white"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything…"
                disabled={isLoading}
                aria-label="Chat message"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 transition-colors focus:border-indigo-400/60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isLoading}
                aria-label="Send message"
                className="flex min-w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-cyan-500 px-4 text-white transition-all duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                ) : (
                  <Send className="h-5 w-5" aria-hidden />
                )}
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-zinc-600">
              AI-generated — may occasionally be inaccurate
            </p>
          </div>
        </div>
      )}

    </>
  );
}
