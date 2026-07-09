import React from 'react';
import {
  UploadCloud,
  Cpu,
  ShieldAlert,
  Send,
  CheckCircle,
  Slack,
  MessageSquare,
  Globe
} from 'lucide-react';

export default function HowItWorksView() {
  const steps = [
    {
      phase: 'Phase 01',
      title: 'Upload SOPs & Guidelines',
      desc: 'Simply drag & drop files (PDF, Word, Excel, Notion links) directly into your secure workspace dashboard. We support high-speed parsing of multi-page manuals.',
      icon: UploadCloud,
      bullets: [
        'Recognizes formatting, tables, and lists',
        'Auto-identifies outdated document drafts',
        'Supported file size up to 50MB per file',
      ],
    },
    {
      phase: 'Phase 02',
      title: 'Automatic Parsing & Mapping',
      desc: 'Our semantic AI chunking model reads, context-maps, and indexes every word. It builds custom glossary keys to align with industry-specific abbreviations.',
      icon: Cpu,
      bullets: [
        'Secure Retrieval-Augmented vector mapping',
        'Resolves nested operational abbreviations',
        '100% cloud isolation guarantees',
      ],
    },
    {
      phase: 'Phase 03',
      title: 'Apply Department Access Rules',
      desc: 'Assign specific document folders to authorized employee roles. Keep payroll, proprietary operations, or specialist codes secure from unauthorized search.',
      icon: ShieldAlert,
      bullets: [
        'Strict Role-Based Access Control (RBAC)',
        'Active Directory or custom password links',
        'Encapsulated user data segments',
      ],
    },
    {
      phase: 'Phase 04',
      title: 'Link to Chat Channels',
      desc: 'Deploy the chatbot directly into Slack, MS Teams, or embed a beautiful interactive widget on your internal staff intranet portals.',
      icon: Send,
      bullets: [
        'One-click official Slack App installation',
        'Standard HTML web widget snippet',
        'Provides real-time citations on mobile',
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">INTEGRATION WORKFLOW</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Launch Your Custom SME Knowledge Brain in Under 10 Minutes
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          No coding required. SkillTrain AI was engineered for non-technical operations managers, HR leads, and founders to bootstrap sovereign AI safely.
        </p>
      </div>

      {/* 2. Visual Vertical Timeline */}
      <div className="space-y-16 relative">
        {/* Center Line for desktop */}
        <div className="absolute left-6 lg:left-1/2 top-10 bottom-10 w-0.5 bg-slate-900/80 -translate-x-1/2 hidden md:block" />

        {steps.map((st, idx) => {
          const Icon = st.icon;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row gap-8 items-start relative ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot Icon */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-teal-400 z-10 shadow-lg">
                <Icon className="w-5 h-5" />
              </div>

              {/* Content Panel */}
              <div className="md:w-1/2 pl-14 md:pl-0 md:px-8 space-y-4">
                <span className="text-xs font-bold text-teal-400 font-mono block tracking-wider uppercase">
                  {st.phase}
                </span>
                
                <h3 className="text-xl font-bold text-white">
                  {st.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {st.desc}
                </p>

                {/* Bullet List */}
                <div className="space-y-2 pt-2">
                  {st.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Empty placeholder panel to balance desktop layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>

      {/* 3. Integration Ecosystem Banner */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-900 text-center space-y-6">
        <h3 className="text-lg font-bold text-white">Seamlessly Linked Into Your Current Workspace</h3>
        <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
          SkillTrain AI integrates right inside the applications your staff already use, preventing training tool fatigue and maximizing adoption.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 pt-2">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl">
            <Slack className="w-5 h-5 text-[#4A154B]" />
            <span className="text-xs text-white font-bold">Slack Application</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl">
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-white font-bold">Microsoft Teams Bot</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl">
            <Globe className="w-5 h-5 text-teal-400" />
            <span className="text-xs text-white font-bold">Embeddable Web Widget</span>
          </div>
        </div>
      </div>

    </div>
  );
}
