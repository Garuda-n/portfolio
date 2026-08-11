import { motion } from 'framer-motion';
import { profile } from '../data/profile';

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

export default function AboutSection() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">About Me</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto text-center">
          Bringing engineering excellence to build robust enterprise software
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
            Empowering Businesses Through <br/><span className="text-accent">Clean Code</span>
          </h3>
          
          <div className="prose prose-slate dark:prose-invert prose-lg text-text-secondary leading-relaxed max-w-none">
            <p>
              I am a passionate <strong className="text-text-primary">Software Developer</strong> with <strong className="text-text-primary">3+ years of experience</strong> developing custom business systems, robust application frameworks, and responsive web solutions. I specialize in backend architecture and seamless data flows, ensuring operations are executed efficiently and safely.
            </p>
            <p>
              {profile.approach}
            </p>
          </div>
        </motion.div>

        {/* Right: Stat Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          
          <motion.div variants={fadeInUp} className="glow-card bg-bg-card rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
            <div className="text-5xl font-bold text-accent mb-2">3+</div>
            <div className="text-text-secondary font-medium">Years Experience</div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glow-card bg-bg-card rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
            <div className="text-5xl font-bold text-accent mb-2">15+</div>
            <div className="text-text-secondary font-medium">APIs Deployed</div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glow-card bg-bg-card rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 sm:col-span-2">
            <div className="text-4xl font-bold text-accent mb-2">End-to-End</div>
            <div className="text-text-secondary font-medium">Workflow Architectures</div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
