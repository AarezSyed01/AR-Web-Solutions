import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/content';
import { MessageSquare, Phone, ArrowUp, X, Send, Sparkles } from 'lucide-react';

export const FloatingWidgets: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWaPopup, setShowWaPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickMessages = [
    'I want to build a new website for my business.',
    'I want an E-Commerce store with payment gateway.',
    'I want to redesign my existing website.',
    'I want to speak with founder Aarez / Raiyan.'
  ];

  const handleSendWaMessage = (msg: string) => {
    const encoded = encodeURIComponent(`Hi AR Web Solutions! 👋\n\n${msg}`);
    window.open(`https://wa.me/${COMPANY_INFO.phone1Clean}?text=${encoded}`, '_blank');
    setShowWaPopup(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* WhatsApp Quick Popup */}
      {showWaPopup && (
        <div className="w-80 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xl p-5 mb-2 animate-in slide-in-from-bottom-4 duration-300 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                AR
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-gray-900 dark:text-white">AR Web Solutions</h4>
                <span className="text-[10px] text-emerald-500 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Online Now
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowWaPopup(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3">
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">
              👋 Hi there! How can our team help your business today? Select a message below:
            </p>

            <div className="space-y-2">
              {quickMessages.map((m, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendWaMessage(m)}
                  className="w-full text-left p-2.5 rounded-xl bg-gray-50 dark:bg-zinc-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-500 text-xs text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-zinc-700 transition-colors flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{m}</span>
                  <Send className="w-3 h-3 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 text-center text-[10px] text-gray-400">
            Direct chat with Founders Aarez & Raiyan
          </div>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        
        {/* Floating Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phone1Clean}`}
          className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-[#E63946] dark:bg-zinc-800 text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
          title="Direct Phone Call"
          aria-label="Call AR Web Solutions"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Chat Button */}
        <button
          onClick={() => setShowWaPopup(!showWaPopup)}
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 relative"
          title="Chat on WhatsApp"
          aria-label="WhatsApp Chat"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 2.159.683 4.159 1.848 5.802L2.5 21.5l3.821-1.312C7.887 21.281 9.878 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full" />
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white dark:bg-zinc-900 text-gray-800 dark:text-white border border-gray-200 dark:border-zinc-800 flex items-center justify-center shadow-xl transition-all duration-300 hover:bg-[#E63946] hover:text-white hover:border-[#E63946] hover:scale-110"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

      </div>
    </div>
  );
};
