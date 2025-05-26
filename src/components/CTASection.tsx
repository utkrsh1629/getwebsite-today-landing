import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 tracking-tighter">Ready to launch your site?</h2>
        <p className="text-base text-text-secondary max-w-xl mx-auto mb-8">
          Book a free call with our team and go live in days.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-md">
          Book a Call
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
