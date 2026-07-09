import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Brain,
  Star,
  Layers,
  ChevronRight,
  Users,
  CheckCircle2
} from 'lucide-react';
import { PageType } from '../types';
import { TESTIMONIALS } from '../data';
import ChatbotWorkspace from './ChatbotWorkspace';

interface HomeViewProps {
  setActivePage: (page: PageType) => void;
  onBookDemo: () => void;
}

export default function HomeView({ setActivePage, onBookDemo }: HomeViewProps) {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-10 lg:pt-16 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-semibold tracking-wider uppercase font-mono animate-fade-in shadow-inner">
              <Sparkles className="w-3.5 h-3.5" /> SOC-2 Certified SME Knowledge Partner
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Capture, Organize, & Retrieve <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Company Knowledge Instantly
              </span>
            </h1>

            {/* Pitch Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              SkillTrain AI transforms scattered SOPs, employee handbooks, policies, and FAQs into a secure, conversational expert. Empower your staff to get instant, 100% accurate, cited answers—slashing onboarding times and avoiding costly knowledge loss.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setActivePage('pricing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white font-bold transition-all shadow-lg shadow-teal-500/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-sm"
              >
                Start 14-Day Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  const el = document.getElementById('interactive-demo');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all cursor-pointer text-sm"
              >
                Interact with Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-slate-500 font-semibold text-xs uppercase tracking-wider font-mono">
              <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-teal-400" /> 100% Zero-Hallucination Guard</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1"><Layers className="w-4 h-4 text-teal-400" /> Works on Slack, Teams & Web</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4 text-teal-400" /> HIPAA & GDPR Compliant Security</span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key SME Operational Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1 bg-slate-950 border border-slate-900 rounded-2xl">
          
          <div className="p-6 text-center border-r border-slate-900 last:border-0">
            <span className="text-3xl lg:text-4xl font-extrabold text-teal-400 block font-mono">62%</span>
            <span className="text-xs font-semibold text-slate-400 mt-1.5 block">Faster Employee Onboarding</span>
            <span className="text-[10px] text-slate-600 mt-1 block">Staff reach full productivity in 14 days</span>
          </div>

          <div className="p-6 text-center border-r border-slate-900 last:border-0">
            <span className="text-3xl lg:text-4xl font-extrabold text-teal-400 block font-mono">2.5 hrs</span>
            <span className="text-xs font-semibold text-slate-400 mt-1.5 block">Saved Daily Per Senior Manager</span>
            <span className="text-[10px] text-slate-600 mt-1 block">Zero repetitive policy-lookup handovers</span>
          </div>

          <div className="p-6 text-center border-r border-slate-900 last:border-0">
            <span className="text-3xl lg:text-4xl font-extrabold text-teal-400 block font-mono">74%</span>
            <span className="text-xs font-semibold text-slate-400 mt-1.5 block">Fewer Manager Escalations</span>
            <span className="text-[10px] text-slate-600 mt-1 block">Team solves refund & shift questions instantly</span>
          </div>

          <div className="p-6 text-center last:border-0">
            <span className="text-3xl lg:text-4xl font-extrabold text-teal-400 block font-mono">100%</span>
            <span className="text-xs font-semibold text-slate-400 mt-1.5 block">Knowledge Preservation</span>
            <span className="text-[10px] text-slate-600 mt-1 block">Operational memory stays when employees leave</span>
          </div>

        </div>
      </section>

      {/* 3. Flagship Interactive Chatbot Demo Workspace */}
      <section id="interactive-demo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Experience SkillTrain AI
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Test the live simulator below. Select any of the pre-loaded SME documents on the left, click a quick simulated question, or draft your own. Observe how every statement is bound to a verified secure citation.
          </p>
        </div>

        <ChatbotWorkspace />
      </section>

      {/* 4. Core SaaS SME Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">Why Synergy?</span>
            <h2 className="text-3xl font-extrabold text-white mt-2">Why SMEs Choose SkillTrain AI to Anchor Operational Success</h2>
          </div>
          <button
            onClick={() => {
              setActivePage('solution');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 group transition-colors"
          >
            Explore our end-to-end solution <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-2xl bg-slate-950/60 border border-slate-900/80 hover:border-slate-800 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Accelerated Onboarding</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              New employees ask the chatbot: "What are the checkout SOP steps?" or "Who is our IT contact?" and receive instant answers with references, freeing senior staff from repetitive training cycles.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-400 font-semibold">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Slashes speed-to-autonomy by 18 days</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Standardized guidelines for all cohorts</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-slate-950/60 border border-slate-900/80 hover:border-slate-800 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Improved Day-to-Day Productivity</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              frontline operators, warehouse dispatchers, and creative designers resolve immediate queries (like return exceptions, machinery settings, or file setups) in seconds without waiting for manager responses.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-400 font-semibold">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Slashed email/Slack query volume by 65%</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Boosts floor operations accuracy</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-slate-950/60 border border-slate-900/80 hover:border-slate-800 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Permanent Knowledge Lock</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              When a senior employee leaves, their operational habits and experience are already captured in custom SOPs. SkillTrain ensures zero knowledge leak and maintains consistent information sharing across teams.
            </p>
            <ul className="space-y-2 pt-2 text-xs text-slate-400 font-semibold">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Safeguards proprietary processes permanently</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Single Source of Truth database</li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. Investor/Client Trust Section (Testimonials) */}
      <section className="bg-slate-950/40 border-y border-slate-900/60 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">Validated Performance</span>
            <h2 className="text-3xl font-extrabold text-white">How SME Business Leaders Leverage SkillTrain AI Daily</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-7 rounded-2xl bg-slate-950 border border-slate-900/80 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                  <div>
                    <p className="text-xs text-teal-400 font-bold tracking-wide uppercase font-mono">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Conversion CTA Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 relative overflow-hidden text-center max-w-5xl mx-auto space-y-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Stop letting scattered documents slow your SME growth.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Get your company trained in 10 minutes. Upload your SOPs, configure your roles, and deploy a secure AI mentor that answers employee questions instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setActivePage('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white font-bold transition-all text-xs"
            >
              Start Free Trial (No Card Needed)
            </button>
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 transition-all text-xs"
            >
              Book Corporate Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
