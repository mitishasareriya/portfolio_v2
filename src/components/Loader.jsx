import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo/m_logo.png';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Subtle glow background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
          </div>

          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <img 
              src={logoImg} 
              alt="Loading..." 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            />
          </motion.div>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mt-8 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
