import React from 'react';
import { motion } from 'framer-motion';

import { Cpu, Crown, Settings, Target, RefreshCw, DollarSign, Heart, Users, Zap, Handshake, BarChart2, Landmark } from 'lucide-react';

const skills = [
  { name: 'AI Implementation Oversight', level: 95, icon: <Cpu className="text-primary" /> },
  { name: 'Executive Leadership', level: 95, icon: <Crown className="text-yellow-500" /> },
  { name: 'Operations Management', level: 98, icon: <Settings className="text-gray-400" /> },
  { name: 'Business Development & Strategy', level: 92, icon: <Target className="text-red-500" /> },
  { name: 'Change Management', level: 90, icon: <RefreshCw className="text-blue-400" /> },
  { name: 'P&L Management', level: 93, icon: <DollarSign className="text-green-500" /> },
  { name: 'Customer Experience (CX)', level: 94, icon: <Heart className="text-pink-500" /> },
  { name: 'Team Leadership & Mentorship', level: 96, icon: <Users className="text-indigo-400" /> },
  { name: 'Process Optimization', level: 94, icon: <Zap className="text-yellow-400" /> },
  { name: 'Strategic Partnerships', level: 91, icon: <Handshake className="text-teal-400" /> },
  { name: 'Performance Management', level: 92, icon: <BarChart2 className="text-orange-400" /> },
  { name: 'Financial & Commercial Operations', level: 93, icon: <Landmark className="text-emerald-500" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Skills & <span className="text-gradient">Competencies</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass p-5 rounded-xl group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center border border-white/10 shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-md">
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <span className="font-semibold text-textPrimary text-lg group-hover:text-primary transition-colors">{skill.name}</span>
                </div>
                <span className="text-xs text-primary font-medium">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-surfaceHover rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.05), ease: "easeOut" }}
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

export default Skills;
