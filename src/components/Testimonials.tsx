import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, MapPin, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50/70 dark:bg-zinc-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Loved By Businesses Across Maharashtra
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Read how AR Web Solutions helped local companies, manufacturers, academies, and entrepreneurs grow their online presence.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800/80 hover:border-[#E63946]/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-left relative group"
            >
              <Quote className="w-10 h-10 text-red-100 dark:text-zinc-800 absolute top-6 right-6 pointer-events-none group-hover:text-red-200 dark:group-hover:text-zinc-700 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Feedback Content */}
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic mb-6">
                  &quot;{review.content}&quot;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/60 border-2 border-[#E63946] text-[#E63946] dark:text-[#E63946] font-heading font-extrabold text-base flex items-center justify-center shrink-0 shadow-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-[#111111] dark:text-white leading-tight">
                    {review.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {review.role}, <span className="font-medium text-gray-700 dark:text-gray-300">{review.company}</span>
                  </p>
                  {review.location && (
                    <div className="flex items-center gap-1 text-[10px] text-[#E63946] font-medium mt-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{review.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
