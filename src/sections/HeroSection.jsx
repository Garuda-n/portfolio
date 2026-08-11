import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = profile.title;

  useEffect(() => {
    let i = 0;
    if (isTyping) {
      const timer = setInterval(() => {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [fullText, isTyping]);

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-20 relative overflow-hidden">
      
      <div className="max-w-[1152px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            Available for New Roles
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary">
            Hi, I'm <br />
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-text-secondary h-10">
            I am a <span className="text-accent">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-text-muted leading-relaxed max-w-xl">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#contact"
              className="px-8 py-3.5 btn-gradient rounded-lg font-medium shadow-lg shadow-accent/20"
            >
              Let's Work Together
            </a>
            <a 
              href={profile.contact.resume || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-bg-card border border-border hover:border-accent text-text-primary rounded-lg font-medium transition-colors shadow-sm"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content: Code Window */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="rounded-xl overflow-hidden glow-card bg-bg-card">
            
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-secondary/50">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-auto font-mono text-xs text-text-muted">
                profile.json
              </div>
            </div>

            {/* Window Body (Code) */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <pre className="text-text-primary">
                <code>
                  <span className="text-pink-500">const</span> <span className="text-accent">developer</span> = {'{'}
                  <br />
                  {'  '}name: <span className="text-green-500">"{profile.name}"</span>,
                  <br />
                  {'  '}role: <span className="text-green-500">"{profile.title}"</span>,
                  <br />
                  {'  '}experience: <span className="text-orange-400">3.1</span>, <span className="text-text-muted">// Years</span>
                  <br />
                  {'  '}specialties: [
                  <br />
                  {'    '}<span className="text-green-500">"Laravel / PHP"</span>,
                  <br />
                  {'    '}<span className="text-green-500">"React / JavaScript"</span>,
                  <br />
                  {'    '}<span className="text-green-500">"SQL / Database Architecture"</span>
                  <br />
                  {'  '}],
                  <br />
                  {'  '}focus: <span className="text-green-500">"Enterprise Systems & ERP"</span>
                  <br />
                  {'}'};
                </code>
              </pre>
            </div>
            
            {/* Window Footer (Location) */}
            <div className="px-6 py-4 bg-bg-secondary/30 border-t border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                {profile.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">{profile.name}</div>
                <div className="text-xs text-text-muted">India</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
