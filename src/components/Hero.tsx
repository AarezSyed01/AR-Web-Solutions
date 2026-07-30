import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import {
  ArrowRight,
  Sparkles,
  Laptop,
  Smartphone,
  Code2,
  BarChart3,
  CheckCircle,
  Zap,
  ShieldCheck,
  Star,
  Play
} from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  const [activeTab, setActiveTab] = useState<'laptop' | 'mobile' | 'code' | 'analytics'>('laptop');

  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#E63946]/20 via-rose-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-red-400/10 blur-2xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 text-[#E63946] text-xs sm:text-sm font-semibold tracking-wide shadow-sm animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>Leading Web Agency in Latur & Maharashtra</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] dark:text-white tracking-tight leading-[1.15]">
              We Build Websites That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] via-rose-600 to-[#b8222f]">
                Grow Your Business
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed">
              We help startups, local businesses, professionals, and enterprises create stunning websites that attract customers, increase conversions, and build credibility online.
            </p>

            {/* Mission Statement Pill */}
            <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#E63946] animate-ping" />
              <span><strong className="text-[#111111] dark:text-white font-semibold">Tagline:</strong> {COMPANY_INFO.tagline}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-[#E63946] hover:bg-[#c52a36] text-white font-semibold text-base shadow-lg shadow-[#E63946]/30 flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#portfolio"
                className="px-7 py-4 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-semibold text-base border border-gray-200 dark:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
              >
                View Portfolio
              </a>

              <button
                onClick={onOpenEstimator}
                className="px-5 py-4 rounded-xl border border-[#E63946]/30 text-[#E63946] hover:bg-[#E63946]/10 text-sm font-semibold flex items-center gap-2 transition-all"
              >
                <Zap className="w-4 h-4" />
                <span>Calculate Website Cost</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100 dark:border-zinc-800/80 w-full">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-[#E63946]" />
                <span>50+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>5.0 Star Rated Agency</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Screen / Mockup Gallery */}
          <div className="lg:col-span-5 relative">
            
            {/* Interactive Tab Controls */}
            <div className="flex items-center justify-center p-1.5 mb-4 rounded-2xl bg-gray-100/80 dark:bg-zinc-900/80 border border-gray-200 dark:border-zinc-800 max-w-md mx-auto backdrop-blur-md">
              <button
                onClick={() => setActiveTab('laptop')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'laptop'
                    ? 'bg-white dark:bg-zinc-800 text-[#E63946] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Laptop</span>
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'mobile'
                    ? 'bg-white dark:bg-zinc-800 text-[#E63946] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Mobile</span>
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'code'
                    ? 'bg-white dark:bg-zinc-800 text-[#E63946] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Code</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-white dark:bg-zinc-800 text-[#E63946] shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Stats</span>
              </button>
            </div>

            {/* Display Screen Stage with floating badges container */}
            <div className="relative pt-3 pb-3 px-2 sm:px-4">
              
              {/* Floating UI Badge 1 - Top Right */}
              <div className="absolute -top-3 right-0 sm:right-2 z-20 bg-white/95 dark:bg-zinc-900/95 border border-gray-200 dark:border-zinc-800 p-2 sm:p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float-delayed backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-[#E63946] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left pr-1">
                  <span className="text-xs font-bold text-gray-900 dark:text-white block leading-tight">SEO Ready</span>
                  <span className="text-[10px] text-emerald-500 font-semibold">Google Rank #1</span>
                </div>
              </div>

              {/* Main Stage Window */}
              <div className="relative rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl p-4 sm:p-5 transition-all duration-300">
                
                {/* Window Controls Dot Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">arwebsolutions.com/preview</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">LIVE</span>
                </div>

                {/* Tab 1: Laptop Showcase */}
                {activeTab === 'laptop' && (
                  <div className="relative space-y-3 animate-in fade-in duration-300">
                    <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-zinc-800">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                        alt="AR Web Solutions Website Design Showcase"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <div>
                          <span className="text-[11px] font-medium text-rose-300 uppercase tracking-widest">Featured Build</span>
                          <h3 className="text-white font-bold text-base">High-Performance E-Commerce & Corporate Platform</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Mobile Showcase */}
                {activeTab === 'mobile' && (
                  <div className="flex justify-center items-center py-2 animate-in fade-in duration-300">
                    <div className="w-56 h-[260px] rounded-[2rem] bg-zinc-950 border-4 border-zinc-800 p-2 shadow-xl relative overflow-hidden">
                      <div className="w-20 h-4 bg-zinc-800 rounded-b-xl mx-auto mb-2" />
                      <div className="space-y-2 text-left">
                        <div className="h-20 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 p-2.5 text-white">
                          <span className="text-[9px] font-bold block">AR WEB SOLUTIONS</span>
                          <span className="text-xs font-bold leading-tight block">100% Mobile Responsive</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5">
                          <div className="h-12 rounded-lg bg-zinc-900 border border-zinc-800 p-1.5">
                            <span className="text-[8px] text-zinc-400 block">Load Speed</span>
                            <span className="text-xs font-bold text-emerald-400">0.8s</span>
                          </div>
                          <div className="h-12 rounded-lg bg-zinc-900 border border-zinc-800 p-1.5">
                            <span className="text-[8px] text-zinc-400 block">SEO Score</span>
                            <span className="text-xs font-bold text-[#E63946]">100/100</span>
                          </div>
                        </div>
                        <div className="h-10 rounded-lg bg-zinc-900 border border-zinc-800 p-2 flex items-center justify-between text-[10px] text-zinc-300">
                          <span>WhatsApp Quick Lead</span>
                          <Play className="w-3 h-3 text-[#E63946] fill-[#E63946]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Code Snippets */}
                {activeTab === 'code' && (
                  <div className="font-mono text-xs text-left bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2 animate-in fade-in duration-300 overflow-x-auto text-zinc-300">
                    <p className="text-emerald-400">// AR Web Solutions High-Speed Stack</p>
                    <p><span className="text-purple-400">const</span> agency = <span className="text-yellow-300">&#123;</span></p>
                    <p className="pl-4">name: <span className="text-emerald-300">&quot;AR Web Solutions&quot;</span>,</p>
                    <p className="pl-4">location: <span className="text-emerald-300">&quot;Latur, MH, India&quot;</span>,</p>
                    <p className="pl-4">services: [<span className="text-rose-300">&quot;Web Dev&quot;</span>, <span className="text-rose-300">&quot;SEO&quot;</span>, <span className="text-rose-300">&quot;UI/UX&quot;</span>],</p>
                    <p className="pl-4">performance: <span className="text-cyan-400">&quot;Lighthouse 95+&quot;</span>,</p>
                    <p className="pl-4">founders: [<span className="text-amber-300">&quot;Aarez Syed&quot;</span>, <span className="text-amber-300">&quot;Raiyan Shaikh&quot;</span>]</p>
                    <p><span className="text-yellow-300">&#125;</span>;</p>
                    <p className="text-purple-400">export default agency;</p>
                  </div>
                )}

                {/* Tab 4: Analytics Chart */}
                {activeTab === 'analytics' && (
                  <div className="space-y-3 p-2 animate-in fade-in duration-300 text-left">
                    <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-zinc-800">
                      <span>Monthly Website Growth</span>
                      <span className="text-emerald-400 font-bold">+284% Traffic</span>
                    </div>
                    
                    {/* Visual Bar Chart */}
                    <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2">
                      <div className="w-full bg-zinc-800/80 rounded-t-lg h-[30%] flex items-end justify-center pb-1 text-[9px] text-zinc-400">Jan</div>
                      <div className="w-full bg-zinc-800/80 rounded-t-lg h-[45%] flex items-end justify-center pb-1 text-[9px] text-zinc-400">Feb</div>
                      <div className="w-full bg-zinc-800/80 rounded-t-lg h-[60%] flex items-end justify-center pb-1 text-[9px] text-zinc-400">Mar</div>
                      <div className="w-full bg-[#E63946]/60 rounded-t-lg h-[80%] flex items-end justify-center pb-1 text-[9px] text-white">Apr</div>
                      <div className="w-full bg-[#E63946] rounded-t-lg h-[100%] flex items-end justify-center pb-1 text-[9px] text-white font-bold">May</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs">
                      <span className="text-zinc-300">Average Conversion Rate</span>
                      <span className="font-bold text-emerald-400">12.4%</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Floating UI Badge 2 - Bottom Left */}
              <div className="absolute -bottom-3 left-0 sm:left-2 z-20 bg-white/95 dark:bg-zinc-900/95 border border-gray-200 dark:border-zinc-800 p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float backdrop-blur-md">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  99%
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-gray-900 dark:text-white block leading-tight">Speed Score</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400">Sub-1s Load Time</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
