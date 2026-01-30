'use client';

import { motion } from 'framer-motion';
import { TIMELINE } from '@/lib/constants';

export default function Timeline() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 flex justify-center">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-sm font-semibold text-cyan-300 tracking-widest uppercase mb-8">
              Timeline
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              My Journey
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
              Key milestones in building innovative products and companies
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-10">
            {TIMELINE.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-sm"
                  >
                    {idx + 1}
                  </motion.div>
                  {idx !== TIMELINE.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-purple-600 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{event.title}</h3>
                    <span className="text-sm text-purple-400 font-semibold">{event.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
