import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, PenTool, Layout, Mail, ArrowRight, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPostsByCategory, FormattedPost } from '../../lib/wp-api';

const icons = [Search, Share2, PenTool, Layout, Mail, MousePointerClick];

export default function ServicesSection() {
  const [servicesData, setServicesData] = useState<FormattedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsByCategory('services', 6).then(data => {
      setServicesData(data);
      setLoading(false);
    });
  }, []);
  return (
    <section className="py-24 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300">
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
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Comprehensive Digital<br />Solutions for Growth
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We provide a comprehensive suite of digital marketing services designed to elevate your brand and drive measurable growth.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/services" className="group flex items-center gap-2 text-gray-900 dark:text-white hover:text-accent-blue transition-colors font-medium">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full flex justify-center py-12">
              <div className="w-10 h-10 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : servicesData.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No services found. Add posts in the "Services" category in WordPress!
            </div>
          ) : (
            servicesData.map((service, idx) => {
              const ServiceIcon = icons[idx % icons.length];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group cursor-pointer shadow-sm dark:shadow-none"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <ServiceIcon className="w-7 h-7 text-accent-blue" />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-4 text-gray-900 dark:text-white"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                  <p 
                    className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: service.excerpt }}
                  />
                  <Link to="/services" className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple group-hover:opacity-80 transition-opacity">
                    Learn more &rarr;
                  </Link>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
