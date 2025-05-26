import React from 'react';
import { Button } from './ui/button';
import bgImage from '../assets/bg.png';
import worksGif from '../assets/works.gif';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="min-h-screen pt-[60px] flex items-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:space-x-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              We Launch Your Website
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              Quickly and Hassle-Free
            </h1>
          </div>
          
          {/* Animation */}
          <div className="w-full max-w-[400px] mx-auto mb-8 animate-fade-in">
            <img 
              src={worksGif} 
              alt="Website building process" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Subtext */}
          <p className="text-xl text-white mb-8 max-w-2xl">
            Get a professional website launched in days, not months.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-md"
            >
              Get Started Now
            </Button>
            <Button 
              variant="link" 
              className="text-white flex items-center hover:underline text-sm"
            >
              <Play className="h-4 w-4 mr-2" />
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
