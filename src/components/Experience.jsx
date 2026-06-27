import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: "Infinity Group of Companies",
    role: "Executive Vice President of Operations",
    period: "Nov 2024 - Present",
    description: "Directing operational and commercial strategies to drive enterprise profitability.",
    achievements: [
      "Leading business strategy and process improvements",
      "Managing key stakeholders",
      "Aligning business functions with corporate goals"
    ]
  },
  {
    company: "Infinity Group of Companies",
    role: "Team Leader",
    period: "Nov 2022 - Nov 2024",
    description: "Supervised and mentored a high-performing team to ensure seamless workflow.",
    achievements: [
      "Developed CRM strategies to improve client retention",
      "Enhanced departmental coordination",
      "Optimized project execution"
    ]
  },
  {
    company: "Infinity Group of Companies",
    role: "Senior Software Consultant",
    period: "Dec 2020 - Nov 2022",
    description: "Provided technical and strategic solutions to drive business growth and process optimization.",
    achievements: [
      "Managed client relations and service operations",
      "Ensured consistently high levels of customer satisfaction",
      "Identified and implemented process improvements"
    ]
  },
  {
    company: "Square Yards",
    role: "Business Development Supervisor",
    period: "Apr 2019 - Nov 2020",
    description: "Led business development initiatives to expand market presence and increase overall revenue.",
    achievements: [
      "Built and nurtured high-level client relationships",
      "Drove sustainable sales growth",
      "Managed and mentored sales teams to meet objectives"
    ]
  },
  {
    company: "ICICI Bank",
    role: "Back Office Manager",
    period: "Apr 2017 - Mar 2019",
    description: "Directed back-office operations and optimized internal processes for improved efficiency.",
    achievements: [
      "Ensured strict adherence to banking regulations",
      "Managed standards and financial documentation",
      "Assisted in financial transactions and customer service"
    ]
  },
  {
    company: "Vodafone",
    role: "Store Assistant",
    period: "Jun 2015 - Mar 2017",
    description: "Assisted customers with service queries and product purchases through consultative selling.",
    achievements: [
      "Managed store inventory and daily operations",
      "Delivered top-notch customer service",
      "Recognized for increases in store sales"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-textPrimary">Professional <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Continuous Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-border transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative w-full">
                
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-6 md:left-8 top-12 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-20 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                >
                  <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping"></div>
                </motion.div>

                {/* Content Card Wrapper */}
                <div className="w-full pl-16 md:pl-24">
                  <motion.div
                    initial={{ opacity: 0, x: 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] border border-white/10 hover:border-primary/40 group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="flex flex-col gap-2 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-textPrimary leading-tight">{exp.role}</h3>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-lg font-medium text-accent">{exp.company}</span>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/50 border border-border text-xs text-textSecondary font-medium">
                          <Calendar size={12} className="text-primary" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-textSecondary mb-6 text-sm leading-relaxed">{exp.description}</p>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-textSecondary hover:text-textPrimary transition-colors">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
