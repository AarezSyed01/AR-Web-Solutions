export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Business' | 'E-Commerce' | 'Landing Page' | 'Educational' | 'Restaurant' | 'Portfolio';
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  metrics?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  location?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'CMS' | 'Tools';
  icon: string;
  badgeColor?: string;
}

export interface IndustryItem {
  name: string;
  icon: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  serviceRequired: string;
  budget: string;
  message: string;
}
