import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Data-Driven Results',
    description: 'We rely on analytics and hard data, not guesswork, to drive every marketing decision and ensure maximum ROI.',
  },
  {
    icon: Target,
    title: 'Customized Strategies',
    description: 'No cookie-cutter solutions. We tailor our strategies specifically to your unique business goals and target audience.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work directly with industry veterans who possess deep knowledge across all digital marketing disciplines.',
  },
  {
    icon: Zap,
    title: 'High Conversion Focus',
    description: 'Traffic without conversions is meaningless. We build funnels optimized to turn clicks into paying customers.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent-blue font-bold tracking-wider uppercase mb-4 block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              We Don't Just Market.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">
                We Engineer Growth.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Partnering with MediaF5 Pro means gaining a dedicated team of digital experts committed to dominating your niche. We blend creative thinking with technical superiority.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 w-fit">
                <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <span className="text-accent-blue font-bold text-xl">100%</span>
                </div>
                <div>
                  <p className="text-white font-bold">Client Satisfaction</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Guaranteed</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="bg-dark p-8 rounded-2xl border border-white/5 hover:border-accent-blue/50 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
