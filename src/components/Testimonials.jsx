import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Mitisha's expertise in Laravel transformed our internal tools. Her code is clean, well-structured, and highly scalable. An absolute professional to work with.",
    author: "Rahul Verma",
    role: "Project Manager",
    company: "Optimus Web Solution"
  },
  {
    text: "The POS system she developed for us is lightning fast and incredibly intuitive. It streamlined our inventory management completely.",
    author: "Priya Sharma",
    role: "Business Owner",
    company: "RetailTech"
  },
  {
    text: "Outstanding full-stack skills. She easily bridged the gap between our complex backend requirements and the frontend user experience.",
    author: "Amit Patel",
    role: "CTO",
    company: "Nexcess Technologies"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-24 relative z-10 bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Client <span className="text-gradient">Testimonials</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote size={120} className="absolute -top-10 -left-10 text-textPrimary/5 rotate-180" />
            
            <div className="relative h-48 sm:h-40 md:h-32 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <p className="text-lg md:text-xl text-textSecondary italic mb-6">"{testimonials[current].text}"</p>
                  <div>
                    <h4 className="text-textPrimary font-bold">{testimonials[current].author}</h4>
                    <p className="text-sm text-primary">{testimonials[current].role}, {testimonials[current].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
