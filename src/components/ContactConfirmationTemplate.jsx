import React from 'react';

const ContactConfirmationTemplate = ({ 
  name = 'Guest', 
  email = 'guest@example.com', 
  subject = 'Inquiry', 
  message = 'Hello!', 
  date = new Date().toLocaleDateString() 
}) => {
  const currentYear = new Date().getFullYear();
  const portfolioUrl = 'https://www.sunnydahima.com';
  
  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 px-4 flex justify-center items-center font-sans text-slate-800">
      <div className="w-full max-w-2xl bg-white rounded-[24px] shadow-xl shadow-slate-200/50 overflow-hidden">
        
        {/* Header Section */}
        <header className="w-full bg-gradient-to-br from-blue-50/80 to-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
          <div className="text-center md:text-left space-y-2 w-full md:w-1/2">
            <div className="mb-4 flex justify-center md:justify-start">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 80L40 20L50 50L60 20L80 80" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 50L40 20M70 50L60 20" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="font-display text-4xl font-bold text-slate-900 tracking-tight">
              Sunny <span className="text-primary">Dahima</span>
            </h1>
            <p className="text-primary font-medium text-lg">Digital Innovator</p>
            <p className="text-slate-500 text-sm max-w-xs mt-4 mx-auto md:mx-0">
              I turn complex problems into simple, elegant digital solutions.
            </p>
          </div>
          
          {/* Detailed Graphic Area */}
          <div className="hidden md:block relative w-48 h-48 ml-auto">
            {/* Main Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-[0_10px_25px_-5px_rgba(59,130,246,0.15)] flex items-center justify-center">
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 80L40 20L50 50L60 20L80 80" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30 50L40 20M70 50L60 20" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Floating Icons */}
            <div className="absolute top-2 left-4 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-xs font-bold shadow-sm">&lt;/&gt;</div>
            <div className="absolute top-20 -left-2 w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center text-amber-500 text-xs shadow-sm">💻</div>
            <div className="absolute bottom-4 left-6 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center text-red-500 text-xs shadow-sm">🚀</div>
            <div className="absolute top-4 right-2 w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-500 text-xs shadow-sm">🗄️</div>
            <div className="absolute top-16 -right-3 w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 text-xs shadow-sm">📱</div>
            <div className="absolute bottom-6 right-4 w-8 h-8 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500 text-xs shadow-sm">💡</div>
          </div>
        </header>

        <div className="p-8 md:px-12 md:py-8">
          {/* Greeting Section */}
          <section className="mb-4">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Hello <span className="text-primary">{name}</span>,
            </h2>
            <p className="text-primary font-medium mb-4">
              Thank you for reaching out through my portfolio!
            </p>
            <p className="text-slate-600 leading-relaxed text-[15px]">
              I've successfully received your message and appreciate you taking the time to contact me. 
              I'll review your inquiry carefully and get back to you as soon as possible.
            </p>
          </section>

          {/* Submitted Details Card is completely removed per request */}

          {/* CTA Section */}
          <section className="text-center bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-slate-100 mt-10">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
              Let's stay <span className="text-primary">connected!</span>
            </h3>
            <p className="text-slate-500 text-sm mb-8">
              Feel free to explore my work and connect with me on the platforms below.
            </p>
            
            <a 
              href={portfolioUrl}
              className="inline-block bg-gradient-to-r from-primary to-accent text-white font-medium px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Visit My Portfolio &rarr;
            </a>

            {/* Social Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 mt-12 divide-x divide-slate-100 border-t border-slate-100 pt-8">
              {[
                { icon: '🐙', label: 'GitHub', href: '#', color: 'text-slate-900' },
                { icon: '💼', label: 'LinkedIn', href: '#', color: 'text-sky-500' },
                { icon: '📄', label: 'Resume', href: '#', color: 'text-emerald-500' },
                { icon: '📝', label: 'Blog', href: '#', color: 'text-purple-500' },
              ].map((link, idx) => (
                <a key={idx} href={link.href} className="group flex flex-col items-center gap-3 pb-6 md:pb-0">
                  <div className={`w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-300 ${link.color}`}>
                    {link.icon}
                  </div>
                  <span className="text-[13px] font-semibold text-slate-900 group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-slate-50 p-10 text-center border-t border-slate-200">
          <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-primary text-lg">
            🤍
          </div>
          <h4 className="font-display font-bold text-slate-900 text-lg mb-2">
            Thank you <span className="text-primary">once again!</span>
          </h4>
          <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
            I truly appreciate your interest and look forward to connecting with you.
          </p>
          
          <div className="w-10 h-[3px] bg-primary rounded-full mx-auto mb-6"></div>

          {/* Social Icons Footer */}
          <div className="flex justify-center items-center gap-3 mb-6">
             <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm hover:scale-110 transition-transform">🐙</a>
             <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-sky-500 shadow-sm hover:scale-110 transition-transform">💼</a>
             <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-sky-400 shadow-sm hover:scale-110 transition-transform">🐦</a>
             <a href="mailto:hello@sunnydahima.com" className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
                {/* Envelope Image injected here */}
                <img src="/email-icon.png" alt="Email" className="w-4 h-4" />
             </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-[13px] font-medium text-primary mb-4">
            <a href="mailto:hello@sunnydahima.com" className="hover:underline">hello@sunnydahima.com</a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a href={portfolioUrl} className="hover:underline">www.sunnydahima.com</a>
          </div>
          
          <p className="text-xs text-slate-400">
            &copy; {currentYear} Sunny Dahima. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default ContactConfirmationTemplate;
