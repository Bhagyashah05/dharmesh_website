import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Marcus Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Serena Davis', role: 'Chief Marketing Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
  { name: 'Liam Chen', role: 'Head of Development', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  { name: 'Emily Carter', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
];

export default function About() {
  return (
    <div className="bg-dark min-h-screen">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">MediaF5 Pro</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A collective of digital pioneers dedicated to pushing the boundaries of what's possible in marketing and tech.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
              alt="Team collaborating" 
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Founded in 2015, we recognized early on that the digital landscape was becoming fragmented. Brands needed a unified approach that combined cutting-edge technology with creative marketing strategies.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Today, MediaF5 Pro stands as an award-winning agency, helping Fortune 500 companies and agile startups alike achieve unprecedented growth through our proprietary data-driven frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Leadership</h2>
            <p className="text-gray-400">The visionaries behind our success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group text-center"
              >
                <div className="overflow-hidden rounded-2xl aspect-[3/4] mb-4 relative border border-white/10">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-accent-blue">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
