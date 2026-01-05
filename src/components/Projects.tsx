'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
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
            <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 text-sm font-semibold text-purple-300 tracking-widest uppercase mb-8">
              Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Projects & Products
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
              Recent work built with cutting-edge technology and strategic thinking
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
            {PROJECTS.slice(0, 4).map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-transparent group-hover:to-transparent transition-all duration-300" />
                
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="p-6 md:p-8 relative z-10 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                  >
                    Learn More →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
