import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/ui/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="relative min-h-screen text-textPrimary overflow-hidden transition-colors duration-500">
      <Loader />
      <CustomCursor />
      <BackToTop />
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Achievements />
        <Languages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
