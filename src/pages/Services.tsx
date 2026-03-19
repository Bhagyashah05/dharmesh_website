import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, PenTool, Layout, Mail, PieChart, MousePointerClick } from 'lucide-react';

const detailedServices = [
  {
    icon: Search,
    title: 'SEO & Search Marketing',
    description: 'We conduct deep technical audits, keyword research, and white-hat link building to ensure you dominate SERPs and capture high-intent traffic.',
    features: ['Technical SEO Audit', 'Keyword Strategy', 'Competitor Analysis', 'Local SEO']
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Full-funnel social strategies that build community, increase brand awareness, and drive direct response conversions on platforms where your audience lives.',
    features: ['Content Calendar', 'Community Engagement', 'Paid Social Ads', 'Influencer Outreach']
  },
  {
    icon: Layout,
    title: 'Web Design & Development',
    description: 'Bespoke, blazing-fast, and responsive websites engineered for conversions. We build digital experiences that impress and perform.',
    features: ['UI/UX Design', 'Frontend Development', 'E-commerce Solutions', 'Performance Optimization']
  },
  {
    icon: PieChart,
    title: 'Data & Analytics',
    description: 'Stop guessing. We implement advanced tracking and custom dashboards so every decision is backed by hard, actionable data.',
    features: ['Google Analytics 4', 'Conversion Tracking', 'Custom Dashboards', 'A/B Testing']
  },
  {
    icon: MousePointerClick,
    title: 'Google Ads & PPC',
    description: 'Data-driven pay-per-click advertising that instantly connects your brand with high-intent searchers.',
    features: ['Search Ads', 'Display Network', 'Retargeting Campaigns', 'Conversion Tracking']
  }
];

export default function Services() {
  return (
    <div className="bg-white dark:bg-dark min-h-screen transition-colors duration-300">
      <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-accent-blue font-bold tracking-wider uppercase mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Our Digital Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            End-to-end digital solutions designed to scale your business, outpace competitors, and maximize your return on investment.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {detailedServices.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group shadow-sm dark:shadow-none"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-accent-blue" />
                      {feature}
                    </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
