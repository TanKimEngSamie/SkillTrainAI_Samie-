import React, { useState } from 'react';
import {
  Briefcase,
  Truck,
  ShoppingBag,
  Stethoscope,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  FileText
} from 'lucide-react';
import { INDUSTRIES } from '../data';

export default function IndustriesView() {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);

  const getIcon = (name: string, sizeClass = "w-5 h-5") => {
    switch (name) {
      case 'Briefcase': return <Briefcase className={sizeClass} />;
      case 'Truck': return <Truck className={sizeClass} />;
      case 'ShoppingBag': return <ShoppingBag className={sizeClass} />;
      case 'Stethoscope': return <Stethoscope className={sizeClass} />;
      default: return <Briefcase className={sizeClass} />;
    }
  };

  const activeData = INDUSTRIES.find((ind) => ind.id === activeTab) || INDUSTRIES[0];

  // Tailored recommended documents to upload for each industry
  const recommendedDocsMap: Record<string, string[]> = {
    'ind-1': [
      'Client Onboarding & Project Deliverables SOP.pdf',
      'Timesheet Submission & Monthly Billing Matrix.docx',
      'Agency Brand Voice Guidelines & Style Guide.pdf',
      'Figma Folder File-Structure Standards.docx',
    ],
    'ind-2': [
      'ISO 9001 Factory Quality Control Checklist.pdf',
      'Warehouse Shift Handover & Safety Protocol.docx',
      'Heavy Equipment Maintenance Schedule FAQs.xlsx',
      'Hazardous Material Handling & SDS Procedures.pdf',
    ],
    'ind-3': [
      'Cash Register Opening/Closing Cashout SOP.pdf',
      'Customer Returns, Gift Card & Refund Policy.pdf',
      'Hygiene, Sanitization & Prep-Station Guidelines.docx',
      'Shift Swap & Overtime Submission Protocols.docx',
    ],
    'ind-4': [
      'Patient HIPAA Privacy Compliance Handbook.pdf',
      'Medical Clinic Intake & Check-in Procedures.docx',
      'Insurance Co-pay Verification FAQ Matrix.xlsx',
      'Clinical Waste Disposal & Sanitation Manual.pdf',
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">VERTICAL SECTORS</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          SME Target Use Cases Tailored to Your Specific Industry
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          From machinery checklists to customer returns, SkillTrain AI adapts to the nomenclature and unique rules of your vertical.
        </p>
      </div>

      {/* 2. Interactive Industry Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Navigation Tabs */}
        <div className="lg:col-span-4 space-y-2.5">
          {INDUSTRIES.map((ind) => {
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`w-full text-left p-4.5 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-teal-500 text-teal-400 shadow-lg shadow-teal-500/5'
                    : 'bg-slate-950 border-slate-900 hover:border-slate-800 text-slate-300'
                }`}
              >
                <div className={`p-2 rounded-xl ${isActive ? 'bg-teal-500/10 text-teal-400' : 'bg-slate-900 text-slate-400'}`}>
                  {getIcon(ind.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider block font-mono">INDUSTRY</h3>
                  <p className="text-xs font-bold text-white truncate mt-0.5">{ind.industry.split(' & ')[0]}</p>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0.5 text-teal-400' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Side: Tab Details Card */}
        <div className="lg:col-span-8 bg-slate-950 border border-slate-900 rounded-3xl p-6.5 lg:p-9 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Header Data */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400">
              {getIcon(activeData.iconName, "w-6 h-6")}
            </div>
            <div>
              <span className="text-[10px] text-teal-400 font-bold uppercase tracking-widest font-mono">SECTOR HIGHLIGHT</span>
              <h2 className="text-xl font-extrabold text-white sm:text-2xl mt-0.5">{activeData.industry}</h2>
            </div>
          </div>

          {/* Breakdown: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2 bg-slate-900/40 border border-slate-900 p-5 rounded-2xl">
              <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider font-mono flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> COMMON BOTTLENECK:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                {activeData.challenge}
              </p>
            </div>

            <div className="space-y-2 bg-slate-900/40 border border-slate-900 p-5 rounded-2xl">
              <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider font-mono flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> THE SYNERGY SOLUTION:
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                {activeData.solution}
              </p>
            </div>
          </div>

          {/* Real SME Performance Metrics */}
          <div className="p-5.5 bg-gradient-to-r from-teal-950/20 to-cyan-950/20 border border-teal-500/10 rounded-2xl space-y-2">
            <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider font-mono flex items-center gap-1">
              <TrendingUp className="w-4 h-4" /> IMPACT MATRIX:
            </span>
            <p className="text-xs text-slate-200 leading-relaxed font-bold">
              {activeData.impact}
            </p>
          </div>

          {/* Recommended Files Checklist */}
          <div className="space-y-3.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono text-slate-500">
              RECOMMENDED DOCUMENTS TO INGEST:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(recommendedDocsMap[activeData.id] || []).map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900/30 border border-slate-900 rounded-xl">
                  <FileText className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-[11px] text-slate-300 font-mono truncate font-semibold">{doc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
