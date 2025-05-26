import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Book a Call",
      description: "Schedule a free consultation to discuss your website needs and goals."
    },
    {
      number: 2,
      title: "Share Your Vision",
      description: "Tell us about your brand, target audience, and what you want to achieve."
    },
    {
      number: 3,
      title: "We Design + Build",
      description: "Our team creates a custom website tailored to your specific requirements."
    },
    {
      number: 4,
      title: "You Go Live",
      description: "Launch your new website and start attracting customers right away."
    }
  ];

  return (
    <section className="py-20 bg-white" id="works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter">How It Works</h2>
        
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="mr-6 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gray-200 mx-auto mt-2"></div>
                )}
              </div>
              <div className="pt-1">
                <h3 className="text-base font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
