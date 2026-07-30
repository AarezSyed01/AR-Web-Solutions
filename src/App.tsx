import React, { useState, useEffect } from 'react';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Logo } from './components/Logo';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Technologies } from './components/Technologies';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CostEstimatorModal } from './components/CostEstimatorModal';
import { FloatingWidgets } from './components/FloatingWidgets';
import { SeoModals } from './components/SeoModals';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [seoModalType, setSeoModalType] = useState<'sitemap' | 'robots' | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Page Loading Animation simulate
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0d0d] text-[#1A1A1A] dark:text-[#f1f1f1] transition-colors duration-300 relative selection:bg-[#E63946] selection:text-white">
      
      {/* Page Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#111111] text-white flex flex-col items-center justify-center space-y-4 animate-out fade-out duration-500">
          <Logo size="lg" iconOnly className="animate-pulse" />
          <div className="flex items-center gap-2 text-sm font-semibold tracking-widest text-gray-300 uppercase mt-2">
            <Sparkles className="w-4 h-4 text-[#E63946] animate-spin" />
            <span>AR Web Solutions</span>
          </div>
          <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="w-full h-full bg-[#E63946] animate-pulse" />
          </div>
        </div>
      )}

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Header Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <Stats />
        <Services onOpenEstimator={() => setIsEstimatorOpen(true)} />
        <Industries />
        <WhyUs />
        <Process />
        <Portfolio />
        <Technologies />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenSeoModal={(type) => setSeoModalType(type)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Floating Action Buttons (WhatsApp, Call, Scroll Top) */}
      <FloatingWidgets />

      {/* Interactive Website Cost Estimator Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      {/* SEO Modals (Sitemap / Robots) */}
      <SeoModals
        type={seoModalType}
        onClose={() => setSeoModalType(null)}
      />

    </div>
  );
}
