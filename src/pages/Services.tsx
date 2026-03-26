import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Share2, PenTool, Layout, Mail, PieChart, MousePointerClick } from 'lucide-react';
import { getPostsByCategory, FormattedPost } from '../lib/wp-api';

const icons = [Search, Share2, Layout, PieChart, MousePointerClick, PenTool, Mail];

export default function Services() {
  const [servicesData, setServicesData] = useState<FormattedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsByCategory('services', 20).then(data => {
      setServicesData(data);
      setLoading(false);
    });
  }, []);
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
            {loading ? (
              <div className="col-span-full flex justify-center py-24">
                <div className="w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : servicesData.length === 0 ? (
              <div className="col-span-full text-center py-24 text-gray-500">
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
                    className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-3xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group shadow-sm dark:shadow-none"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-blue to-accent-purple rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <ServiceIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 
                      className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                      dangerouslySetInnerHTML={{ __html: service.title }}
                    />
                    <p 
                      className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
                      dangerouslySetInnerHTML={{ __html: service.excerpt }}
                    />
                    {service.content && (
                      <div 
                        className="prose prose-sm dark:prose-invert max-w-none 
                        prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold
                        prose-p:text-gray-600 dark:prose-p:text-gray-400
                        [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:text-gray-700 dark:[&>ul>li]:text-gray-300 [&>ul>li]:mb-2
                        [&>ul>li::marker]:text-accent-blue"
                        dangerouslySetInnerHTML={{ __html: service.content }}
                      />
                    )}
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
