import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Crown, Settings, Target, RefreshCw, DollarSign, Heart, Users, Zap } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../assets/logo/m_logo.png';
import DotField from './ui/DotField';

const leftSkills = [
  { Icon: Cpu, color: '#3b82f6', name: 'AI Implementation' },
  { Icon: Crown, color: '#eab308', name: 'Executive Leadership' },
  { Icon: Settings, color: '#9ca3af', name: 'Operations' },
  { Icon: Target, color: '#ef4444', name: 'Strategy' }
];

const rightSkills = [
  { Icon: RefreshCw, color: '#60a5fa', name: 'Change Management' },
  { Icon: DollarSign, color: '#22c55e', name: 'P&L Management' },
  { Icon: Heart, color: '#ec4899', name: 'CX' },
  { Icon: Users, color: '#818cf8', name: 'Leadership' },
  { Icon: Zap, color: '#facc15', name: 'Optimization' }
];

const FloatingIcon = ({ Icon, color, delay, yOffset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.6, y: [0, yOffset, 0] }}
      whileHover={{ opacity: 1, scale: 1.1 }}
      transition={{ 
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay },
        opacity: { duration: 1, delay: 0.2 },
      }}
      className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-black/5 dark:border-white/5 shadow-sm transition-colors duration-300 hover:border-primary/30 cursor-pointer"
    >
      <Icon size={24} style={{ color: color === '#ffffff' || color === '#000000' ? undefined : color }} className="text-textPrimary" />
    </motion.div>
  );
};

const allSkills = [...leftSkills, ...rightSkills];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-background via-surface to-surfaceHover">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(168, 85, 247, 0.35)"
          gradientTo="rgba(59, 130, 246, 0.35)"
          glowColor="rgba(59, 130, 246, 0.2)"
        /> */}
        {/* Center Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-8 lg:mt-0">
        
        {/* Text Section (Left on Desktop, Bottom on Mobile) */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-block rounded-full px-5 py-1.5 border border-black/5 dark:border-white/5 glass bg-black/5 dark:bg-white/5"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-textSecondary">Operations & Digital Innovation Leader</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold font-display tracking-tight mb-4 text-textPrimary"
          >
            Sunny <span className="text-gradient">Dahima</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl text-textSecondary font-medium mb-6 max-w-2xl h-8 lg:h-10"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
              <Typewriter
                words={['Executive Vice President', 'Operations Leader', 'Digital Innovator', 'Strategic Scaler']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-textSecondary mb-10 max-w-xl leading-relaxed"
          >
            Scaling Enterprise Growth through AI & Operational Excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' });
              }}
              className="group relative px-8 py-4 w-full sm:w-auto bg-primary text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-blue-500 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>

        </div>

        {/* Profile Image Section (Right on Desktop, Top on Mobile) */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative z-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center w-full"
          >
            <div className="relative inline-flex items-center justify-center">
              
              {/* Left Side Panel - Scaled for Mobile to Desktop */}
              <div className="flex absolute right-[100%] sm:right-[110%] md:right-[120%] lg:right-[120%] xl:right-[130%] flex-col gap-3 sm:gap-4 md:gap-6 z-10 scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
                {leftSkills.map((skill, index) => (
                  <FloatingIcon key={skill.name} Icon={skill.Icon} color={skill.color} delay={index * 0.8} yOffset={-15} />
                ))}
              </div>

              {/* Right Side Panel - Scaled for Mobile to Desktop */}
              <div className="flex absolute left-[100%] sm:left-[110%] md:left-[120%] lg:left-[120%] xl:left-[130%] flex-col gap-3 sm:gap-4 md:gap-6 z-10 scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
                {rightSkills.map((skill, index) => (
                  <FloatingIcon key={skill.name} Icon={skill.Icon} color={skill.color} delay={index * 0.8 + 0.4} yOffset={15} />
                ))}
              </div>

              {/* Breathing Animation Wrapper */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full p-2 glass border border-black/10 dark:border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.15)] bg-surface/30 backdrop-blur-md relative z-20"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img 
                    src={profileImg} 
                    alt="Sunny Dahima" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${import.meta.env.BASE_URL}logo/m_logo.png`;
                  }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
