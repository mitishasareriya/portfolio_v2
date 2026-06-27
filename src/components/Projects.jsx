import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const projects = [
  {
    title: "POS & Inventory System",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    desc: "Comprehensive point of sale and real-time inventory tracking for retail.",
    tags: ["Laravel", "Vue.js", "MySQL"]
  },
  {
    title: "Appointment Booking System",
    image: "https://images.unsplash.com/photo-1506784951206-eb8fb5ffb40d?auto=format&fit=crop&q=80&w=800",
    desc: "Automated scheduling system for clinics and service professionals.",
    tags: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "Share Market Platform",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    desc: "Real-time stock tracking, portfolio management, and market analytics.",
    tags: ["Next.js", "Tailwind", "Redis"]
  },
  {
    title: "Multivendor E-commerce",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
    desc: "A scalable marketplace platform allowing multiple sellers to manage stores.",
    tags: ["Laravel", "Livewire", "MySQL"]
  },
  {
    title: "HRM System",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    desc: "Complete human resource management with payroll and attendance.",
    tags: ["Vue.js", "Laravel", "Tailwind"]
  },
  {
    title: "Government Portal",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    desc: "Secure document management and public service portal.",
    tags: ["React", "PHP", "RBAC"]
  },
  {
    title: "Developer Portfolio",
    image: "https://images.unsplash.com/photo-1507238692062-2a042f7e37e5?auto=format&fit=crop&q=80&w=800",
    desc: "Premium, animated personal portfolio with 3D effects.",
    tags: ["React", "Framer Motion"]
  },
  {
    title: "Online Store Platform",
    image: "https://images.unsplash.com/photo-1472851294608-062f124dcb02?auto=format&fit=crop&q=80&w=800",
    desc: "Boutique online storefront with integrated payment gateway.",
    tags: ["Next.js", "Stripe", "MongoDB"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image || `${import.meta.env.BASE_URL}logo/m_logo.png`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${import.meta.env.BASE_URL}logo/m_logo.png`;
                  }}
                />
                
                {/* Hover Overlay Actions */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                  <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                    <ExternalLink size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all transform hover:scale-110">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 relative z-30 bg-surface/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-sm text-textSecondary mb-4 h-10">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
