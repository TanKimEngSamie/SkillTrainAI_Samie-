import React from 'react';
import { Cpu, Mail, Phone, MapPin, MessageSquare, Shield, Globe } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  setActivePage: (page: PageType) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageType) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900/80 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Corporate Profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <img
                src="/images/skilltrain_new_logo_1783517028427.jpg"
                alt="SkillTrain AI Logo"
                className="w-10 h-10 rounded-lg shadow-md object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">Synergy SkillTrain AI</span>
                <span className="text-[9px] text-slate-500 font-mono tracking-wider">SECURE ENTERPRISE KNOWLEDGE SESSIONS</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering Small & Medium Enterprises (SMEs) with secure, zero-hallucination conversational AI. Capture human capital, streamline staff onboarding, and protect organizational intelligence against knowledge loss.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Republic Polytechnic, 9 Woodlands Ave 9, Singapore 738964</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:contact@synergy.ai" className="hover:text-teal-400 transition-colors">contact@synergy.ai</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+65 6789 2100 (SME Corporate Hotline)</span>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-2.5 space-y-4 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">Product & Tech</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick('solution')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  SME Solution Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('features')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Precision Feature Matrix
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('how-it-works')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Integrations & APIs
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('pricing')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Commercial Pricing
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2.5 space-y-4 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">SME Target Industries</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Professional Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Logistics & Factory Floors
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Hospitality & F&B Retail
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('industries')} className="hover:text-teal-400 transition-colors cursor-pointer text-left">
                  Clinical Care & Medicine
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4 col-span-1">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">SME Trust & Compliance</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              We design ethical, isolated AI. Your uploads never train public models. Strict GDPR, SOC-2, and HIPAA isolation active.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 border border-slate-900 rounded bg-slate-950 flex items-center gap-1.5 text-[10px] text-slate-400">
                <Shield className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>SOC-2 Audited</span>
              </div>
              <div className="p-2 border border-slate-900 rounded bg-slate-950 flex items-center gap-1.5 text-[10px] text-slate-400">
                <Globe className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>GDPR Aligned</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-500 text-center sm:text-left">
            <span>&copy; {currentYear} Synergy Global Technologies Pte Ltd. All rights reserved. </span>
            <span className="block sm:inline sm:ml-2 text-[10px] bg-slate-900 px-2 py-0.5 rounded text-slate-500">
              Co. Reg. No. 20241901K
            </span>
          </div>
          
          <div className="flex gap-4.5 text-slate-500 font-mono text-[10px]">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#security" className="hover:text-slate-300 transition-colors">Ethics & AI Safety Statement</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
