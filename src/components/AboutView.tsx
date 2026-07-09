import React from 'react';
import { ShieldAlert, BookOpen, Users2, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function AboutView() {
  const principles = [
    {
      title: 'Custom AI Trained on Documents',
      desc: 'We guarantee that SME corporate documents are strictly isolated. We do not use client documents to train external or public foundation models.',
      icon: ShieldAlert,
    },
    {
      title: 'Single Source of Truth',
      desc: 'We enforce retrieval-only generation bound by verified citations. If a fact is not in your documents, our bot will never fabricate an answer.',
      icon: BookOpen,
    },
    {
      title: 'Democratizing SME Intellect',
      desc: 'Enterprise-grade search technology should not only belong to Fortune 500s. We design highly affordable, zero-code pipelines for growing squads.',
      icon: Users2,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      
      {/* 1. Header Pitch */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">OUR MISSION</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Sovereign Corporate Intelligence for the Mid-Market
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          At Synergy, we believe that an SME’s operations reside in its standards. When knowledge is lost through team turnover or scattered folders, business growth stalls. SkillTrain AI was built to solve the knowledge bottleneck permanently.
        </p>
      </div>

      {/* 2. Brand Story / Bento Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-slate-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono">OUR STORY</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Born out of Operational Bottlenecks
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            SkillTrain AI was born from a simple observation: SMEs waste countless hours searching for information that already exists within their organization. Employees repeatedly ask the same questions, senior staff spend valuable time answering instead of leading, and precious institutional knowledge walks out the door when people leave.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            In 2026, our team leaders set out to solve this problem. Drawing on their backgrounds in AI research and enterprise software, they built SkillTrain AI: an intelligent system that captures, organizes, and retrieves company knowledge instantly.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Today, we are proud to serve SMEs across Singapore and are expanding globally, helping them save time, improve productivity, and preserve their most valuable asset—their knowledge.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="text-xs text-slate-300 font-semibold">ISO-27001 Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="text-xs text-slate-300 font-semibold">100% Secure Document AI</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <h3 className="font-bold text-white text-sm uppercase tracking-wider font-mono text-teal-400 border-b border-slate-800 pb-2">
            CORPORATE HIGHLIGHTS
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Eye className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">Full Transparency Policy</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">We audit and disclose how model inferences are generated directly via detailed log consoles.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Award className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">SME First pricing</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">No astronomical setup fees, no consultants needed. Empowering standard operation teams directly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Principles Grid */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white">Our Three Core AI Safety Principles</h2>
          <p className="text-xs text-slate-400">Strictly enforced across every product layer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div key={idx} className="p-6.5 rounded-2xl bg-slate-950/40 border border-slate-900/60 text-center space-y-4 hover:border-slate-800 transition-all">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mx-auto">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Meet Our Team Section */}
      <div className="space-y-12 pt-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">OUR VISIONARIES</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Meet Our Team</h2>
          <p className="text-sm text-slate-400">
            Passionate experts dedicated to revolutionising knowledge management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              name: 'Reashnaa',
              role: 'Solution Lead',
              desc: 'Oversees project delivery, develops the Botpress chatbot, designs conversation flows, and integrates AI features.',
              image: '/images/Reashnaa_pic.jpg'
            },
            {
              name: 'Samie',
              role: 'Data Lead',
              desc: 'Conducts research, curates knowledge resources, prepares FAQs, and builds the chatbot knowledge base.',
              image: '/images/Samie_pic.jpg'
            },
            {
              name: 'Ghim',
              role: 'Media Lead',
              desc: 'Designs visual assets, presentation materials, promotional content, and video edits.',
              image: '/images/Ghim_pic.jpg'
            },
            {
              name: 'Pearly',
              role: 'Communications Lead',
              desc: 'Develops presentation content, support documentation, drafts chatbot content, and manages team communications.',
              image: '/images/Pearly_pic.jpg'
            },
            {
              name: 'Shaqir',
              role: 'QA & Testing Lead',
              desc: 'Performs chatbot testing, identifies issues, validates fixes, and ensures usability and quality.',
              image: '/images/Shaqir_pic.jpg'
            }
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 flex flex-col hover:scale-[1.03] transition-transform duration-300"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 text-center flex-1 flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base tracking-tight">{member.name}</h4>
                  <p className="text-[11px] font-bold text-sky-600 tracking-wider uppercase">{member.role}</p>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed flex-1 flex items-center justify-center">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
