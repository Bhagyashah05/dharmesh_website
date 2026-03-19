import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const allPosts = [
  ...Array(6).fill(null).map((_, i) => ({
    id: i,
    title: `Insightful Marketing Article ${i + 1}`,
    date: `March ${10 + i}, 2026`,
    category: 'Strategy',
  }))
];

export default function Blog() {
  return (
    <div className="bg-dark min-h-screen">
      <section className="py-24 relative overflow-hidden bg-[#050505] border-b border-white/5">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Insights & <span className="text-accent-blue">News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The latest strategies, trends, and case studies driving digital growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer bg-white/5 rounded-2xl border border-white/5 hover:border-accent-blue/30 transition-all overflow-hidden"
              >
                <div className="overflow-hidden aspect-video relative">
                  <img
                    src={`https://source.unsplash.com/random/600x400?tech,business&sig=${post.id}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-accent-lightBlue uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-tight mb-6 group-hover:text-white text-gray-200 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent-blue font-medium group-hover:gap-4 transition-all w-fit">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
