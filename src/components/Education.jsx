import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Business Administration (M.B.A.)",
    institution: "Monark University",
    period: "Running (Expected July 2025)",
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Saurashtra University",
    period: "May 2012 - September 2015",
  },
  {
    degree: "H.S.C. (Commerce)",
    institution: "Govt. High School, Visavadar",
    period: "2010 - 2012",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 overflow-hidden bg-background">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-textPrimary">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Continuous Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 z-0"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative w-full">
                
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-6 md:left-8 top-12 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary z-30 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                >
                  <div className="absolute inset-0 rounded-full bg-secondary/40 animate-ping"></div>
                </motion.div>

                {/* Content Card Wrapper */}
                <div className="w-full pl-20 md:pl-24">
                  <motion.div
                    initial={{ opacity: 0, x: 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] border border-white/10 hover:border-secondary/40 group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl md:text-2xl font-bold text-textPrimary leading-tight">{edu.degree}</h3>
                      <div className="text-lg font-medium text-accent">{edu.institution}</div>
                      
                      <div className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 mt-2 rounded-full bg-surface/50 border border-border text-xs text-textSecondary font-medium">
                        <Calendar size={12} className="text-secondary" />
                        {edu.period}
                      </div>
                    </div>
                    
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
