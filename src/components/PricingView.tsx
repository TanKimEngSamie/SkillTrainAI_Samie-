import React, { useState } from 'react';
import { Check, Info, HelpCircle, Activity, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data';

export default function PricingView() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Simple pricing calculation with 20% annual discount
  const getDisplayPrice = (planName: string, basePrice: string) => {
    if (basePrice === 'Custom') return 'Custom';
    const num = parseInt(basePrice.replace('$', ''));
    if (isAnnual) {
      // 20% off
      return `$${Math.round(num * 0.8)}`;
    }
    return `$${num}`;
  };

  const featureMatrix = [
    { name: 'Document Ingestion Limit', starter: '15 files', professional: '100 files', enterprise: 'Unlimited' },
    { name: 'Word Count Capacity', starter: '250,000 words', professional: '2.5M words', enterprise: 'Unlimited' },
    { name: 'Department Silos (RBAC)', starter: '2 silos (Public/Ops)', professional: '8 silos (Restricted)', enterprise: 'Unlimited' },
    { name: 'Slack / Teams link', starter: 'Standard widget', professional: 'Full App + Custom widget', enterprise: 'White-label widget' },
    { name: 'Accuracy Guard Citations', starter: 'Page-level', starterCheck: true, professional: 'Precision line/para-level', professionalCheck: true, enterprise: 'Line-level + deep verification', enterpriseCheck: true },
    { name: 'Customer Support SLA', starter: 'Next-day email', professional: '1-hour SLA priority', enterprise: 'Dedicated account lead' },
    { name: 'AI Missing-SOP Gap Analysis', starter: 'Not included', professional: 'Included (Monthly)', enterprise: 'Continuous Real-time' },
    { name: 'Compliance Agreement Signing', starter: 'Standard terms', professional: 'Standard terms', enterprise: 'SOC-2 / HIPAA Custom BAA' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-5">
        <span className="text-xs text-teal-400 font-bold uppercase tracking-widest font-mono block">COMMERCIAL TIERS</span>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Flexible Plans Engineered for Growing SME Squads
        </h1>
        <p className="text-base text-slate-400 leading-relaxed">
          Start on our free 14-day trial. No credit card is required, and you can scale up or downgrade your knowledge capacities at any time.
        </p>

        {/* Toggle billing switch */}
        <div className="flex items-center justify-center gap-4.5 pt-3">
          <span className={`text-xs font-bold transition-all ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Monthly Billing</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6.5 rounded-full bg-slate-800 border border-slate-700 relative p-0.5 transition-all outline-none cursor-pointer"
            aria-label="Toggle Billing Interval"
          >
            <div className={`w-5 h-5 rounded-full bg-teal-400 transition-all ${isAnnual ? 'translate-x-5.5' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-bold transition-all ${isAnnual ? 'text-teal-400' : 'text-slate-500'}`}>Annual Billing</span>
            <span className="text-[9px] bg-teal-500/10 text-teal-400 font-bold px-1.5 py-0.5 rounded-full font-mono">SAVE 20%</span>
          </div>
        </div>
      </div>

      {/* 2. Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {PRICING_PLANS.map((plan) => {
          const priceStr = getDisplayPrice(plan.name, plan.price);
          return (
            <div
              key={plan.name}
              className={`p-7.5 rounded-3xl border transition-all relative flex flex-col justify-between min-h-[580px] ${
                plan.isPopular
                  ? 'bg-white border-sky-400 shadow-xl shadow-sky-500/10 md:-translate-y-4'
                  : 'bg-sky-500/20 border-sky-500/30 hover:border-sky-400/50'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 text-[9px] bg-teal-400 text-slate-950 font-black px-3.5 py-1 rounded-full font-mono uppercase tracking-wider shadow-md">
                  ★ MOST POPULAR FOR SMEs
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-bold ${plan.isPopular ? 'text-sky-600' : 'text-white'}`}>{plan.name}</h3>
                  <p className={`text-xs leading-relaxed mt-2.5 min-h-[48px] ${plan.isPopular ? 'text-slate-700' : 'text-slate-400'}`}>{plan.description}</p>
                </div>

                <div className={`border-y py-5 flex items-baseline gap-1.5 font-mono ${plan.isPopular ? 'border-slate-200' : 'border-slate-800'}`}>
                  <span className={`text-4xl font-extrabold ${plan.isPopular ? 'text-slate-900' : 'text-white'}`}>{priceStr}</span>
                  {plan.price !== 'Custom' && (
                    <span className={`text-xs font-semibold ${plan.isPopular ? 'text-slate-500' : 'text-slate-500'}`}>{isAnnual ? '/mo billed annually' : plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3.5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <span className={`text-xs font-semibold leading-normal ${plan.isPopular ? 'text-slate-800' : 'text-slate-300'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  className="w-full py-3.5 rounded-xl text-sm font-bold transition-all shadow-md cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-900 hover:shadow-teal-500/20"
                >
                  {plan.ctaText}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Detailed Feature Comparison Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white">Full Feature Comparison Matrix</h2>
          <p className="text-xs text-slate-400">Everything you need to select the perfect knowledge workspace</p>
        </div>

        <div className="bg-slate-950 border border-slate-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800/80">
                  <th className="p-4.5 font-bold text-slate-300">Operational Capability</th>
                  <th className="p-4.5 font-bold text-slate-300">Growth Starter</th>
                  <th className="p-4.5 font-bold text-slate-300">SME Professional</th>
                  <th className="p-4.5 font-bold text-slate-300">Enterprise Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/60 font-medium">
                {featureMatrix.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-900/30 transition-colors">
                    <td className="p-4.5 text-white font-sans">{row.name}</td>
                    <td className="p-4.5 text-slate-400 font-mono">{row.starter}</td>
                    <td className="p-4.5 text-teal-400 font-mono">{row.professional}</td>
                    <td className="p-4.5 text-cyan-400 font-mono">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
