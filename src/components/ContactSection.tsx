import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { ContactFormData } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  UserCheck,
  CheckCircle,
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    serviceRequired: 'Website Development',
    budget: '₹10,000 - ₹25,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }

    setSubmitted(true);

    // Format WhatsApp message
    const waText = `Hello AR Web Solutions! 👋\n\nI am interested in getting a website built.\n\n👤 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n✉️ *Email:* ${formData.email || 'N/A'}\n🏢 *Business Name:* ${formData.businessName || 'N/A'}\n🛠️ *Service Required:* ${formData.serviceRequired}\n💰 *Budget:* ${formData.budget}\n💬 *Message:* ${formData.message || 'I would like to discuss my project.'}\n\nPlease contact me for a free consultation!`;

    const encodedWa = encodeURIComponent(waText);
    const waUrl = `https://wa.me/${COMPANY_INFO.phone1Clean}?text=${encodedWa}`;

    // Redirect to WhatsApp after 800ms
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50/80 dark:bg-zinc-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/50 text-[#E63946] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] dark:text-white tracking-tight">
            Start Your Project With Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or want to grow your business online? Fill out the form or reach out to our founders directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Side: Founders & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Founders Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-black text-white border border-zinc-800 shadow-xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E63946]">
                <UserCheck className="w-4 h-4" />
                <span>Founding Leadership</span>
              </div>

              <h3 className="font-heading text-2xl font-bold">
                Talk Directly With Our Founders
              </h3>

              <div className="space-y-4 pt-2">
                {COMPANY_INFO.founders.map((founder) => (
                  <div key={founder.name} className="p-4 rounded-2xl bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-white text-base">{founder.name}</h4>
                      <p className="text-xs text-gray-400">{founder.role}</p>
                    </div>
                    <a
                      href={`tel:${founder.phone.replace(/[^0-9]/g, '')}`}
                      className="px-3 py-1.5 rounded-xl bg-[#E63946] hover:bg-[#c52a36] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 leading-relaxed border-t border-zinc-800 pt-4">
                We take pride in zero middleman communication. You speak directly with lead architects and developers.
              </p>
            </div>

            {/* Direct Details Box */}
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 space-y-6 shadow-sm">
              <h4 className="font-heading font-bold text-xl text-[#111111] dark:text-white">
                Contact Details
              </h4>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 text-[#E63946] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Phone Numbers</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                      <a href={`tel:${COMPANY_INFO.phone1Clean}`} className="text-sm font-bold text-gray-900 dark:text-white hover:text-[#E63946]">
                        {COMPANY_INFO.phone1}
                      </a>
                      <span className="hidden sm:inline text-gray-400">•</span>
                      <a href={`tel:${COMPANY_INFO.phone2Clean}`} className="text-sm font-bold text-gray-900 dark:text-white hover:text-[#E63946]">
                        {COMPANY_INFO.phone2}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 text-[#E63946] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Email Address</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-gray-900 dark:text-white hover:text-[#E63946]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950 text-[#E63946] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Office Location</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white block">
                      {COMPANY_INFO.location}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Serving clients locally in Latur & remotely across India.
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phone1Clean}?text=${encodeURIComponent('Hi AR Web Solutions! I need a website consultation.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 9699700601)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl space-y-6">
              
              <div className="border-b border-gray-100 dark:border-zinc-800 pb-4">
                <h3 className="font-heading text-2xl font-bold text-[#111111] dark:text-white">
                  Get a Free Consultation & Proposal
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Fill in your project requirements below. We will get back to you within 2 hours!
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-emerald-900 dark:text-emerald-200">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300">
                    Your request has been processed. Redirecting to WhatsApp to send your detailed proposal to <strong>+91 9699700601</strong>...
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Deshmukh"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#E63946]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 9876543210"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#E63946]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#E63946]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Deshmukh Enterprises"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#E63946]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#E63946]"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="E-Commerce Website">E-Commerce Store</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="SEO Optimization">SEO & Growth</option>
                        <option value="Website Maintenance">Website Maintenance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#E63946]"
                      >
                        <option value="Under ₹10,000">Under ₹10,000 (Basic Landing)</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Standard Business)</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (E-Commerce / Custom)</option>
                        <option value="₹50,000+">₹50,000+ (Enterprise Portal)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                      Project Details / Special Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals, preferred layout style, or deadline..."
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#E63946]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#E63946] hover:bg-[#c52a36] text-white font-semibold text-base shadow-lg shadow-[#E63946]/30 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message & Chat on WhatsApp</span>
                  </button>

                  <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-500" /> Response in &lt;2 hours</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#E63946]" /> 100% Free Consultation</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
