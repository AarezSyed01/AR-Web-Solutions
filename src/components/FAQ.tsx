import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, Sparkles, HelpCircle, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqQuery, setFaqQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = FAQS.filter(
    f => f.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
         f.answer.toLowerCase().includes(faqQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about working with AR Web Solutions.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10 relative max-w-lg mx-auto">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. cost, time, mobile, SEO)..."
            value={faqQuery}
            onChange={(e) => setFaqQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-sm focus:outline-none focus:border-[#E63946] text-gray-900 dark:text-white"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-gray-50/80 dark:bg-zinc-900/80 border border-gray-200/80 dark:border-zinc-800/80 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#111111] dark:text-white hover:text-[#E63946] dark:hover:text-[#E63946] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#E63946] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E63946]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-zinc-800/60 animate-in fade-in duration-200">
                    <p className="pt-4">{faq.answer}</p>
                    {faq.category && (
                      <span className="mt-3 inline-block px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/60 text-[10px] font-semibold text-[#E63946]">
                        {faq.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No matching FAQ found. Feel free to contact our founders directly with any question!
          </div>
        )}

      </div>
    </section>
  );
};
