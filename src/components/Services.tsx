import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import {
  Globe,
  ShoppingBag,
  Rocket,
  Palette,
  RefreshCw,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Server,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';

interface ServicesProps {
  onOpenEstimator: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenEstimator }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      case 'Palette': return <Palette className="w-6 h-6" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Server': return <Server className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  const categories = ['All', 'Development', 'Design', 'Marketing', 'Support'];

  const filteredServices = activeCategoryFilter === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategoryFilter);

  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50/50 dark:bg-zinc-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Comprehensive Web & Digital Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            From bespoke corporate web platforms to high-converting e-commerce stores and SEO strategies, we engineer results for your business.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategoryFilter === cat
                  ? 'bg-[#E63946] text-white shadow-md shadow-[#E63946]/20'
                  : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 hover:border-[#E63946]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-white dark:bg-zinc-900 p-7 border border-gray-200/80 dark:border-zinc-800/80 hover:border-[#E63946]/50 dark:hover:border-[#E63946]/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {service.popular && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-red-100 dark:bg-red-950 text-[#E63946] text-[10px] font-bold uppercase tracking-wider">
                  Popular
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 text-[#E63946] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white transition-all duration-300">
                  {getIcon(service.icon)}
                </div>

                <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white mb-2 group-hover:text-[#E63946] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 pl-6">
                      +{service.features.length - 3} more capabilities
                    </li>
                  )}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#E63946] hover:text-[#c52a36] flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#contact"
                  className="text-xs font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-black text-white border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold">Need a Custom Website Solution or Quote?</h3>
            <p className="text-sm text-gray-400">Use our instant website cost calculator or get in touch with our founders directly.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenEstimator}
              className="px-5 py-3 rounded-xl bg-[#E63946] hover:bg-[#c52a36] text-white font-semibold text-sm shadow-lg shadow-[#E63946]/30 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Instant Cost Estimator</span>
            </button>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-zinc-700 transition-all"
            >
              Contact Team
            </a>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950 text-[#E63946] flex items-center justify-center">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#E63946] uppercase tracking-wider">{selectedService.category}</span>
                <h3 className="font-heading text-2xl font-bold text-[#111111] dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Key Features & Deliverables:</h4>
              <ul className="space-y-2.5">
                {selectedService.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-800 dark:text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 text-xs font-semibold text-gray-700 dark:text-gray-300"
              >
                Close
              </button>

              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl bg-[#E63946] text-white text-xs font-semibold shadow-md shadow-[#E63946]/20 flex items-center gap-1.5"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
