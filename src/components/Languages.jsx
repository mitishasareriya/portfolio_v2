import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const languages = [
  { 
    name: 'Gujarati', 
    proficiency: 'Native or Bilingual', 
    level: 100, 
    icon: <MessageCircle className="text-primary" /> 
  },
  { 
    name: 'Hindi', 
    proficiency: 'Native or Bilingual', 
    level: 95, 
    icon: <MessageCircle className="text-accent" /> 
  },
  { 
    name: 'English', 
    proficiency: 'Full Professional', 
    level: 90, 
    icon: <MessageCircle className="text-secondary" /> 
  }
];

const Languages = () => {
  return (
    <section id="languages" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Languages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center border border-white/10 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md">
                    <span className="text-2xl">{lang.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-textPrimary text-lg group-hover:text-primary transition-colors">{lang.name}</span>
                    <span className="text-xs text-textSecondary">{lang.proficiency}</span>
                  </div>
                </div>
                <span className="text-sm text-primary font-medium">{lang.level}%</span>
              </div>
              
              <div className="w-full bg-surfaceHover rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
