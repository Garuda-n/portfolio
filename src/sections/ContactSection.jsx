import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactSection() {
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
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Get In Touch</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto text-center">
          Looking for a skilled developer to build your next enterprise solution?
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="glow-card bg-bg-card rounded-2xl p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">Email</h3>
              <a href={`mailto:${profile.contact.email}`} className="text-lg md:text-xl text-text-primary hover:text-accent transition-colors font-medium">
                {profile.contact.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">LinkedIn</h3>
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-text-primary hover:text-accent transition-colors font-medium">
                {profile.contact.linkedin !== '[Your LinkedIn URL]' ? 'Connect on LinkedIn' : '[Your LinkedIn URL]'}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-2">GitHub</h3>
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-text-primary hover:text-accent transition-colors font-medium">
                {profile.contact.github !== '[Your GitHub URL]' ? 'View GitHub Profile' : '[Your GitHub URL]'}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end md:text-right border-t md:border-t-0 md:border-l border-border pt-8 md:pt-0 md:pl-8 mt-4 md:mt-0 h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Ready to start?</h3>
            <p className="text-text-secondary mb-8">
              I'm currently available for new roles and projects. Let's build something great.
            </p>
            <a 
              href={profile.contact.resume || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 btn-gradient rounded-lg font-medium transition-transform hover:-translate-y-1 shadow-lg shadow-accent/20 w-full md:w-auto text-center"
            >
              Download Resume
            </a>
          </div>

        </div>
      </motion.div>

    </div>
  );
}
