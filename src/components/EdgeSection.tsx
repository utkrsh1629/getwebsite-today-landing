import React from 'react';
import { Check } from 'lucide-react';

const EdgeSection = () => {
  const edgePoints = [
    {
      title: "Delivered in 7–14 days",
      description: "Get your website up and running quickly without compromising on quality."
    },
    {
      title: "Fixed pricing, no surprises",
      description: "Transparent pricing with no hidden fees or unexpected costs."
    },
    {
      title: "Responsive on all devices",
      description: "Your website will look perfect on desktops, tablets, and mobile phones."
    },
    {
      title: "Includes copy, design, development",
      description: "Complete package with professional copywriting, design, and development."
    },
    {
      title: "Lifetime support",
      description: "We're here to help you with any issues or updates you might need."
    },
    {
      title: "No-code & SEO optimized",
      description: "Easy to manage without technical knowledge and optimized for search engines."
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter">Our Edge Over Others</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {edgePoints.map((point, index) => (
            <div key={index} className="flex items-start p-4">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1">{point.title}</h3>
                <p className="text-sm text-text-secondary">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdgeSection;
