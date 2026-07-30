import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import {
  MessageSquare,
  FileText,
  Layout,
  Code,
  CheckCircle2,
  Send,
  Headphones,
  Sparkles
} from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Methodology</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Our 7-Step Development Roadmap
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A transparent, organized process designed to deliver your project on time and exceed expectations.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-red-200 via-[#E63946] to-red-200 dark:from-zinc-800 dark:via-[#E63946] dark:to-zinc-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-[#E63946] hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-lg bg-[#E63946]/10 text-[#E63946]">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-red-100 dark:bg-red-950 text-[#E63946] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white transition-all">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#111111] dark:text-white mb-2 group-hover:text-[#E63946] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-200/60 dark:border-zinc-800/60 text-[10px] font-semibold text-gray-400">
                  Phase {idx + 1} of 7
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
