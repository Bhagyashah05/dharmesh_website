import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Building2, ShoppingBag, Landmark, GraduationCap, Utensils } from 'lucide-react';

const industries = [
  { name: 'Healthcare & Medical', icon: HeartPulse },
  { name: 'Real Estate', icon: Building2 },
  { name: 'E-commerce', icon: ShoppingBag },
  { name: 'Finance & Legal', icon: Landmark },
  { name: 'Education', icon: GraduationCap },
  { name: 'Hospitality', icon: Utensils },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#050505] relative border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Transform</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Our proven strategies adapt to diverse markets, delivering exceptional results across specialized sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-white/10 transition-colors group cursor-pointer flex flex-col items-center shadow-sm dark:shadow-none"
            >
              <ind.icon className="w-10 h-10 text-gray-500 group-hover:text-accent-lightBlue mb-4 transition-colors" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
