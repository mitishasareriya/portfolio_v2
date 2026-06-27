import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Dynamic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-secondary/20 blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
