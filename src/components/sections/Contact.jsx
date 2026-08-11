import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../../data/profile';
import Section from '../layout/Section';

export default function Contact() {
  return (
    <Section id="contact" className="min-h-[70vh]">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let's build something <span className="text-primary italic">useful.</span>
          </h2>
          <p className="text-xl text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you need a complex ERP system architected from scratch or a modern web application, I'm ready to engineer a practical solution.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          <a
            href={profile.contact.email}
            className="flex items-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-lg hover:bg-primary-hover hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
          
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
