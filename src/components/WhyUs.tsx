import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import {
  Check,
  ShieldCheck,
  Sparkles,
  Zap,
  Smartphone,
  Search,
  Lock,
  Tag,
  Code2,
  Layout,
  Headphones,
  HeartHandshake
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (idx: number) => {
    const icons = [
      <Sparkles key={0} className="w-5 h-5" />,
      <Smartphone key={1} className="w-5 h-5" />,
      <Search key={2} className="w-5 h-5" />,
      <Zap key={3} className="w-5 h-5" />,
      <Lock key={4} className="w-5 h-5" />,
      <Tag key={5} className="w-5 h-5" />,
      <Code2 key={6} className="w-5 h-5" />,
      <Layout key={7} className="w-5 h-5" />,
      <HeartHandshake key={8} className="w-5 h-5" />,
      <Headphones key={9} className="w-5 h-5" />
    ];
    return icons[idx % icons.length];
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50 dark:bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The AR Web Solutions Difference</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Why Choose AR Web Solutions?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            We don&apos;t just build templates — we engineer high-performance digital assets designed to convert visitors into loyal paying customers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800/80 hover:border-[#E63946]/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex items-start gap-4 text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/80 text-[#E63946] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white transition-all duration-300">
                {getIcon(idx)}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#111111] dark:text-white group-hover:text-[#E63946] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
