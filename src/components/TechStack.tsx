'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/lib/constants';

export default function TechStack() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 flex justify-center">
        <div className="w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-sm font-semibold text-cyan-300 tracking-widest uppercase mb-8">
              Tech Stack
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Technologies
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
              Modern tools and frameworks for building scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {TECH_STACK.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative p-5 md:p-6 rounded-lg bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{tech.category}</p>
                <h3 className="text-sm md:text-base font-bold text-white group-hover:text-cyan-400 transition-colors">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
