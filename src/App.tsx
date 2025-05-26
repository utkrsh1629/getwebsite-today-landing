import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EdgeSection from './components/EdgeSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <EdgeSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
