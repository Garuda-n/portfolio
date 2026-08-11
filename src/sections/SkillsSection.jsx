import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SkillsSection() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Skills & Technologies</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto text-center">
          The tools and technologies I use to build robust applications
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.id}
            variants={fadeInUp}
            className="glow-card bg-bg-card rounded-2xl p-8 hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl">{category.icon}</div>
              <h3 className="text-xl font-bold text-text-primary">{category.label}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  className="px-3 py-1.5 bg-bg-secondary text-text-secondary text-sm font-medium rounded-lg border border-border"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}
