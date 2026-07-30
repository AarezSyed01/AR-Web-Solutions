import React, { useState } from 'react';
import { INDUSTRIES } from '../data/content';
import {
  Rocket,
  Store,
  Utensils,
  Coffee,
  Building2,
  GraduationCap,
  BookOpen,
  Stethoscope,
  Activity,
  Scale,
  Home,
  Calendar,
  Truck,
  Plane,
  Camera,
  Scissors,
  Dumbbell,
  Heart,
  UserCheck,
  Briefcase,
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Industries: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Store': return <Store className="w-5 h-5" />;
      case 'Utensils': return <Utensils className="w-5 h-5" />;
      case 'Coffee': return <Coffee className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Stethoscope': return <Stethoscope className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Plane': return <Plane className="w-5 h-5" />;
      case 'Camera': return <Camera className="w-5 h-5" />;
      case 'Scissors': return <Scissors className="w-5 h-5" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  const filteredIndustries = INDUSTRIES.filter(ind =>
    ind.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ind.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Versatile Expertise</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Industries We Empower
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            We build specialized, high-converting websites customized for diverse sectors across Latur, Maharashtra, and pan-India.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search your industry (e.g. Doctor, Restaurant, Real Estate)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-sm focus:outline-none focus:border-[#E63946] dark:focus:border-[#E63946] transition-colors text-gray-900 dark:text-white"
          />
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredIndustries.map((ind) => (
            <div
              key={ind.name}
              className="p-4 rounded-2xl bg-gray-50/80 dark:bg-zinc-900/80 border border-gray-200/80 dark:border-zinc-800/80 hover:border-[#E63946]/50 hover:bg-white dark:hover:bg-zinc-900 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group text-left"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/80 text-[#E63946] flex items-center justify-center mb-3 group-hover:bg-[#E63946] group-hover:text-white transition-colors">
                  {getIndustryIcon(ind.icon)}
                </div>

                <h3 className="font-heading font-bold text-sm text-[#111111] dark:text-white mb-1 group-hover:text-[#E63946] transition-colors">
                  {ind.name}
                </h3>

                <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 dark:border-zinc-800/60 flex items-center justify-between text-[10px] font-semibold text-[#E63946]">
                <span>Build Website</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredIndustries.length === 0 && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No industry matching &quot;{searchTerm}&quot;. But don&apos;t worry — we build custom websites for any domain!
          </div>
        )}

      </div>
    </section>
  );
};
