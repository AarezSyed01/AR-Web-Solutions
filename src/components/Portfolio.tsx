import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioProject } from '../types';
import {
  ExternalLink,
  Sparkles,
  Layers,
  X,
  CheckCircle,
  Eye
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [previewProject, setPreviewProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Business', 'E-Commerce', 'Landing Page', 'Educational', 'Restaurant', 'Portfolio'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-gray-50/60 dark:bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Our Work Speaks For Itself
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Explore recent websites designed and developed by AR Web Solutions for businesses in Latur, Maharashtra, and beyond.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#E63946] text-white shadow-md shadow-[#E63946]/20'
                  : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 hover:border-[#E63946]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800/80 hover:border-[#E63946]/50 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
            >
              <div>
                {/* Image & Category Overlay */}
                <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-zinc-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
                    {project.category}
                  </div>

                  {project.metrics && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#E63946] text-white text-[10px] font-bold shadow-md">
                      {project.metrics}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#111111] dark:text-white mb-2 group-hover:text-[#E63946] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-zinc-800 text-[10px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setPreviewProject(project)}
                  className="w-full py-3 rounded-xl bg-gray-900 hover:bg-[#E63946] dark:bg-zinc-800 dark:hover:bg-[#E63946] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Preview Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-2xl text-left">
            
            <button
              onClick={() => setPreviewProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 sm:h-72">
              <img
                src={previewProject.image}
                alt={previewProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#E63946] text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    {previewProject.category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {previewProject.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {previewProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {previewProject.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {previewProject.metrics && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-300 text-sm font-semibold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Verified Client Result: {previewProject.metrics}</span>
                </div>
              )}

              <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                <button
                  onClick={() => setPreviewProject(null)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  Close Preview
                </button>

                <a
                  href="#contact"
                  onClick={() => setPreviewProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#E63946] text-white text-xs font-semibold shadow-md shadow-[#E63946]/20 flex items-center gap-2"
                >
                  <span>Build Similar Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
