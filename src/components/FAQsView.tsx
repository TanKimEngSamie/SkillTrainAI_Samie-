import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'security' | 'integration' | 'pricing'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1'); // Default open first item

  const categories: { label: string; value: typeof activeCategory }[] = [
    { label: 'All Inquiries', value: 'all' },
    { label: 'AI & Ingestion', value: 'general' },
    { label: 'Security & Privacy', value: 'security' },
    { label: 'Slack & Links', value: 'integration' },
    { label: 'Pricing & Trial', value: 'pricing' },
  ];

  // Filtering logic
  const filteredFAQs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* 1. Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">SUPPORT KNOWLEDGE</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Frequently Answered Inquiries
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Need details regarding technical deployment, compliance boundaries, or credit terms? Search or select our category tags below.
        </p>
      </div>

      {/* 2. Search & Categories Panel */}
      <div className="space-y-6 bg-slate-950 border border-slate-900 rounded-3xl p-6 shadow-xl">
        {/* Live Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs by keywords (e.g. security, refund, formats, credit...)"
            className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-500 outline-none pl-12"
          />
          <Search className="w-5 h-5 text-slate-500 absolute left-4.5 top-4.5" />
        </div>

        {/* Dynamic Category Chips */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-900/60 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-teal-500/10 border-teal-500 text-teal-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Accordion List */}
      <div className="space-y-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded ? 'bg-slate-900 border-slate-800' : 'bg-slate-950/60 border-slate-900/80 hover:border-slate-800'
                }`}
              >
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer outline-none"
                >
                  <span className="text-sm font-bold text-white sm:text-base pr-2 leading-relaxed">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 text-slate-400 transition-colors ${isExpanded ? 'text-teal-400 border-teal-500/20' : ''}`}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900/80 pt-4 font-sans animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-slate-950 border border-slate-900 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-white font-bold text-sm">No Matching FAQs Found</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              We couldn’t find an answer to your exact search. Try using our interactive chatbot on the Home page to test operational documents!
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
