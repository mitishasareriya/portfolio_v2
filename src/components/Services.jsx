import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, LayoutDashboard, Database, ShoppingCart, Users, UserCog, Briefcase, Calculator, Building2 } from 'lucide-react';

const services = [
  { title: "Operational Excellence", icon: <Monitor size={28} />, desc: "Re-engineering commercial processes to maximize efficiency and ROI" },
  { title: "AI Implementation", icon: <Smartphone size={28} />, desc: "Integrating AI and advanced technology to drive enterprise growth" },
  { title: "Strategic Planning", icon: <LayoutDashboard size={28} />, desc: "Identifying market opportunities and architecting business growth strategies" },
  { title: "Team Leadership", icon: <Users size={28} />, desc: "Cultivating high-performing teams through mentorship and accountability" },
  { title: "Change Management", icon: <UserCog size={28} />, desc: "Leading organizational transformation and digital innovation initiatives" },
  { title: "P&L Management", icon: <Calculator size={28} />, desc: "Optimizing financial performance and driving profitable business operations" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative z-10 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Core Services & <span className="text-gradient">Focus Areas</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass p-8 rounded-2xl group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] border border-white/5 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-surfaceHover border border-white/10 flex items-center justify-center mb-6 text-textSecondary group-hover:text-primary group-hover:scale-110 transition-all duration-300 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-textSecondary leading-relaxed group-hover:text-textSecondary transition-colors">{service.desc}</p>
              </div>
              
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-[30px] group-hover:bg-primary/30 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
