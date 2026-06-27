import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Users, MessageSquare, TrendingUp, Palette } from 'lucide-react';

const achievements = [
  { icon: <Star size={32} />, title: "Customer Service Excellence Award", desc: "Vodafone (2015-2017)" },
  { icon: <TrendingUp size={32} />, title: "Operational Excellence Award", desc: "ICICI Bank (2017-2019)" },
  { icon: <Users size={32} />, title: "Business Growth Leadership Award", desc: "Square Yards (2019-2020)" },
  { icon: <Award size={32} />, title: "Executive Excellence Recognition", desc: "Infinity Group of Companies (2024)" },
  { icon: <MessageSquare size={32} />, title: "Implementation Master", desc: "Certified" }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Honors & <span className="text-gradient">Awards</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-surfaceHover hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-surfaceHover flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:text-accent group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-2">{item.title}</h3>
              <p className="text-textSecondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
