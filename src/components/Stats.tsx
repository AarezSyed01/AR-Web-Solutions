import React, { useEffect, useState, useRef } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Briefcase, Users, Award, Clock } from 'lucide-react';

export const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsList = [
    {
      label: "Projects Completed",
      value: COMPANY_INFO.stats.projects,
      sub: "High-Performance Websites",
      icon: Briefcase,
      color: "from-red-500 to-rose-600"
    },
    {
      label: "Happy Clients",
      value: COMPANY_INFO.stats.clients,
      sub: "Startups & Enterprises",
      icon: Users,
      color: "from-rose-600 to-pink-600"
    },
    {
      label: "Client Satisfaction",
      value: COMPANY_INFO.stats.satisfaction,
      sub: "Positive Reviews & Trust",
      icon: Award,
      color: "from-amber-500 to-orange-600"
    },
    {
      label: "Support Availability",
      value: COMPANY_INFO.stats.support,
      sub: "Dedicated Founders Support",
      icon: Clock,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Subtle grid line overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsList.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center ${
                  isVisible ? 'animate-in fade-in slide-in-from-bottom-4 duration-500' : 'opacity-0'
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stat.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-1">
                  {stat.value}
                </div>

                <div className="text-sm font-semibold text-gray-200 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-gray-400">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
