import React, { useState } from 'react';
import { TECHNOLOGIES } from '../data/content';
import {
  FileCode,
  Palette,
  Code2,
  Atom,
  Server,
  Cpu,
  Database,
  Flame,
  Terminal,
  HardDrive,
  LayoutGrid,
  Layers,
  Wind,
  GitBranch,
  Github,
  Sparkles
} from 'lucide-react';

export const Technologies: React.FC = () => {
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>('All');

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5 animate-spin-slow" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5" />;
      case 'Github': return <Github className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  const techCategories = ['All', 'Frontend', 'Backend', 'Database', 'CMS', 'Tools'];

  const filteredTech = selectedTechCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter(t => t.category === selectedTechCategory);

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Technology Stack</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Engineered With Cutting-Edge Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            We utilize robust, industry-leading technologies ensuring high performance, security, and scalability.
          </p>
        </div>

        {/* Tech Marquee Ribbon */}
        <div className="mb-14 overflow-hidden py-4 bg-gray-50 dark:bg-zinc-900/50 rounded-2xl border border-gray-200 dark:border-zinc-800">
          <div className="animate-marquee flex items-center gap-8">
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shrink-0 shadow-sm"
              >
                <div className="text-[#E63946]">
                  {getTechIcon(tech.icon)}
                </div>
                <span className="text-xs font-bold text-gray-900 dark:text-white whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Categories Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTechCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTechCategory === cat
                  ? 'bg-[#E63946] text-white shadow-md'
                  : 'bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-zinc-900/80 border border-gray-200/80 dark:border-zinc-800/80 hover:border-[#E63946]/50 hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 text-[#E63946] shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white transition-all">
                {getTechIcon(tech.icon)}
              </div>

              <span className="font-heading font-bold text-sm text-[#111111] dark:text-white mb-1">
                {tech.name}
              </span>

              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tech.badgeColor || 'text-gray-600 bg-gray-100 border-gray-200'}`}>
                {tech.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
