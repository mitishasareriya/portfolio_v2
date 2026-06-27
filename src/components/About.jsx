import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layers } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 size={24} className="text-primary" />,
      title: "Strategic Scaling",
      description: "Identifying and capturing market opportunities to drive revenue and market presence",
    },
    {
      icon: <Layers size={24} className="text-secondary" />,
      title: "Operational Excellence",
      description: "Re-engineering commercial processes to maximize efficiency and ROI",
    },
    {
      icon: <Server size={24} className="text-accent" />,
      title: "Future-Focused Innovation",
      description: "Integrating AI and digital strategies to future-proof business models",
    },
    {
      icon: <Database size={24} className="text-primary" />,
      title: "High-Impact Mentorship",
      description: "Cultivating a culture of accountability and excellence across multi-disciplinary teams",
    }
  ];

  const stats = [
    { label: "Years Experience", value: "9+" },
    { label: "Companies Led", value: "5" },
    { label: "Transformations", value: "15+" },
    { label: "Client Success", value: "100%" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-textPrimary">About <span className="text-primary">Me</span></h3>
            <p className="text-textSecondary mb-6 leading-relaxed">
              I lead at the intersection of operational excellence and digital innovation. As Executive Vice President at Infinity Infoway Limited, my focus is on architecting the future of the organization by scaling technology, high-performing teams, and sustainable impact.
            </p>
            <p className="text-textSecondary mb-8 leading-relaxed">
              With a career built on transforming complex challenges into streamlined, profitable operations, I specialize in Digital Dominance—leveraging AI and advanced technology to drive enterprise growth.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-textPrimary mb-1">{stat.value}</div>
                  <div className="text-sm text-textSecondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-textPrimary mb-2">{card.title}</h4>
                <p className="text-sm text-textSecondary">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
