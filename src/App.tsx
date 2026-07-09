import React, { useState } from 'react';
import { PageType } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import SolutionView from './components/SolutionView';
import FeaturesView from './components/FeaturesView';
import HowItWorksView from './components/HowItWorksView';
import IndustriesView from './components/IndustriesView';
import PricingView from './components/PricingView';
import FAQsView from './components/FAQsView';
import ContactView from './components/ContactView';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');

  const handleBookDemo = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView setActivePage={setActivePage} onBookDemo={handleBookDemo} />;
      case 'about':
        return <AboutView />;
      case 'solution':
        return <SolutionView />;
      case 'features':
        return <FeaturesView />;
      case 'how-it-works':
        return <HowItWorksView />;
      case 'industries':
        return <IndustriesView />;
      case 'pricing':
        return <PricingView />;
      case 'faqs':
        return <FAQsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActivePage={setActivePage} onBookDemo={handleBookDemo} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/10 selection:text-blue-900 relative">
      
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      {/* Dynamic Navigation Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onBookDemo={handleBookDemo}
      />

      {/* Main Content Area */}
      <main className="relative pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-hidden min-h-[calc(100vh-280px)] z-10">
        {/* Ambient Top Background Spotlights */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {renderActiveView()}
        </div>
      </main>

      {/* Consistent Corporate Footer */}
      <Footer setActivePage={setActivePage} />

    </div>
  );
}
