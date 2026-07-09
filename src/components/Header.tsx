import React, { useState } from 'react';
import { Menu, X, Cpu, MessageSquare } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  onBookDemo: () => void;
}

export default function Header({ activePage, setActivePage, onBookDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Solution', page: 'solution' },
    { label: 'Features', page: 'features' },
    { label: 'How It Works', page: 'how-it-works' },
    { label: 'Industries', page: 'industries' },
    { label: 'About Us', page: 'about' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'FAQs', page: 'faqs' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src="/images/SkillTrainAI_Logo.png"
              alt="SkillTrain AI Logo"
              className="w-10 h-10 rounded-lg shadow-lg group-hover:scale-105 transition-transform shrink-0 object-cover "
                style={{ objectPosition: 'center 5%' }} // Lower % = moves image further up

              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tighter text-blue-900 leading-none">SYNERGY</span>
                <span className="text-[9px] bg-teal-50 text-teal-700 border border-teal-200 font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider scale-90">SME</span>
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-teal-600 uppercase">SKILLTRAIN AI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  activePage === item.page
                    ? 'text-blue-700 bg-blue-50/80 border border-blue-100'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookDemo}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Request Free Trial
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all block ${
                  activePage === item.page
                    ? 'text-blue-700 bg-blue-50 border border-blue-100'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookDemo();
                }}
                className="w-full inline-flex items-center justify-center px-4 py-3.5 rounded-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-bold transition-all shadow-lg shadow-blue-900/20"
              >
                Request Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
