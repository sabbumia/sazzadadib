// src/components/CVChatbot.tsx
'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

// Simple Markdown renderer component
const MarkdownMessage = ({ content }: { content: string }) => {
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 my-2 ml-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-sm">{parseInlineMarkdown(item)}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${index}`} className="text-base font-bold mt-3 mb-2 text-gray-900">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${index}`} className="text-lg font-bold mt-3 mb-2 text-gray-900">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${index}`} className="text-xl font-bold mt-3 mb-2 text-gray-900">
            {line.replace('# ', '')}
          </h1>
        );
      }
      // List items
      else if (line.match(/^[\*\-]\s+/) || line.match(/^\d+\.\s+/)) {
        inList = true;
        listItems.push(line.replace(/^[\*\-]\s+/, '').replace(/^\d+\.\s+/, ''));
      }
      else if (line.trim() !== '') {
        flushList();
        elements.push(
          <p key={`p-${index}`} className="text-sm leading-relaxed mb-2">
            {parseInlineMarkdown(line)}
          </p>
        );
      }
      else {
        flushList();
      }
    });

    flushList();
    return elements;
  };

  const parseInlineMarkdown = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    const boldRegex = /(\*{2,3})(.*?)\1/g;
    let match;
    let lastIndex = 0;

    while ((match = boldRegex.exec(remaining)) !== null) {
      if (match.index > lastIndex) {
        parts.push(remaining.substring(lastIndex, match.index));
      }
      
      parts.push(
        <strong key={`bold-${key++}`} className="font-semibold text-gray-900">
          {match[2]}
        </strong>
      );
      
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < remaining.length) {
      parts.push(remaining.substring(lastIndex));
    }

    return <>{parts}</>;
  };

  return <div className="markdown-content">{renderMarkdown(content)}</div>;
};

// Typing animation component
const TypingMessage = ({ content, onComplete }: { content: string; onComplete: () => void }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent(prev => prev + content[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20); // Speed of typing (20ms per character)

      return () => clearTimeout(timeout);
    } else if (currentIndex === content.length && content.length > 0) {
      onComplete();
    }
  }, [currentIndex, content, onComplete]);

  return <MarkdownMessage content={displayedContent} />;
};

export default function CVChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! I'm Sazzad's AI Assistant. Ask me anything about Sazzad Hossain's education, projects, skills, or experience!",
      timestamp: new Date(),
      isTyping: false,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      isTyping: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory: messages.slice(-6),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
        isTyping: true,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error('Chat error:', error);
      setIsLoading(false);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
        isTyping: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  const handleTypingComplete = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isTyping: false } : msg
      )
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sazzad's AI Assistant</h3>
                <p className="text-xs text-blue-100">Always here to help!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-blue-600'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 rounded-tl-none shadow-md'
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
                    <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">
                      {message.content}
                    </p>
                  )}
                  <span
                    className={`text-xs mt-2 block ${
                      message.role === 'user' ? 'text-blue-100' : 'text-gray-400'
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
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Sazzad..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm placeholder-gray-500 text-black"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              © 2025 Sazzad Hossain.
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}