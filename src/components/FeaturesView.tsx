import React from 'react';
import {
  ShieldCheck,
  FileDown,
  UserPlus,
  Lock,
  RefreshCw,
  Zap,
  Cpu,
  Layers,
  Terminal,
  Activity
} from 'lucide-react';
import { FEATURES } from '../data';

export default function FeaturesView() {
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-400" />;
      case 'FileDown': return <FileDown className="w-6 h-6 text-teal-400" />;
      case 'UserPlus': return <UserPlus className="w-6 h-6 text-teal-400" />;
      case 'Lock': return <Lock className="w-6 h-6 text-teal-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-teal-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-teal-400" />;
      default: return <Cpu className="w-6 h-6 text-teal-400" />;
    }
  };

  const techSpecs = [
    { label: 'Security & Encryption', value: 'TLS 1.3 transit, AES-256 rest, isolated cloud container nodes' },
    { label: 'Ingestion Engine', value: 'High-fidelity layout OCR parsing, recognizing nested spreadsheets & lists' },
    { label: 'Retrieval Strategy', value: 'Hybrid Dense-Sparse (Vector + BM25 keyword matching) context RAG' },
    { label: 'Deployment Options', value: 'Secure web embed, Slack APP installation, MS Teams bot gateway' },
    { label: 'Access Control', value: 'Role-Based Access Control (RBAC) with Active Directory sync' },
    { label: 'Query Latency', value: 'Average ~850ms response formulation and validation cycle' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">PRODUCT MATRIX</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Precision Capabilities for High-Efficiency Workforces
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          SkillTrain AI is built to turn flat, unread files into highly responsive company knowledge, securing your business with strict permissions and compliance filters.
        </p>
      </div>

      {/* 2. Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feat) => (
          <div
            key={feat.id}
            className="p-8 rounded-2xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 transition-all space-y-4 relative group"
          >
            {feat.badge && (
              <span className="absolute top-4 right-6 text-[9px] bg-teal-500/10 text-teal-400 font-bold px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
                {feat.badge}
              </span>
            )}
            
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
              {getIcon(feat.iconName)}
            </div>
            
            <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">
              {feat.title}
            </h3>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Tech Specs Table */}
      <div className="bg-slate-950 border border-slate-900 rounded-3xl p-8 lg:p-10 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-900 pb-6">
          <div className="space-y-1">
            <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Terminal className="w-4 h-4" /> COMPLIANCE SPEC SHEET:
            </span>
            <h2 className="text-xl font-bold text-white">SME Operational Security Parameters</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono font-bold bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
            <Activity className="w-3.5 h-3.5 text-teal-400 animate-pulse" /> ALL SYSTEMS COMPLIANT
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {techSpecs.map((spec, sIdx) => (
            <div key={sIdx} className="space-y-1.5 border-b border-slate-900/60 pb-4 last:border-0 md:border-b">
              <span className="text-xs font-bold text-slate-200 block font-sans">{spec.label}</span>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
