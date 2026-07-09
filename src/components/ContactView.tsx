import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Building,
  Calendar,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    staffSize: '50-199',
    docTypes: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;
    setSubmitted(true);
  };

  const offices = [
    { country: 'Singapore (HQ)', address: 'Republic Polytechnic, 9 Woodlands Ave 9, Singapore 738964', phone: '+65 6789 2100' },
    { country: 'London Office', address: '85 Great Portland Street, London, W1W 7LT', phone: '+44 20 7946 0958' },
    { country: 'Sydney Office', address: 'Level 3, 100 George St, Sydney NSW 2000', phone: '+61 2 9876 5432' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* 1. Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">CONNECT SESSIONS</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Request Your Custom AI Chatbot Demo
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Provide your corporate details below. Our engineering leads will customize a secure AI chatbot trained specifically on your real company documents for you to test.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Form Container */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-900 rounded-3xl p-6.5 sm:p-9 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-sans block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sarah Jenkins"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-sans block">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sjenkins@apex-logistics.com"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-sans block">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Apex Logistics"
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 font-sans block">SME Team Staff Size</label>
                  <select
                    value={formData.staffSize}
                    onChange={(e) => setFormData({ ...formData, staffSize: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3.5 text-xs text-white outline-none"
                  >
                    <option value="1-49">Under 50 employees</option>
                    <option value="50-199">50 - 199 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 font-sans block">What documents would you like to ingest first?</label>
                <input
                  type="text"
                  value={formData.docTypes}
                  onChange={(e) => setFormData({ ...formData, docTypes: e.target.value })}
                  placeholder="e.g. Employee Handbook, Dispatch SOP, Hygiene FAQs..."
                  className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-600 outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 font-sans block">Additional Notes or Custom Integration Requirements</label>
                <textarea
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  rows={4}
                  placeholder="Tell us about your active workflows (e.g. we use Slack/Notion, require HIPAA controls...)"
                  className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white text-xs font-bold transition-all shadow-md hover:shadow-teal-500/15 cursor-pointer pt-4"
              >
                Request Custom AI Chatbot Setup <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            // HIGH FIDELITY MOCK CLIENT SUCCESS DASHBOARD UPON SUBMISSION
            <div className="space-y-6 relative animate-in fade-in duration-300">
              <div className="flex items-center gap-3 border-b border-slate-900 pb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-base text-white">Custom Chatbot Initiated</span>
                    <span className="text-[9px] bg-amber-500/10 text-amber-400 font-bold px-1.5 py-0.5 rounded-full font-mono uppercase tracking-wider animate-pulse">PROVISIONING</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Thank you, {formData.name} from {formData.company}. Your private node is being generated.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-bold text-xs uppercase tracking-wider font-mono text-slate-500">YOUR CUSTOM ROADMAP:</h3>
                
                <div className="space-y-3">
                  <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-xs shrink-0 font-mono">01</div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Temporary Credentials Issued</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">We sent a verification link to <strong className="text-slate-300">{formData.email}</strong> to set up your master compliance password.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-xs shrink-0 font-mono">02</div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Drafting Document Silos</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Our model is pre-configuring directories based on your requested files: <span className="text-teal-400 italic">"{formData.docTypes || 'Company Guidelines'}"</span>.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center font-bold text-xs shrink-0 font-mono">03</div>
                    <div>
                      <h4 className="text-xs font-bold text-white">Schedule Setup Review (Recommended)</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">Book a 15-minute quick call with an onboarding engineer to optimize your document format extraction rates.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly simulator button */}
              <div className="p-5 bg-gradient-to-r from-teal-950/20 to-cyan-950/20 border border-teal-500/10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <span className="text-xs font-bold text-white block">Finalize Workspace Alignment</span>
                  <p className="text-[10px] text-slate-400">Secure your personal onboarding session in 1 click.</p>
                </div>
                <button
                  onClick={() => alert("Simulated Calendly widget opened! Under normal circumstances, this would open your real consultation link.")}
                  className="px-5 py-2.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Book Call via Calendly
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Contact info & offices */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base">Corporate SME Support Desk</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions prior to getting started? Connect with our global partnership advisors directly.
            </p>
          </div>

          <div className="space-y-6">
            {offices.map((off, idx) => (
              <div key={idx} className="p-5.5 bg-slate-950/60 border border-slate-900/60 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono text-teal-400">{off.country}</h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed mt-1">{off.address}</p>
                  <p className="text-[10px] text-slate-500 font-mono mt-1 font-bold">{off.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
