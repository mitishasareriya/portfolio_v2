import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo/m_logo.png';
import { Menu, X, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Awards', href: '#achievements' },
  { name: 'Languages', href: '#languages' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 lg:py-4' : 'py-5 lg:py-6'
        } ${isScrolled && !isMobileMenuOpen ? 'glass shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="z-50 flex items-center"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <img
            src={logoImg}
            alt="Sunny Dahima"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-sm font-medium transition-colors relative group py-2 ${isActive ? 'text-textPrimary' : 'text-textSecondary hover:text-textPrimary'
                    }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary/50 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  )}
                </motion.a>
              );
            })}
          </nav>
          <div className="pl-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-textPrimary p-2 hover:bg-surface rounded-full transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-40 bg-mobile-menu backdrop-blur-xl pt-28 pb-8 px-6 flex flex-col h-screen overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4 items-center w-full max-w-sm mx-auto flex-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xl font-display font-medium w-full text-center py-4 rounded-2xl transition-all ${isActive
                        ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm'
                        : 'text-textSecondary hover:text-textPrimary hover:bg-surface'
                      }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex justify-center pb-8"
            >
              <p className="text-textSecondary text-sm">© 2024 Sunny Dahima. Executive Vice President | All rights reserved.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
