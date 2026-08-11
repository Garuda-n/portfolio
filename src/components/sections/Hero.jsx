import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Layout } from 'lucide-react';
import { profile } from '../../data/profile';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col items-start text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="px-3 py-1 text-xs font-mono font-medium text-primary border border-primary/30 rounded-full bg-primary/10 backdrop-blur-md">
              Available for new opportunities
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Hi, I'm <span className="text-primary">{profile.name}</span>.<br />
            <span className="text-muted">{profile.role}.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted font-light mb-10 max-w-2xl leading-relaxed">
            {profile.tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={profile.contact.resume} download className="px-8 py-4 font-semibold text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all">
              Download Resume
            </a>
          </motion.div>
          
          {/* Tech stack interactive pills */}
          <motion.div variants={itemVariants} className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
            <p className="text-sm font-medium text-muted uppercase tracking-widest w-full md:w-auto">Core Stack</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors cursor-default">
                <Database className="w-4 h-4" /> PHP / Laravel
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors cursor-default">
                <Layout className="w-4 h-4" /> React / Tailwind
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors cursor-default">
                <Code2 className="w-4 h-4" /> MySQL / ERP
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
