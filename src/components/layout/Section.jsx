import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Section({ id, children, className, containerClassName }) {
  return (
    <section 
      id={id} 
      className={cn("py-24 relative overflow-hidden min-h-screen flex items-center justify-center", className)}
    >
      {/* Optional background subtle noise or gradients can be added here */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgba(0,229,255,0.03)] via-transparent to-transparent opacity-50"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn("w-full max-w-6xl mx-auto px-6 relative z-10", containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}
