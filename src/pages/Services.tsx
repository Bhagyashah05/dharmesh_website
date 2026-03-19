import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, PenTool, Layout, Mail, PieChart } from 'lucide-react';

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
  }
];

export default function Services() {
  return (
    <div className="bg-dark min-h-screen">
      <section className="py-24 relative overflow-hidden bg-[#050505]">
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
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
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
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 hover:border-accent-blue flex flex-col h-full transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-8">
                  <service.icon className="w-8 h-8 text-accent-blue" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div>
                  <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-3" />
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
