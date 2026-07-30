import React from 'react';
import { X, FileCode, CheckCircle } from 'lucide-react';

interface SeoModalProps {
  type: 'sitemap' | 'robots' | null;
  onClose: () => void;
}

export const SeoModals: React.FC<SeoModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://arwebsolutions.com/</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://arwebsolutions.com/#services</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://arwebsolutions.com/#portfolio</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://arwebsolutions.com/#about</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://arwebsolutions.com/#contact</loc>
    <lastmod>2026-07-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://arwebsolutions.com/sitemap.xml`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-4 text-left">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-[#E63946] flex items-center justify-center">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-[#111111] dark:text-white">
              {type === 'sitemap' ? 'Sitemap XML Preview' : 'Robots.txt Specification'}
            </h3>
            <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Verified Search Engine Standard
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-950 text-zinc-300 font-mono text-xs overflow-x-auto max-h-80 border border-zinc-800">
          <pre>{type === 'sitemap' ? sitemapXml : robotsTxt}</pre>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#E63946] text-white text-xs font-semibold"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
