import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="relative py-24 bg-accent-blue overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-lightBlue/50 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 -translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
            >
              Ready to Grow Your <br/> Business Smarter?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-blue-100 text-lg md:text-xl max-w-xl"
            >
              Let's craft a digital strategy tailored to your vision. Contact us today for a free strategy session.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 px-10 py-5 bg-dark text-white rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-white/20"
            >
              Start Your Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
