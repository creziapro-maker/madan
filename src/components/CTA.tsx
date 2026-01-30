'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 flex justify-center">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 sm:p-16 md:p-20 lg:p-24 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
              >
                Let&apos;s Work Together
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Ready to bring your vision to life? I&apos;m available for consulting, product development, and strategic partnerships.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 sm:px-12 sm:py-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-base sm:text-lg hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  Start a Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-5 sm:px-12 sm:py-6 rounded-xl bg-gray-900/50 text-white font-bold text-base sm:text-lg border border-gray-700 hover:border-purple-500/50 hover:bg-gray-900 transition-all"
                >
                  Schedule Call
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 pt-10 border-t border-gray-700/50 text-sm text-gray-400"
              >
                <p>Email: hello@madanrajendra.dev</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
