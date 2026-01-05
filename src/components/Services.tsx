'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';

export default function Services() {
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
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 text-sm font-semibold text-pink-300 tracking-widest uppercase mb-8">
              Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Services & Skills
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
              Specialized in building modern, scalable digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-xl bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 h-full"
              >
                <div className="text-5xl md:text-6xl mb-6">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
