import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../layout/Navbar';
import { getPostsByCategory, FormattedPost } from '../../lib/wp-api';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState<FormattedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsByCategory('portfolio', 6).then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))].filter(Boolean);

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section className="py-24 bg-white dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-bold tracking-wider uppercase mb-4 block"
          >
            Featured Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            We Build Digital Masterpieces
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-wrap justify-center gap-2 bg-gray-50 dark:bg-white/5 p-1.5 rounded-2xl md:rounded-full mb-12 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-accent-blue text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {loading ? (
              <div className="col-span-full flex justify-center py-24">
                <div className="w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : projects.length === 0 ? (
              <div className="col-span-full text-center py-24 text-gray-500">
                No portfolio items found. Add some posts in the "Portfolio" category in WordPress!
              </div>
            ) : (
              filteredProjects.map((project) => {
                const isDesigns = project.title.toLowerCase().includes('design');
                const href = isDesigns ? "https://drive.google.com/drive/folders/1wSp67cWGfwfTn17-eleVraQi8mhk0APF" : undefined;
                
                return (
                <motion.a
                  key={project.id}
                  href={href}
                  target={isDesigns ? "_blank" : "_self"}
                  rel={isDesigns ? "noopener noreferrer" : ""}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 cursor-pointer block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                    <div>
                      <span className="text-accent-lightBlue font-medium tracking-wide text-sm mb-2 block">
                        {project.category}
                      </span>
                      <h3 
                        className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors mb-2"
                        dangerouslySetInnerHTML={{ __html: project.title }}
                      />
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="text-white font-medium whitespace-nowrap hidden sm:block">
                        {isDesigns ? 'View Designs' : 'View Project'}
                      </span>
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  </motion.a>
              );
            })
            )}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:text-accent-lightBlue transition-colors group"
          >
            Explore Full Portfolio
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
