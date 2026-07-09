import React, { useState, useRef, useEffect } from 'react';
import {
  UploadCloud,
  FileText,
  CheckCircle,
  MessageSquare,
  Send,
  Lock,
  Sparkles,
  Cpu,
  Search,
  Check,
  AlertCircle,
  BookOpen
} from 'lucide-react';
import { MOCK_SOURCES, MOCK_CHATS_QA } from '../data';
import { DocumentSource, ChatMessage } from '../types';

export default function ChatbotWorkspace() {
  const [sources, setSources] = useState<DocumentSource[]>(MOCK_SOURCES);
  const [chats, setChats] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: 'Hello! I am **SkillTrain AI**, your virtual operations assistant. I am currently trained on your company’s custom documents. Ask me anything about standard operating procedures, HR guidelines, expenses, or tech configurations!',
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [activeSources, setActiveSources] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Suggested quick questions
  const SUGGESTED_QS = [
    'What is our refund policy for opened goods?',
    'How do I submit sick leave?',
    'Maximum daily reimbursement for business trip meals?',
    'What is the staff Wi-Fi password?',
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chats, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChats((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    setConfidence(null);
    setActiveSources([]);

    // Find response
    const query = textToSend.toLowerCase();
    const match = MOCK_CHATS_QA.find((qa) =>
      qa.triggerKeywords.some((keyword) => query.includes(keyword))
    );

    setTimeout(() => {
      setIsTyping(false);
      if (match) {
        setConfidence(match.confidence);
        setActiveSources(match.sources);
        const botMsg: ChatMessage = {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: match.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sources: match.sources,
          confidence: match.confidence,
        };
        setChats((prev) => [...prev, botMsg]);
      } else {
        // Safe, non-hallucinating generic response
        const fallbackText = `I analyzed the ${sources.length} active documents, but did not find any specific, verified SOP or policy matching your request. \n\nUnder Synergy's ethical AI safety guidelines, **I do not hallucinate or make up custom answers.** \n\n*Would you like me to flag this as a "Knowledge Gap" for your operations manager so they can draft a new policy, or would you like to rephrase your query?*`;
        setConfidence(0);
        const botMsg: ChatMessage = {
          id: `b-${Date.now()}`,
          sender: 'bot',
          text: fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sources: [],
          confidence: 0,
        };
        setChats((prev) => [...prev, botMsg]);
      }
    }, 1200);
  };

  // Drag and Drop simulation
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      simulateUpload(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      simulateUpload(e.target.files[0].name);
    }
  };

  const simulateUpload = (fileName: string) => {
    setIsUploading(true);
    setTimeout(() => {
      const newSource: DocumentSource = {
        id: `src-${Date.now()}`,
        name: fileName.endsWith('.pdf') || fileName.endsWith('.docx') ? fileName : `${fileName}.pdf`,
        type: fileName.includes('handbook') ? 'handbook' : 'sop',
        contentCount: 'Custom Upload (1,200 words)',
        lastUpdated: 'Trained just now',
      };
      setSources((prev) => [newSource, ...prev]);
      setIsUploading(false);

      // Notify in chat
      setChats((prev) => [
        ...prev,
        {
          id: `sys-${Date.now()}`,
          sender: 'bot',
          text: `🎉 **Successfully ingested and trained on "${newSource.name}"!** You can now instantly query its details. Try asking relevant operational questions.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1800);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(30,58,138,0.15)] grid grid-cols-1 lg:grid-cols-12 h-[680px]">
      
      {/* LEFT: Document Ingestion Console */}
      <div className="lg:col-span-5 bg-slate-50 border-r border-slate-200 p-6 flex flex-col justify-between h-full overflow-y-auto">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="p-1.5 rounded-lg bg-teal-50 text-teal-600 border border-teal-100 shrink-0">
              <Cpu className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-extrabold text-blue-900 text-base leading-tight">Knowledge Control Console</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Manage trained sources & RBAC safety</p>
            </div>
          </div>

          <p className="text-xs text-slate-600 mb-5 leading-relaxed">
            Drag and drop your SME’s standard documents. SkillTrain AI parses, extracts, and encapsulates the knowledge silo in seconds.
          </p>

          {/* Drag & Drop Box */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer mb-6 ${
              dragOver
                ? 'border-teal-500 bg-teal-50/50'
                : 'border-slate-200 hover:border-slate-300 bg-white shadow-sm'
            }`}
          >
            <input
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.docx,.doc,.txt,.xlsx"
            />
            <label htmlFor="file-input" className="cursor-pointer block">
              <UploadCloud className={`w-10 h-10 mx-auto mb-2 transition-colors ${dragOver ? 'text-teal-600 animate-bounce' : 'text-slate-400'}`} />
              <span className="text-sm font-bold text-slate-800 block">
                {isUploading ? 'Ingesting & Indexing...' : 'Upload SOP or Handbook'}
              </span>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Supports PDF, DOCX, XLSX (Max 50MB)
              </span>
            </label>
          </div>

          {/* Ingested List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-1">
              <span>Active Sources ({sources.length})</span>
              <span className="flex items-center gap-1 text-teal-600 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full text-[10px]">
                <Check className="w-3.5 h-3.5" /> SECURED
              </span>
            </div>

            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
              {sources.map((src) => (
                <div
                  key={src.id}
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all flex items-start gap-3"
                >
                  <FileText className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-800 truncate">{src.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded-md font-mono capitalize">
                        {src.type}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold font-mono">
                        {src.contentCount}
                      </span>
                    </div>
                  </div>
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Guard */}
        <div className="pt-4 border-t border-slate-200 flex items-center gap-2.5 text-xs text-slate-500 font-medium">
          <Lock className="w-4 h-4 text-teal-600 shrink-0" />
          <span>AES-256 Encrypted & Isolated Cloud Storage</span>
        </div>
      </div>

      {/* RIGHT: Live Interactive Chatbot */}
      <div className="lg:col-span-7 flex flex-col justify-between h-full bg-white">
        
        {/* Chat Header */}
        <div className="px-6 py-4 bg-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <img
                src="/images/SkillTrainAI_Logo.png"
                alt="SkillTrain AI Logo"
                className="w-10 h-10 rounded-lg shadow-md object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-teal-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm text-slate-900">SkillTrain Intelligence</span>
                <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 font-bold px-1.5 py-0.5 rounded-full">SME v2.4</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Continuous Training active</p>
            </div>
          </div>

          {/* RAG Verification Widget */}
          {confidence !== null && (
            <div className="text-right hidden sm:block">
              <span className="text-[10px] text-slate-400 block font-mono font-bold">ACCURACY ALIGNMENT</span>
              <div className="flex items-center gap-1.5 justify-end">
                <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all duration-500"
                    style={{ width: `${confidence}%` }}
                  ></div>
                </div>
                <span className="text-xs font-mono font-bold text-teal-600">{confidence}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Scrollable Conversation Workspace */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chats.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 max-w-[85%] ${
                msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
              }`}
            >
              {/* Avatar */}
              {msg.sender === 'user' ? (
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs bg-slate-200 text-slate-700 border border-slate-300">
                  U
                </div>
              ) : (
                <img
                  src="/images/SkillTrainAI_Logo.png"
                  alt="SkillTrain AI"
                  className="w-8 h-8 rounded-lg shadow-sm object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
              )}

              {/* Message Bubble */}
              <div className="space-y-2">
                <div
                  className={`p-4.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-50 text-blue-900 rounded-tr-none border border-blue-100/80 font-medium'
                      : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">
                    {msg.text.split('\n\n').map((paragraph, idx) => {
                      // Simple bold markup replacement for safety
                      const textWithBold = paragraph.split('**').map((chunk, cIdx) => {
                        return cIdx % 2 === 1 ? <strong key={cIdx} className="text-blue-900 font-bold">{chunk}</strong> : chunk;
                      });
                      return (
                        <span key={idx} className="block mb-2 last:mb-0">
                          {textWithBold}
                        </span>
                      );
                    })}
                  </p>
                </div>

                {/* Sources Citation block */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-1.5 ml-1 shadow-sm">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1 font-mono">
                      <BookOpen className="w-3 h-3 text-teal-600" /> SECURE CITATIONS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.sources.map((source, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-white border border-slate-200 text-slate-600 font-mono px-2 py-0.5 rounded-md flex items-center gap-1"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-3 max-w-[85%]">
              <img
                src="/images/SkillTrainAI_Logo.png"
                alt="SkillTrain AI"
                className="w-8 h-8 rounded-lg shadow-sm object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white text-slate-400 border border-slate-200 rounded-2xl rounded-tl-none shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggestion Quick Chips */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2 font-mono">
            SUGGESTED CLIENT SIMULATIONS:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {SUGGESTED_QS.map((q, qIdx) => (
              <button
                key={qIdx}
                onClick={() => handleSendMessage(q)}
                className="text-xs bg-white border border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-500/50 hover:bg-blue-50/40 px-3 py-1.5 rounded-full text-left transition-all truncate max-w-xs cursor-pointer shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Send Input Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              placeholder="Ask a custom policy query (e.g. return items, sick leave, wifi...)"
              className="w-full bg-white border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none pr-10 shadow-inner"
            />
            <Sparkles className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5" />
          </div>
          <button
            onClick={() => handleSendMessage(inputText)}
            className="p-3 rounded-xl bg-gradient-to-br from-blue-700 to-teal-600 text-white font-semibold flex items-center justify-center transition-all shadow-md shadow-blue-700/20 active:scale-95 cursor-pointer"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
