'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot, User, Sparkles, ChevronDown } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

// Enhanced Markdown renderer with better styling
const MarkdownMessage = ({ content }: { content: string }) => {
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 my-3 ml-2">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-sm leading-relaxed text-gray-700">
                {parseInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${index}`} className="text-base font-bold mt-4 mb-2 text-gray-900 flex items-center gap-2">
            <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${index}`} className="text-lg font-bold mt-4 mb-2 text-gray-900 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('# ')) {
        flushList();
        elements.push(
          <h1 key={`h1-${index}`} className="text-xl font-bold mt-4 mb-3 text-gray-900 flex items-center gap-2">
            <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.match(/^[\*\-]\s+/) || line.match(/^\d+\.\s+/)) {
        inList = true;
        listItems.push(line.replace(/^[\*\-]\s+/, '').replace(/^\d+\.\s+/, ''));
      } else if (line.trim() !== '') {
        flushList();
        elements.push(
          <p key={`p-${index}`} className="text-sm leading-relaxed mb-2 text-gray-700">
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

// Enhanced typing animation
const TypingMessage = ({ content, onComplete }: { content: string; onComplete: () => void }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setDisplayedContent(prev => prev + content[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 15);

      return () => clearTimeout(timeout);
    } else if (currentIndex === content.length && content.length > 0) {
      onComplete();
    }
  }, [currentIndex, content, onComplete]);

  return <MarkdownMessage content={displayedContent} />;
};

// Quick action suggestions
const QuickActions = ({ onSelect }: { onSelect: (text: string) => void }) => {
  const suggestions = [
    "Tell me about education",
    "What projects has Sazzad built?",
    "What are the key skills?",
    "Show work experience"
  ];

  return (
    <div className="p-4 space-y-2">
      <p className="text-xs font-medium text-gray-500 mb-3 flex items-center gap-2">
        <Sparkles className="w-3 h-3" />
        Quick Questions
      </p>
      <div className="grid grid-cols-2 gap-2">
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(suggestion)}
            className="text-left text-xs px-3 py-2 bg-gradient-to-br from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 border border-blue-200 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md text-gray-700 font-medium"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function CVChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "👋 Hello! I'm Sazzad's AI Assistant. I can help you learn about his education, projects, skills, and professional experience. What would you like to know?",
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
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
        content: '⚠️ Sorry, I encountered an error. Please try again.',
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
      {/* Floating Chat Button with pulse effect */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center group hover:scale-110 z-50 animate-float"
          aria-label="Open chat"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
          <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border-2 border-white shadow-lg" />
        </button>
      )}

      {/* Chat Window with glassmorphism */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full h-full sm:w-[420px] sm:h-[680px] sm:max-h-[90vh] flex flex-col z-50 animate-slideUp">
          {/* Backdrop blur for desktop */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl sm:rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-4 sm:rounded-t-3xl">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      Sazzad AI Assistant
                      <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
                    </h3>
                    <p className="text-xs text-blue-100">Online • Ready to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:rotate-90"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area with custom scrollbar */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message, idx) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-messageSlide ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                        : 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="flex flex-col max-w-[78%]">
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-sm'
                          : 'bg-white/90 text-gray-800 rounded-tl-sm border border-gray-100'
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
                    </div>
                    <span
                      className={`text-xs mt-1.5 px-1 ${
                        message.role === 'user' ? 'text-right text-gray-500' : 'text-gray-400'
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
                <div className="flex gap-3 animate-messageSlide">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shadow-md">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white/90 rounded-2xl rounded-tl-sm px-4 py-3 shadow-md border border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions - Show only at start */}
            {showQuickActions && messages.length === 1 && (
              <div className="border-t border-gray-200/50 bg-white/50 backdrop-blur-sm animate-fadeIn">
                <QuickActions onSelect={handleSendMessage} />
              </div>
            )}

            {/* Input Area with gradient border */}
            <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-gray-200/50 sm:rounded-b-3xl">
              <div className="flex gap-2 p-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-white border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:bg-gray-50 disabled:cursor-not-allowed text-sm placeholder-gray-400 text-black shadow-inner"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim() || isLoading}
                  className="px-4 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center min-w-[48px] hover:scale-105"
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center font-medium">
                Powered by AI • © 2025 Sazzad Hossain
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .animate-messageSlide {
          animation: messageSlide 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Safe area for mobile devices */
        @supports (padding: max(0px)) {
          .safe-area-bottom {
            padding-bottom: max(1rem, env(safe-area-inset-bottom));
          }
        }
      `}</style>
    </>
  );
}