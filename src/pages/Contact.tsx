import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { getPageBySlug } from '../lib/wp-api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [pageData, setPageData] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    getPageBySlug('contact').then(setPageData);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white dark:bg-dark min-h-screen transition-colors duration-300">
      <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white"
            dangerouslySetInnerHTML={{ __html: pageData?.title || `Let's Build <span class="text-accent-blue">Together</span>` }}
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto prose prose-p:text-gray-600 dark:prose-p:text-gray-400"
            dangerouslySetInnerHTML={{ __html: pageData ? pageData.content : '<p>Ready to scale your business? Drop us a line and let\'s discuss your next big project.</p>' }}
          />
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Get In Touch</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-lightBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Headquarters</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Ahmedabad, Gujarat<br/>India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-lightBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">96017 99398<br/>Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-lightBlue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">hello@growthrasta.com<br/>support@growthrasta.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center overflow-hidden relative group mt-12 shadow-sm dark:shadow-none">
                <div className="absolute inset-0 bg-accent-blue/5 group-hover:bg-transparent transition-colors z-10" />
                <span className="text-gray-500 font-medium z-0">Interactive Map Integration</span>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Company (Optional)</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors text-gray-900 dark:text-white"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors text-gray-900 dark:text-white resize-none"
                    placeholder="Tell us about your goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white rounded-xl font-bold hover:bg-accent-lightBlue transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === 'submitting' ? (
                    <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    'Message Sent Successfully!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
