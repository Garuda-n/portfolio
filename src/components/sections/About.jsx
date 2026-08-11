import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../../data/profile';
import Section from '../layout/Section';
import { cn } from '../../utils/cn';
import { Server, LayoutTemplate, Layers, Cpu } from 'lucide-react';

const icons = {
  backend: <Server className="w-6 h-6" />,
  frontend: <LayoutTemplate className="w-6 h-6" />,
  erp: <Layers className="w-6 h-6" />,
  ai: <Cpu className="w-6 h-6" />
};

export default function About() {
  const [activeArea, setActiveArea] = useState(profile.focusAreas[0].id);

  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="h-px bg-white/20 w-32"></div>
          </div>
          
          <p className="text-lg text-muted leading-relaxed">
            {profile.about}
          </p>
        </div>

        <div className="flex-1 w-full relative">
          {/* Interactive categories */}
          <div className="grid grid-cols-2 gap-4">
            {profile.focusAreas.map((area) => (
              <button
                key={area.id}
                onMouseEnter={() => setActiveArea(area.id)}
                onClick={() => setActiveArea(area.id)}
                className={cn(
                  "p-6 rounded-xl border text-left transition-all duration-300 relative overflow-hidden group glass",
                  activeArea === area.id 
                    ? "border-primary/50 bg-primary/5 shadow-[0_0_30px_rgba(0,229,255,0.1)]" 
                    : "border-white/10 hover:border-white/30"
                )}
              >
                <div className={cn(
                  "mb-4 transition-colors duration-300",
                  activeArea === area.id ? "text-primary" : "text-muted group-hover:text-white"
                )}>
                  {icons[area.id]}
                </div>
                <h3 className={cn(
                  "font-semibold text-lg transition-colors duration-300",
                  activeArea === area.id ? "text-white" : "text-muted group-hover:text-white"
                )}>
                  {area.title}
                </h3>
                
                {/* Active indicator */}
                {activeArea === area.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 h-1 w-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Details Panel */}
          <div className="mt-8 p-6 rounded-xl glass border border-white/10 min-h-[140px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeArea}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-muted leading-relaxed"
              >
                {profile.focusAreas.find(a => a.id === activeArea)?.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
