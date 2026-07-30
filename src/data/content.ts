import { ServiceItem, PortfolioProject, Testimonial, FAQItem, TechStackItem, IndustryItem } from '../types';

export const COMPANY_INFO = {
  name: "AR Web Solutions",
  tagline: "We Design • We Develop • We Grow",
  mission: "Helping businesses establish a strong online presence through beautiful, high-performance websites that generate leads and grow businesses.",
  phone1: "+91 9699700601",
  phone2: "+91 8855802532",
  phone1Clean: "919699700601",
  phone2Clean: "918855802532",
  email: "info.arwebsolutions@gmail.com",
  location: "Latur, Maharashtra, India",
  fullAddress: "AR Web Solutions, Main Road, Latur, Maharashtra - 413512, India",
  founders: [
    { name: "Aarez Syed", role: "Co-Founder & Lead Developer", phone: "+91 9699700601" },
    { name: "Raiyan Shaikh", role: "Co-Founder & Lead UI/UX Designer", phone: "+91 8855802532" }
  ],
  stats: {
    projects: "50+",
    clients: "40+",
    satisfaction: "100%",
    support: "24/7"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Website Development",
    category: "Development",
    description: "Tailor-made, lightning-fast websites engineered to elevate your brand authority and capture leads.",
    icon: "Globe",
    popular: true,
    features: [
      "Business & Company Websites",
      "Personal & Executive Portfolios",
      "Educational & Institute Portals",
      "Custom Web Applications",
      "Dynamic Content Management"
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce Websites",
    category: "Development",
    description: "Robust online stores with seamless payment gateway integration and optimized checkout funnels.",
    icon: "ShoppingBag",
    popular: true,
    features: [
      "Online Product Storefronts",
      "Categorized Product Catalogs",
      "Indian Payment Gateways (Razorpay/PhonePe/UPI)",
      "Order & Inventory Management",
      "Cart & Checkout Optimization"
    ]
  },
  {
    id: "landing-page",
    title: "Landing Pages",
    category: "Marketing",
    description: "High-converting, laser-focused landing pages designed for Google Ads, Instagram, and marketing campaigns.",
    icon: "Rocket",
    features: [
      "High-Conversion Copy Layouts",
      "Lead Capture Forms & WhatsApp CTA",
      "Fast Load Times (<1.5s)",
      "A/B Testing Ready",
      "Analytics & Pixel Tracking Setup"
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    category: "Design",
    description: "Modern, intuitive interfaces that delight users and create memorable brand experiences.",
    icon: "Palette",
    features: [
      "Interactive Figma Prototypes",
      "User Journey & Wireframing",
      "Mobile-First Responsive Layouts",
      "Design Systems & Brand Styleguides",
      "Micro-Interactions & Motion"
    ]
  },
  {
    id: "redesign",
    title: "Website Redesign",
    category: "Optimization",
    description: "Transform outdated websites into modern, sleek digital powerhouses that stay ahead of competitors.",
    icon: "RefreshCw",
    features: [
      "Modern Minimalist Aesthetics",
      "Mobile Responsiveness Overhaul",
      "Speed & Core Web Vitals Optimization",
      "Content & SEO Structure Upgrade",
      "Zero Downtime Migration"
    ]
  },
  {
    id: "responsive",
    title: "Responsive Design",
    category: "Design",
    description: "Flawless rendering and pixel-perfect responsiveness across every screen size.",
    icon: "Smartphone",
    features: [
      "Ultra-Wide Desktop Screens",
      "Standard Laptops & MacBooks",
      "iPads & Android Tablets",
      "iOS & Android Mobile Devices",
      "Touch-Friendly Navigation"
    ]
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    category: "Support",
    description: "Hassle-free, ongoing security, backups, content updates, and technical performance care.",
    icon: "ShieldCheck",
    features: [
      "Regular Content & Image Updates",
      "Bug Fixes & Technical Patches",
      "Performance & Speed Monitoring",
      "Malware Prevention & Security Scans",
      "Automated Weekly Backups"
    ]
  },
  {
    id: "seo",
    title: "SEO Optimization",
    category: "Marketing",
    description: "Search engine optimization strategies to rank higher on Google search and drive organic traffic.",
    icon: "TrendingUp",
    popular: true,
    features: [
      "On-Page & Technical SEO",
      "Page Speed & Core Web Vitals Optimization",
      "Meta Tags, Schema & Structured Data",
      "Google Search Console & Maps Setup",
      "Local Business Ranking Optimization"
    ]
  },
  {
    id: "hosting",
    title: "Website Hosting Support",
    category: "Support",
    description: "Complete setup and configuration for domain, cloud hosting, SSL certificates, and business email.",
    icon: "Server",
    features: [
      "Domain Name Registration Setup",
      "High-Speed Cloud Hosting Setup",
      "Free SSL Certificate Installation",
      "Professional Business Email Setup",
      "DNS Record & MX Configuration"
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  { name: "Startups", icon: "Rocket", description: "SaaS products, tech ventures & MVP landing pages" },
  { name: "Small Businesses", icon: "Store", description: "Local shops, service providers & suppliers" },
  { name: "Restaurants", icon: "Utensils", description: "Menus, online orders & table reservations" },
  { name: "Cafes", icon: "Coffee", description: "Aesthetic cafe branding & digital menu boards" },
  { name: "Hotels", icon: "Building2", description: "Room showcases & direct booking integrations" },
  { name: "Educational Institutes", icon: "GraduationCap", description: "Schools, colleges, student admissions portals" },
  { name: "Coaching Classes", icon: "BookOpen", description: "Competitive exam coaching & course details" },
  { name: "Doctors", icon: "Stethoscope", description: "Medical profiles & online appointment booking" },
  { name: "Hospitals", icon: "Activity", description: "Specialty services, emergency care & doctor schedules" },
  { name: "Lawyers", icon: "Scale", description: "Legal consultation portals & case enquiry forms" },
  { name: "Real Estate", icon: "Home", description: "Property listings, virtual tours & buyer leads" },
  { name: "Event Management", icon: "Calendar", description: "Wedding planners, corporate events & gallery" },
  { name: "Packers & Movers", icon: "Truck", description: "Relocation quote calculators & service areas" },
  { name: "Travel Agencies", icon: "Plane", description: "Tour packages, itinerary booking & inquiry forms" },
  { name: "Photographers", icon: "Camera", description: "High-resolution portfolios & booking calendars" },
  { name: "Salons", icon: "Scissors", description: "Beauty service price lists & online appointments" },
  { name: "Gyms", icon: "Dumbbell", description: "Fitness plans, trainer profiles & memberships" },
  { name: "NGOs", icon: "Heart", description: "Cause awareness, donor forms & volunteer drives" },
  { name: "Freelancers", icon: "UserCheck", description: "Personal branding & direct client portfolios" },
  { name: "Corporate Businesses", icon: "Briefcase", description: "Multi-branch corporate sites & B2B portals" }
];

export const WHY_CHOOSE_US = [
  { title: "Modern Design", desc: "Minimalist, luxury aesthetic inspired by Apple & Framer guidelines." },
  { title: "Mobile Responsive", desc: "Pixel-perfect layouts optimized for every smartphone and tablet." },
  { title: "SEO Friendly", desc: "Built with SEO best practices so Google finds and ranks your business easily." },
  { title: "Fast Loading", desc: "Lightweight architecture guaranteeing sub-2-second page loads." },
  { title: "Secure", desc: "Free SSL protection, anti-malware measures, and safe data handling." },
  { title: "Affordable Pricing", desc: "Premium quality tailored to local Indian business budgets." },
  { title: "Custom Development", desc: "Clean, hand-crafted code without unnecessary bloated plugins." },
  { title: "Professional UI/UX", desc: "Designed for effortless user navigation and maximum lead conversion." },
  { title: "Lifetime Support Guidance", desc: "Dedicated ongoing technical consultation whenever you need help." },
  { title: "Dedicated Customer Support", desc: "Direct 24/7 phone and WhatsApp assistance with our founders." }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Discussion",
    desc: "We analyze your business goals, target audience, brand identity, and technical preferences.",
    icon: "MessageSquare"
  },
  {
    step: "02",
    title: "Planning",
    desc: "We draft the sitemap, content hierarchy, conversion flow, and technology roadmap.",
    icon: "FileText"
  },
  {
    step: "03",
    title: "UI Design",
    desc: "We craft elegant, modern Figma mockups with responsive layouts for your approval.",
    icon: "Layout"
  },
  {
    step: "04",
    title: "Development",
    desc: "Our engineers write clean, fast, custom code powering interactive features.",
    icon: "Code"
  },
  {
    step: "05",
    title: "Testing",
    desc: "Rigorously testing speed, cross-browser compatibility, mobile screens, and contact forms.",
    icon: "CheckCircle2"
  },
  {
    step: "06",
    title: "Launch",
    desc: "Deploying your website live on cloud hosting, setting up domain, SSL & search indexing.",
    icon: "Send"
  },
  {
    step: "07",
    title: "Support",
    desc: "Continuous technical care, performance monitoring, and guidance as your business grows.",
    icon: "Headphones"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-1",
    title: "Elite Corporate Business Web Platform",
    category: "Business",
    description: "A luxury corporate website built for an industrial manufacturer in Maharashtra featuring product catalogs and automated lead generation.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Node.js"],
    liveUrl: "https://example.com/corporate-demo",
    metrics: "+140% Qualified Leads"
  },
  {
    id: "proj-2",
    title: "Gourmet Restaurant & Cafe Digital Portal",
    category: "Restaurant",
    description: "Interactive digital menu, online table reservation, and WhatsApp ordering system for a popular dining lounge in Latur.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Express", "Tailwind CSS", "WhatsApp API"],
    liveUrl: "https://example.com/restaurant-demo",
    metrics: "250+ Daily Menu Views"
  },
  {
    id: "proj-3",
    title: "Grand Event & Wedding Planner Showcase",
    category: "Landing Page",
    description: "High-converting visual portfolio showcasing luxury wedding setups, video highlights, and instant quote enquiry form.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Motion", "Tailwind CSS", "Firebase"],
    liveUrl: "https://example.com/event-demo",
    metrics: "3.2x Campaign ROI"
  },
  {
    id: "proj-4",
    title: "Apex Educational Academy & Coaching Portal",
    category: "Educational",
    description: "Comprehensive portal for student admissions, course curricula, online result checking, and faculty profiles.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
    liveUrl: "https://example.com/edu-demo",
    metrics: "1,200+ Admissions Enquiries"
  },
  {
    id: "proj-5",
    title: "Creative Architect & Designer Portfolio",
    category: "Portfolio",
    description: "Sleek dark-mode portfolio highlighting architectural blueprints, 3D renderings, and client testimonial sliders.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com/architect-demo",
    metrics: "99/100 Lighthouse Performance"
  },
  {
    id: "proj-6",
    title: "Luxe Fashion & Apparel E-Commerce Store",
    category: "E-Commerce",
    description: "Full-fledged shopping platform with Razorpay integration, product filters, coupon codes, and automated invoice delivery.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Express", "Node.js", "Razorpay UPI", "MongoDB"],
    liveUrl: "https://example.com/store-demo",
    metrics: "₹4.5L+ Monthly Sales"
  },
  {
    id: "proj-7",
    title: "High-Converting Real Estate Lead Funnel",
    category: "Landing Page",
    description: "Laser-focused landing page for premium residential apartment booking with interactive floor plans and call-backs.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    technologies: ["React", "Tailwind CSS", "Google Ads Pixel"],
    liveUrl: "https://example.com/realestate-demo",
    metrics: "18.5% Lead Conversion"
  }
];

