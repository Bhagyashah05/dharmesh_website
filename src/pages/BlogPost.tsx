import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar } from 'lucide-react';
import { getPostBySlug, FormattedPost } from '../lib/wp-api';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<FormattedPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then((data) => {
        setPost(data);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark flex items-center justify-center pt-24">
        <div className="w-12 h-12 border-4 border-accent-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-dark flex flex-col items-center justify-center pt-24 text-center px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="px-6 py-3 bg-accent-blue text-white rounded-full font-medium hover:bg-accent-lightBlue transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-dark min-h-screen transition-colors duration-300 pb-24">
      <section className="pt-32 pb-16 relative overflow-hidden bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-white/5">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent-blue font-medium hover:text-accent-lightBlue transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-wider mb-6">
            <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-5xl -mt-10 relative z-20 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white"
        >
          <img src={post.image} alt="Featured" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <article className="container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className="prose prose-lg dark:prose-invert prose-blue max-w-none 
          prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white 
          prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed 
          prose-a:text-accent-blue hover:prose-a:text-accent-lightBlue 
          prose-img:rounded-2xl
          /* Some light reset styles for standard WP blocks */
          [&>p]:mb-6 [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:mt-8 [&>h3]:mb-4
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2
          [&>blockquote]:border-l-4 [&>blockquote]:border-accent-blue [&>blockquote]:pl-6 [&>blockquote]:italic
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
