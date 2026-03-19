import React from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, PenTool, Layout, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings and drive high-intent organic traffic to your digital storefront.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build brand loyalty and engage audiences across all major social platforms.',
  },
  {
    icon: PenTool,
    title: 'Content Strategy',
    description: 'Compelling storytelling that converts readers into long-term customers.',
  },
  {
    icon: Layout,
    title: 'Web Design & Dev',
    description: 'High-performance, pixel-perfect websites optimized for maximum conversions.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Personalized automated campaigns that nurture leads and drive revenue.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent-blue font-bold tracking-wider uppercase mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Comprehensive Digital<br />Solutions for Growth
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/services" className="group flex items-center gap-2 text-white hover:text-accent-blue transition-colors font-medium">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-blue/50 hover:bg-white/[0.07] transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-accent-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link to="/services" className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple group-hover:opacity-80 transition-opacity">
                Learn more &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
