import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Logo } from './Logo';
import { Sun, Moon, Menu, X, ArrowUpRight, Phone, MessageSquare, Sparkles } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-zinc-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="inline-block">
            <Logo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#E63946] dark:hover:text-[#E63946] hover:bg-gray-100/60 dark:hover:bg-zinc-800/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* Estimator Button */}
            <button
              onClick={onOpenEstimator}
              className="px-3.5 py-2.5 rounded-xl border border-[#E63946]/30 text-[#E63946] hover:bg-[#E63946]/10 text-xs font-semibold flex items-center gap-1.5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Quote Estimator</span>
            </button>

            {/* CTA Contact Button with WhatsApp Logo */}
            <a
              href={`https://wa.me/${COMPANY_INFO.phone1Clean}?text=${encodeURIComponent('Hi AR Web Solutions! I would like to get a free consultation for my business.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-600/20 flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4.5 h-4.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 2.159.683 4.159 1.848 5.802L2.5 21.5l3.821-1.312C7.887 21.281 9.878 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              </svg>
              <span>Get Free Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#111111] border-b border-gray-200 dark:border-zinc-800 px-4 pt-4 pb-6 mt-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-3 rounded-xl bg-gray-100 dark:bg-zinc-800 text-[#E63946] font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate Website Cost</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.phone1Clean}?text=${encodeURIComponent('Hi AR Web Solutions! I would like to get a free consultation for my business.')}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <svg className="w-4.5 h-4.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 2.159.683 4.159 1.848 5.802L2.5 21.5l3.821-1.312C7.887 21.281 9.878 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
                <span>Get Free Consultation</span>
              </a>

              <div className="flex items-center justify-around pt-2 text-xs text-gray-500 dark:text-gray-400">
                <a href={`tel:${COMPANY_INFO.phone1Clean}`} className="flex items-center gap-1 hover:text-[#E63946]">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone1}</span>
                </a>
                <a href={`https://wa.me/${COMPANY_INFO.phone1Clean}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
