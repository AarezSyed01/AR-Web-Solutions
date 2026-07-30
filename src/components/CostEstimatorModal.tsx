import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { X, Sparkles, Check, Send, Calculator, Plus, Minus } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [siteType, setSiteType] = useState<string>('Business Website');
  const [pages, setPages] = useState<number>(3);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  if (!isOpen) return null;

  const siteTypeOptions = [
    { name: 'Business Website', basePrice: 8000, days: 5 },
    { name: 'E-Commerce Store', basePrice: 18000, days: 10 },
    { name: 'Landing Page', basePrice: 4999, days: 3 },
    { name: 'Educational / Institute Portal', basePrice: 12000, days: 7 },
    { name: 'Personal / Portfolio Site', basePrice: 5999, days: 4 },
  ];

  const addonOptions = [
    { name: 'SEO Basic', price: 2000 },
    { name: 'Mobile Responsive', price: 0 },
    { name: 'Razorpay / PhonePe Integration', price: 3000 },
    { name: 'WhatsApp Direct Chat Button', price: 1000 },
    { name: 'Custom Admin Dashboard', price: 5000 },
    { name: 'Domain & Hosting Setup', price: 2500 },
  ];

  const toggleAddon = (name: string) => {
    if (selectedAddons.includes(name)) {
      setSelectedAddons(selectedAddons.filter(a => a !== name));
    } else {
      setSelectedAddons([...selectedAddons, name]);
    }
  };

  // Calculate Price strictly
  const currentType = siteTypeOptions.find(t => t.name === siteType) || siteTypeOptions[0];
  const extraPages = Math.max(0, pages - 3);
  const pagesCost = extraPages * 800;

  const selectedAddonItems = addonOptions.filter(a => selectedAddons.includes(a.name));
  const addonsCost = selectedAddonItems.reduce((acc, item) => acc + item.price, 0);

  const totalEstimate = currentType.basePrice + pagesCost + addonsCost;
  const estDays = currentType.days + Math.ceil(pages / 3);

  const handleSendQuoteToWhatsApp = () => {
    const addonNames = selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None';
    const text = `Hi AR Web Solutions! 👋\n\nI calculated an estimate using your website quote calculator:\n\n💻 *Type:* ${siteType}\n📄 *Pages:* ${pages}\n🧩 *Add-ons:* ${addonNames}\n\n💰 *Estimated Total:* ₹${totalEstimate.toLocaleString('en-IN')}\n⏱️ *Est. Timeline:* ${estDays} Days\n\nPlease confirm availability and proposal!`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.phone1Clean}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between bg-gray-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 text-[#E63946] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-[#111111] dark:text-white">
                Instant Website Cost Calculator
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Tailor your website features and get an instant cost estimate in INR (₹).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-100 dark:bg-zinc-800 text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body - Scrollable */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* Step 1: Website Type */}
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              1. Select Website Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {siteTypeOptions.map((opt) => (
                <button
                  key={opt.name}
                  type="button"
                  onClick={() => setSiteType(opt.name)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                    siteType === opt.name
                      ? 'border-[#E63946] bg-red-50/50 dark:bg-red-950/30 text-[#E63946] font-semibold'
                      : 'border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <span className="text-xs">{opt.name}</span>
                  <span className="text-[11px] font-bold">from ₹{opt.basePrice.toLocaleString('en-IN')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Number of Pages */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                2. Number of Pages
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">(3 pages included)</span>
                <span className="text-sm font-bold text-[#E63946]">{pages} Pages</span>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
              className="w-full accent-[#E63946]"
            />
            <div className="flex items-center justify-between text-[10px] text-gray-400 mt-1">
              <span>1 Page</span>
              <span>3 Pages (Base)</span>
              <span>20 Pages (+₹{((20 - 3) * 800).toLocaleString('en-IN')})</span>
            </div>
          </div>

          {/* Step 3: Add-ons */}
          <div>
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
              3. Additional Features & Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addonOptions.map((addon) => {
                const isSelected = selectedAddons.includes(addon.name);
                return (
                  <button
                    key={addon.name}
                    type="button"
                    onClick={() => toggleAddon(addon.name)}
                    className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-[#E63946] bg-red-50/50 dark:bg-red-950/30 text-gray-900 dark:text-white font-semibold'
                        : 'border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center ${isSelected ? 'bg-[#E63946] text-white' : 'border border-gray-300 dark:border-zinc-700'}`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{addon.name}</span>
                    </div>
                    <span className={`text-[10px] font-bold ${isSelected ? 'text-[#E63946]' : 'text-gray-500'}`}>
                      {addon.price === 0 ? 'FREE' : `+₹${addon.price.toLocaleString('en-IN')}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Transparent Live Cost Breakdown */}
          <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-800 text-xs space-y-1.5">
            <div className="font-bold text-gray-700 dark:text-gray-300 uppercase text-[10px] tracking-wider mb-1">
              Live Cost Breakdown
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>{siteType} (Base)</span>
              <span className="font-semibold text-gray-900 dark:text-white">₹{currentType.basePrice.toLocaleString('en-IN')}</span>
            </div>
            {pagesCost > 0 && (
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Extra Pages ({extraPages} x ₹800)</span>
                <span className="font-semibold text-[#E63946]">+₹{pagesCost.toLocaleString('en-IN')}</span>
              </div>
            )}
            {selectedAddonItems.map(item => (
              <div key={item.name} className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Add-on: {item.name}</span>
                <span className="font-semibold text-[#E63946]">
                  {item.price === 0 ? 'FREE' : `+₹${item.price.toLocaleString('en-IN')}`}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Footer Estimate Calculation Box */}
        <div className="p-6 bg-zinc-900 text-white border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider block">Estimated Investment</span>
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-extrabold text-3xl text-emerald-400">
                ₹{totalEstimate.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-gray-400">
                (~{estDays} Business Days)
              </span>
            </div>
          </div>

          <button
            onClick={handleSendQuoteToWhatsApp}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#E63946] hover:bg-[#c52a36] text-white font-semibold text-sm shadow-lg shadow-[#E63946]/30 flex items-center justify-center gap-2 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Lock Quote on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};

