import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getPosts, FormattedPost } from '../lib/wp-api';

export default function Blog() {
  const [posts, setPosts] = useState<FormattedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data.posts);
      setLoading(false);
    });
  }, []);
  return (
    <div className="bg-white dark:bg-dark min-h-screen transition-colors duration-300">
      <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Insights & <span className="text-accent-blue">News</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            The latest strategies, trends, and case studies driving digital growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading ? (
              <div className="col-span-full flex justify-center py-24">
                <div className="w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : posts.length === 0 ? (
              <div className="col-span-full text-center py-24 text-gray-500">No posts found on the server.</div>
            ) : (
              posts.map((post, idx) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="block group">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:bg-gray-50 dark:hover:bg-white/10 transition-colors cursor-pointer flex flex-col h-full shadow-sm dark:shadow-none"
                  >
                    <div className="overflow-hidden aspect-video relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-accent-lightBlue uppercase tracking-wider">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <h3 
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent-lightBlue transition-colors group-hover:underline decoration-accent-blue/50 underline-offset-4 flex-grow"
                        dangerouslySetInnerHTML={{ __html: post.title }}
                      />

                      <div className="flex items-center gap-2 text-accent-blue font-medium group-hover:gap-4 transition-all w-fit mt-auto">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
