import React from 'react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  MessageSquare,
  Github,
  ArrowUpRight,
  Shield,
  FileCode
} from 'lucide-react';

interface FooterProps {
  onOpenSeoModal: (type: 'sitemap' | 'robots') => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSeoModal, onOpenEstimator }) => {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80 text-left">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block">
              <Logo size="md" />
            </a>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pr-4">
              {COMPANY_INFO.mission}
            </p>

            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800/80 text-xs text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Location: <strong>{COMPANY_INFO.location}</strong></span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.phone1Clean}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-emerald-600 border border-zinc-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-pink-600 border border-zinc-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-blue-600 border border-zinc-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-sky-600 border border-zinc-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-700 border border-zinc-800 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li><a href="#home" className="hover:text-[#E63946] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#E63946] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#E63946] transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-[#E63946] transition-colors">Our Process</a></li>
              <li><a href="#about" className="hover:text-[#E63946] transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-[#E63946] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#E63946] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#E63946] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Web Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#E63946] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Tools */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E63946]" />
                <span>{COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E63946]" />
                <span>{COMPANY_INFO.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
                <span>{COMPANY_INFO.location}</span>
              </p>
            </div>

            <button
              onClick={onOpenEstimator}
              className="w-full py-2.5 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-[#E63946] flex items-center justify-between transition-colors"
            >
              <span>Calculate Project Cost</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="pt-1 flex items-center gap-3 text-[11px] text-gray-500">
              <button onClick={() => onOpenSeoModal('sitemap')} className="hover:text-gray-300 flex items-center gap-1">
                <FileCode className="w-3 h-3" /> Sitemap.xml
              </button>
              <span>•</span>
              <button onClick={() => onOpenSeoModal('robots')} className="hover:text-gray-300 flex items-center gap-1">
                <Shield className="w-3 h-3" /> Robots.txt
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 AR Web Solutions. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span>Co-founded by</span>
            <strong className="text-gray-300">Aarez Syed</strong> & <strong className="text-gray-300">Raiyan Shaikh</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};
