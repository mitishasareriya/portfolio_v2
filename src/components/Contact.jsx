import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { FaLinkedin as Linkedin } from 'react-icons/fa';

const InputField = ({ id, type, label, isTextArea, formData, handleInputChange, focusedField, setFocusedField, status }) => {
  const isFocused = focusedField === id;
  const hasValue = formData[id] && formData[id].length > 0;
  const isError = status === 'error' && !hasValue && id !== 'subject';
  const isSuccess = status === 'success';
  
  return (
    <div className="relative flex flex-col mb-2">
      <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${isFocused ? 'shadow-[0_0_20px_rgba(59,130,246,0.15)]' : ''}`}>
        {isTextArea ? (
          <textarea
            id={id}
            rows="5"
            value={formData[id]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(id)}
            onBlur={() => setFocusedField(null)}
            className={`w-full bg-background border-2 rounded-xl px-4 pt-6 pb-2 text-textPrimary focus:outline-none transition-colors resize-none relative z-10 ${
              isError ? 'border-red-500/50 focus:border-red-500' : 
              isSuccess ? 'border-green-500/50' :
              isFocused ? 'border-primary' : 'border-border hover:border-textSecondary/30'
            }`}
          />
        ) : (
          <input
            type={type}
            id={id}
            value={formData[id]}
            onChange={handleInputChange}
            onFocus={() => setFocusedField(id)}
            onBlur={() => setFocusedField(null)}
            className={`w-full bg-background border-2 rounded-xl px-4 pt-6 pb-2 text-textPrimary focus:outline-none transition-colors relative z-10 ${
              isError ? 'border-red-500/50 focus:border-red-500' : 
              isSuccess ? 'border-green-500/50' :
              isFocused ? 'border-primary' : 'border-border hover:border-textSecondary/30'
            }`}
          />
        )}

        <label 
          htmlFor={id} 
          className={`absolute left-4 transition-all duration-300 pointer-events-none font-medium z-20 ${
            isFocused || hasValue 
              ? 'top-2 text-xs text-primary opacity-100' 
              : `text-textSecondary opacity-70 ${isTextArea ? 'top-4 text-base' : 'top-1/2 -translate-y-1/2 text-base'}`
          }`}
        >
          {label}
        </label>
        
        {/* Subtle Glow Ring */}
        {isFocused && (
          <motion.div
            layoutId={`focusRing-${id}`}
            className="absolute inset-0 rounded-xl border border-primary/30 pointer-events-none z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </div>
      
      {/* Validation Message */}
      <div className="h-5 mt-1 ml-1 overflow-hidden">
        <AnimatePresence>
          {isError && (
            <motion.span 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              className="text-red-500 text-xs flex items-center gap-1"
            >
              <AlertCircle size={12} /> {label} is required
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const inputProps = {
    formData,
    handleInputChange,
    focusedField,
    setFocusedField,
    status
  };

  return (
    <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-textPrimary">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-textPrimary leading-tight">Let's build something <br/><span className="text-gradient">amazing</span> together.</h3>
            <p className="text-textSecondary mb-10 leading-relaxed text-lg max-w-md">
              Let's discuss how I can help drive your organizational growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-full glass border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <Phone size={24} className="transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <p className="text-sm text-textSecondary mb-1">Call Me</p>
                  <p className="text-lg font-medium text-textPrimary group-hover:text-primary transition-colors">+91 9978901595</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-full glass border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                  <Mail size={24} className="transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <p className="text-sm text-textSecondary mb-1">Email Me</p>
                  <p className="text-lg font-medium text-textPrimary group-hover:text-secondary transition-colors">sunny@infinityinfoway.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-14 h-14 rounded-full glass border border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  <Linkedin size={24} className="transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <p className="text-sm text-textSecondary mb-1">LinkedIn</p>
                  <p className="text-lg font-medium text-textPrimary group-hover:text-accent transition-colors">Sunny Dahima</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-3xl flex flex-col shadow-lg border border-border relative overflow-hidden">
              
              {/* Form Success Overlay */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-40 bg-surface/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 rounded-3xl"
                  >
                    <motion.div 
                      initial={{ scale: 0 }} 
                      animate={{ scale: 1 }} 
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6"
                    >
                      <CheckCircle size={40} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-2">Message Sent!</h3>
                    <p className="text-textSecondary">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
                <InputField id="name" type="text" label="Your Name" {...inputProps} />
                <InputField id="email" type="email" label="Email Address" {...inputProps} />
              </div>
              
              <InputField id="subject" type="text" label="Subject (Optional)" {...inputProps} />
              <InputField id="message" type="text" label="Your Message" isTextArea {...inputProps} />

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 mt-2 bg-gradient-to-r from-primary via-blue-500 to-accent text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 disabled:cursor-not-allowed group relative overflow-hidden z-20"
              >
                {/* Button Shine Effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
