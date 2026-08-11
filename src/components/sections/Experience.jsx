import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import Section from '../layout/Section';

export default function Experience() {
  return (
    <Section id="experience">
      <div className="space-y-16 w-full">
        <div className="inline-flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Evolution</h2>
          <div className="h-px bg-white/20 w-32"></div>
        </div>

        <div className="relative pl-4 md:pl-0">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:scale-150 group-hover:bg-primary transition-all duration-300 z-10"></div>
                  </div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full md:w-[45%] glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
                  >
                    <div className="text-primary text-sm font-medium mb-2">{exp.period}</div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-muted mb-4">{exp.type}</h4>
                    <p className="text-white/70 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 border border-white/10 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
