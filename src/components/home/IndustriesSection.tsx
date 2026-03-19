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
    <section className="py-24 bg-[#050505] border-y border-white/5 relative">
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Industries We Empower
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            We have specialized frameworks adapted to the nuances of specific industry sectors, delivering targeted and highly-effective growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-accent-blue/10 hover:border-accent-blue/50 transition-all cursor-pointer group"
            >
              <ind.icon className="w-10 h-10 text-gray-500 group-hover:text-accent-lightBlue mb-4 transition-colors" />
              <span className="text-sm font-medium text-center text-gray-400 group-hover:text-white transition-colors">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
