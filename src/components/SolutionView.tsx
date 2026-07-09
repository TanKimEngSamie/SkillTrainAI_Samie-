import React from 'react';
import {
  FileWarning,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Workflow,
  Search,
  MessageSquare
} from 'lucide-react';

export default function SolutionView() {
  const problemPoints = [
    {
      title: 'Drowning in Scattered Formats',
      desc: 'Important guidelines are trapped in random Google Docs, printed PDF manuals on floor desks, or outdated Notion channels.',
    },
    {
      title: 'Slow Onboarding & Trainer Fatigue',
      desc: 'When new employees join the company, they take an excessively long time to become familiar with policies, structures, and workflows. Meanwhile, senior staff lose 1-2 hours daily repeating basic instructions (like return processing or guidelines) to new recruits.',
    },
    {
      title: 'Catastrophic Knowledge Leakage',
      desc: 'When key operational supervisors leave or shift, their unique troubleshooting habits go with them, leaving the team to learn by error.',
    },
  ];

  const solutionPoints = [
    {
      title: 'Unified Corporate Brain',
      desc: 'SkillTrain AI consolidates all your company assets into a single secure AI-powered repository searchable in milliseconds.',
    },
    {
      title: 'Immediate Onboard-to-Shift Autonomy',
      desc: 'Onboard trainees in half the time by giving them a personal operations coach that holds the entire company guidelines.',
    },
    {
      title: 'Zero-Hallucination Verified CITATIONS',
      desc: 'Unlike generic chatbots, every single answer states the exact file and page number as verification—guaranteeing compliance.',
    },
    {
      title: 'Controlled Knowledge Governance',
      desc: 'Only company heads have the authority to add, edit, and remove files or databases, ensuring strict control of source truth. Employees simply prompt the AI assistant to instantly fetch accurate guidelines.',
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Authorized Document Ingestion',
      desc: 'Company heads drag and drop standard PDFs, DOCX, spreadsheets, or link Notion pages to manage verified operational standards.',
      icon: FileText,
    },
    {
      step: '02',
      title: 'Semantic Vectorization',
      desc: 'SkillTrain AI chunks and organizes the text into a private vector graph map, recognizing company-specific glossary terms.',
      icon: Workflow,
    },
    {
      step: '03',
      title: 'Conversational Employee Querying',
      desc: 'Employees and trainees simply prompt and ask the chatbot questions via Slack, Web, or Teams, avoiding trainer overload.',
      icon: Search,
    },
    {
      step: '04',
      title: 'Secure Cited Dispatch',
      desc: 'The bot answers step-by-step, appending exact source verifications so staff can trust the protocols 100%.',
      icon: MessageSquare,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
      
      {/* 1. Intro Pitch */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">THE SME CHALLENGE</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          How Synergy SkillTrain AI Secures Your SME’s Operational Edge
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          SMEs spend critical funds writing operational guidelines, but struggle to keep them accessible. SkillTrain AI bridges this gap, making your handbooks instantly searchable and highly actionable.
        </p>
      </div>

      {/* 2. Before vs After Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Before Layer */}
        <div className="p-8 rounded-3xl bg-slate-950/60 border border-red-500/10 space-y-6 relative">
          <div className="absolute top-4 right-4 text-[10px] bg-red-500/10 text-red-400 font-bold px-2 py-0.5 rounded-full font-mono">
            THE BOTTLENECK
          </div>
          
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FileWarning className="w-5 h-5 text-red-400 shrink-0" />
            Traditional SME Knowledge Chase
          </h2>

          <div className="space-y-4.5 pt-2">
            {problemPoints.map((p, idx) => (
              <div key={idx} className="space-y-1 pl-4 border-l-2 border-red-500/20">
                <h3 className="text-sm font-bold text-slate-200">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After Layer */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 border border-teal-500/10 space-y-6 relative">
          <div className="absolute top-4 right-4 text-[10px] bg-teal-500/10 text-teal-400 font-bold px-2 py-0.5 rounded-full font-mono">
            THE REMEDY
          </div>

          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-400 shrink-0" />
            With Synergy SkillTrain AI
          </h2>

          <div className="space-y-4.5 pt-2">
            {solutionPoints.map((s, idx) => (
              <div key={idx} className="space-y-1 pl-4 border-l-2 border-teal-500/30">
                <h3 className="text-sm font-bold text-teal-400">{s.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. The RAG Ingestion Pipeline Visual Flow */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs text-teal-400 font-bold uppercase tracking-wider font-mono">HOW IT WORKS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Zero-Hallucination Pipeline</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Understand how our secure chatbot engine processes query validation with exact citations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950/60 border border-slate-900/80 space-y-4 relative hover:border-slate-800 transition-all">
                <div className="text-3xl font-black text-slate-800 font-mono absolute top-4 right-6">
                  {st.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{st.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
