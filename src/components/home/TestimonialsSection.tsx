import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Growthrasta completely transformed our online presence. Our organic traffic increased by 300% in just 6 months, and our conversion rate doubled.",
    name: "Sarah Jenkins",
    role: "CMO, TechNova Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    text: "Their strategic approach to our social media campaigns led to our most successful product launch to date. The ROI has been incredible.",
    name: "David Chen",
    role: "Founder, Elevate Fitness",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    text: "Professional, data-driven, and highly creative. They don't just execute tasks; they act as a true extension of our internal marketing team.",
    name: "Elena Rodriguez",
    role: "VP Marketing, Global Trade Co.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 mx-auto text-gray-900/5 dark:text-white/10 mb-8" />
          
          <div className="relative min-h-[300px] md:min-h-[200px] mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-12 rounded-3xl relative shadow-sm dark:shadow-none"
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl opacity-50 block dark:hidden"></div>
                </div>
                <Quote className="w-16 h-16 mx-auto text-gray-200 dark:text-white/10 mb-8 absolute top-8 left-8" /> {/* Adjusted Quote icon position and color */}
                <p className="text-2xl md:text-4xl font-medium leading-relaxed mb-10 text-gray-800 dark:text-white relative z-10"> {/* Adjusted text color */}
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-4 relative z-10"> {/* Added relative z-10 */}
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent-blue"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-accent-blue font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12 md:mt-24">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent-blue shadow-sm dark:shadow-none hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white hover:bg-accent-blue shadow-sm dark:shadow-none hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
