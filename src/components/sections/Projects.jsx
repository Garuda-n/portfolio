import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import Section from '../layout/Section';
import { cn } from '../../utils/cn';
import { ArrowRight, ChevronRight, Activity, GitCommit, Layers, Database } from 'lucide-react';

const NovaAdminPresentation = ({ project }) => {
  const [activeFlow, setActiveFlow] = useState(project.flows[0]);

  return (
    <div className="mt-8 border-t border-white/10 pt-8">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Col: Architecture & Architecture decisions */}
        <div className="flex-1 space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Layers className="text-primary w-5 h-5" />
              Architecture
            </h4>
            <div className="flex flex-col gap-2 relative pl-4 border-l border-white/20">
              {project.architecture.layers.map((layer, i) => (
                <div key={layer} className="relative">
                  <div className="absolute -left-[21px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/50"></div>
                  <span className="text-white/80">{layer}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Database className="text-primary w-5 h-5" />
              Engineering Decisions
            </h4>
            <div className="grid gap-4">
              {project.architecture.decisions.map(decision => (
                <div key={decision.title} className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <h5 className="font-medium text-white mb-2">{decision.title}</h5>
                  <p className="text-sm text-muted">{decision.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Flows */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="text-primary w-5 h-5" />
            Interactive Business Flows
          </h4>
          
          <div className="flex gap-2 mb-6 p-1 bg-white/5 rounded-lg border border-white/10 w-fit">
            {project.flows.map(flow => (
              <button
                key={flow.name}
                onClick={() => setActiveFlow(flow)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all",
                  activeFlow.name === flow.name ? "bg-white/10 text-white shadow-sm" : "text-muted hover:text-white"
                )}
              >
                {flow.name}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-xl glass border border-white/10 relative overflow-hidden min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFlow.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col gap-4"
              >
                {activeFlow.steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors flex items-center justify-between">
                      <span className="font-medium text-white/90">{step}</span>
                      {index < activeFlow.steps.length - 1 && (
                        <ArrowRight className="text-white/20 w-4 h-4" />
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <Section id="projects" className="bg-white/[0.01]">
      <div className="space-y-16 w-full">
        <div className="inline-flex items-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Engineering Work</h2>
          <div className="h-px bg-white/20 w-32"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              className={cn(
                "rounded-2xl glass border overflow-hidden transition-colors duration-500",
                expandedProject === project.id ? "border-primary/50" : "border-white/10 hover:border-white/30"
              )}
            >
              {/* Card Header (Always visible) */}
              <div 
                className="p-8 cursor-pointer flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                onClick={() => toggleProject(project.id)}
              >
                <div className="space-y-2 max-w-3xl">
                  <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                    {project.title}
                    <motion.div
                      animate={{ rotate: expandedProject === project.id ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-6 h-6 text-primary" />
                    </motion.div>
                  </h3>
                  <p className="text-primary font-medium">{project.tagline}</p>
                  <p className="text-muted leading-relaxed line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.coreTech.map(tech => (
                      <span key={tech} className="px-2 py-1 text-xs font-mono text-white/50 bg-white/5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors whitespace-nowrap">
                  {expandedProject === project.id ? 'Close Details' : 'Explore Architecture'}
                </button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-white/10 mt-2 bg-black/20">
                      
                      <div className="grid md:grid-cols-2 gap-12 mt-8">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4">Overview</h4>
                          <p className="text-muted leading-relaxed">{project.overview}</p>
                        </div>
                        
                        {project.modules && (
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Key Modules</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.modules.map(mod => (
                                <div key={mod.name} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-white/80">
                                  {mod.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {project.features && !project.modules && (
                           <div>
                           <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                           <ul className="list-disc list-inside text-muted space-y-2">
                             {project.features.map(f => (
                               <li key={f}>{f}</li>
                             ))}
                           </ul>
                         </div>
                        )}
                      </div>

                      {/* Deep dive based on project type */}
                      {project.id === 'novaadmin' && <NovaAdminPresentation project={project} />}
                      
                      {project.id === 'ai-chatbot' && (
                        <div className="mt-8 border-t border-white/10 pt-8">
                          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <GitCommit className="text-primary w-5 h-5" />
                            Local Data Flow
                          </h4>
                          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-8 glass rounded-xl">
                            {project.architecture.layers.map((layer, index) => (
                              <div key={layer} className="flex items-center gap-4 w-full md:w-auto">
                                <div className="p-4 rounded-lg border border-primary/30 bg-primary/5 text-center text-sm font-medium w-full md:w-auto">
                                  {layer}
                                </div>
                                {index < project.architecture.layers.length - 1 && (
                                  <ArrowRight className="text-primary w-6 h-6 hidden md:block" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
