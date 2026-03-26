import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPosts, FormattedPost } from '../../lib/wp-api';

export default function BlogPreviewSection() {
  const [posts, setPosts] = useState<FormattedPost[]>([]);

  useEffect(() => {
    // Only fetch 3 posts for the preview section
    getPosts(1, 3).then((data) => {
      setPosts(data.posts);
    });
  }, []);
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#050505] relative border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent-blue font-bold tracking-wider uppercase mb-4 block"
            >
              Latest Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white"
            >
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Insights</span>
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Stay ahead of the curve with our expert analyses, strategic insights, and industry news.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/blog" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-dark transition-all font-medium inline-block">
              Read Our Blog
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group cursor-pointer flex flex-col h-full shadow-sm dark:shadow-none block">
                <div className="overflow-hidden aspect-video mb-6 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/20">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 
                    className="text-2xl font-bold leading-tight mb-4 group-hover:text-accent-blue transition-colors text-gray-900 dark:text-white flex-grow"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <div className="flex items-center gap-2 text-accent-lightBlue font-medium group-hover:gap-4 transition-all w-fit mt-auto">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
