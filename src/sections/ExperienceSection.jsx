import { motion } from 'framer-motion';
import { experienceStages } from '../data/experience';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ExperienceSection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24">
      
      {/* Section Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Experience</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto text-center">
          My professional journey in software development
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
        {experienceStages.map((stage, index) => (
          <motion.div 
            key={stage.id} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="relative pl-8 md:pl-12"
          >
            
            {/* Timeline Dot */}
            <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-bg-primary shadow-[0_0_10px_var(--color-accent)]"></div>

            <div className="glow-card bg-bg-card p-6 md:p-8 rounded-2xl transition-all hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-text-primary">{stage.label}</h3>
                <span className="inline-flex px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full w-fit border border-accent/20">
                  {stage.period}
                </span>
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
                {stage.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Key Capabilities</h4>
                <div className="flex flex-wrap gap-2">
                  {stage.capabilities.map((cap) => (
                    <span 
                      key={cap}
                      className="px-2.5 py-1 bg-bg-secondary text-text-secondary text-xs rounded-md border border-border"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
