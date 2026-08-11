import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/skills';
import Section from '../layout/Section';
import { cn } from '../../utils/cn';

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <Section id="skills" className="bg-white/[0.02]">
      <div className="space-y-16 w-full">
        <div className="inline-flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arsenal</h2>
          <div className="h-px bg-white/20 w-32"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Categories Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.categories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-xl font-semibold text-white/80">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <button
                      key={skill.name}
                      onMouseEnter={() => setActiveSkill(skill)}
                      onClick={() => setActiveSkill(skill)}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border glass",
                        activeSkill?.name === skill.name
                          ? "border-primary text-primary bg-primary/10 shadow-[0_0_15px_rgba(0,229,255,0.15)] scale-105"
                          : "border-white/10 text-muted hover:border-white/30 hover:text-white"
                      )}
                    >
                      {skill.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:w-1/3 relative h-[300px] lg:h-auto border border-white/10 rounded-2xl glass p-8 overflow-hidden flex flex-col justify-center">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <AnimatePresence mode="wait">
              {activeSkill ? (
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 space-y-4"
                >
                  <h4 className="text-3xl font-bold text-white">{activeSkill.name}</h4>
                  <div className="h-px bg-gradient-to-r from-primary to-transparent w-full"></div>
                  <p className="text-muted text-lg leading-relaxed">
                    <span className="text-white/60 text-sm uppercase tracking-wider block mb-2">Used for:</span>
                    {activeSkill.usage}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 text-center text-muted"
                >
                  Hover over a technology to see its practical application.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