export const TECHNOLOGIES: TechStackItem[] = [
  { name: "HTML5", category: "Frontend", icon: "FileCode", badgeColor: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
  { name: "CSS3", category: "Frontend", icon: "Palette", badgeColor: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
  { name: "JavaScript", category: "Frontend", icon: "Code2", badgeColor: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20" },
  { name: "React", category: "Frontend", icon: "Atom", badgeColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
  { name: "Node.js", category: "Backend", icon: "Server", badgeColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
  { name: "Express.js", category: "Backend", icon: "Cpu", badgeColor: "text-gray-700 dark:text-gray-300 bg-gray-500/10 border-gray-500/20" },
  { name: "MongoDB", category: "Database", icon: "Database", badgeColor: "text-green-600 bg-green-600/10 border-green-600/20" },
  { name: "Firebase", category: "Database", icon: "Flame", badgeColor: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  { name: "PHP", category: "Backend", icon: "Terminal", badgeColor: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
  { name: "MySQL", category: "Database", icon: "HardDrive", badgeColor: "text-sky-600 bg-sky-600/10 border-sky-600/20" },
  { name: "WordPress", category: "CMS", icon: "LayoutGrid", badgeColor: "text-blue-600 bg-blue-600/10 border-blue-600/20" },
  { name: "Bootstrap", category: "Frontend", icon: "Layers", badgeColor: "text-purple-600 bg-purple-600/10 border-purple-600/20" },
  { name: "Tailwind CSS", category: "Frontend", icon: "Wind", badgeColor: "text-teal-500 bg-teal-500/10 border-teal-500/20" },
  { name: "Git", category: "Tools", icon: "GitBranch", badgeColor: "text-red-500 bg-red-500/10 border-red-500/20" },
  { name: "GitHub", category: "Tools", icon: "Github", badgeColor: "text-zinc-800 dark:text-zinc-200 bg-zinc-500/10 border-zinc-500/20" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Rahul Deshmukh",
    role: "Managing Director",
    company: "Deshmukh Industrial Corporation",
    location: "Latur, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "AR Web Solutions created a world-class website for our business. Aarez and Raiyan were extremely supportive and delivered before our deadline. Our online inquiries have doubled!"
  },
  {
    id: "test-2",
    name: "Priya Patil",
    role: "Founder",
    company: "Bliss Beauty Salon & Spa",
    location: "Pune, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "The mobile-first design and online appointment booking system they built revolutionized our salon bookings. Beautiful work, highly professional team!"
  },
  {
    id: "test-3",
    name: "Vikram Sharma",
    role: "Director",
    company: "Sharma Coaching Classes",
    location: "Latur, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "We needed a website for student course details and admissions. AR Web Solutions handled everything from domain setup to Google search ranking. 10/10 service!"
  },
  {
    id: "test-4",
    name: "Ananya Joshi",
    role: "Owner",
    company: "Saffron Spices & Cafe",
    location: "Sambhaji Nagar, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "The QR-code dynamic menu and website look so premium. Our cafe customers love browsing our menu online. Thank you AR Web Solutions!"
  },
  {
    id: "test-5",
    name: "Sameer Kulkarni",
    role: "Principal Architect",
    company: "Kulkarni & Associates Architects",
    location: "Mumbai, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "Minimalist, sleek, and fast loading. The team captured our luxury architectural aesthetic perfectly. They are true masters of web design."
  },
  {
    id: "test-6",
    name: "Rajesh Mehta",
    role: "Proprietor",
    company: "Mehta Logistics & Packers",
    location: "Latur, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    content: "Affordable pricing without compromising quality. The WhatsApp integration makes it effortless for customers to request quotes directly. Excellent support!"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does a website take to build?",
    answer: "A standard business website or landing page typically takes 5 to 7 business days. Complex e-commerce platforms or custom web applications take 2 to 3 weeks depending on features and content readiness.",
    category: "Timeline & Delivery"
  },
  {
    question: "How much does a website cost?",
    answer: "Our website packages are highly affordable and tailored to Indian small businesses, startups, and enterprises. Pricing depends on your specific requirements (number of pages, e-commerce features, custom animations). Contact us or use our Quote Estimator for an instant estimate!",
    category: "Pricing"
  },
  {
    question: "Will my website be mobile responsive?",
    answer: "Yes, 100%! Every website built by AR Web Solutions is engineered with a mobile-first philosophy, ensuring flawless rendering on smartphones, tablets, laptops, and ultra-wide desktops.",
    category: "Design & Tech"
  },
  {
    question: "Do you provide SEO optimization?",
    answer: "Yes! All our websites come with fundamental On-Page SEO, fast loading speed optimization, meta tags, schema structured data, and Google Search Console indexing setup so your business can rank on search engines.",
    category: "SEO & Growth"
  },
  {
    question: "Can I update my website content later?",
    answer: "Absolutely! We provide user-friendly Content Management Systems (CMS) or simple administration panels so you can easily edit text, images, products, and blogs without typing a single line of code.",
    category: "Maintenance"
  },
  {
    question: "Do you provide domain, hosting, and business emails?",
    answer: "Yes, we offer complete end-to-end hosting support! We assist with domain registration, cloud hosting configuration, free SSL security setup, and professional business email setup (e.g., info@yourbrand.com).",
    category: "Hosting & Setup"
  }
];
