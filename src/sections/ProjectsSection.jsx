import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function ProjectsSection() {
  const projectList = [projects.novaadmin, projects.aiChatbot];

  return (
    <div className="w-full max-w-[1152px] mx-auto px-8 md:px-12 lg:px-16 py-16 md:py-24">
      
      {/* Section Header */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Projects & Case Studies</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto text-center">
          Systems built to solve real business problems
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projectList.map((project) => (
          <motion.div 
            key={project.id}
            variants={fadeInUp}
            className="glow-card bg-bg-card rounded-2xl p-8 transition-transform hover:-translate-y-2 flex flex-col h-full"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-text-primary mb-2">{project.name}</h3>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                {project.subtitle}
              </p>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                {project.summary}
              </p>
            </div>

            <div className="mt-auto pt-6 border-t border-border">
              <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.core.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 bg-bg-secondary text-text-secondary text-xs font-medium rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
