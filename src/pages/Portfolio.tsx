import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../components/layout/Navbar';

const categories = ['All', 'Web Design', 'Marketing', 'Branding', 'SEO'];

const allProjects = [
  ...Array(8).fill(null).map((_, i) => ({
    id: i,
    title: `Project Title ${i + 1}`,
    category: categories[(i % 4) + 1],
    image: `https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=800`
  }))
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = allProjects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="bg-dark min-h-screen">
      <section className="py-24 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-accent-purple/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            A showcase of digital experiences we've engineered for leading brands.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full border transition-all font-medium",
                  activeCategory === cat
                    ? "bg-accent-blue border-accent-blue text-white"
                    : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-white/5 cursor-pointer border border-white/5"
                >
                  <img
                    src={`https://source.unsplash.com/random/800x600?${project.category.toLowerCase().replace(' ', '')}&sig=${project.id}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                    <div>
                      <span className="text-accent-lightBlue font-medium tracking-wide text-sm mb-2 block uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-bold text-white group-hover:text-accent-blue transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
