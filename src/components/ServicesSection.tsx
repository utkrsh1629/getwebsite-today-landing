import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Single-Page Landing",
      price: "Starts at $1499",
      delivery: "2 weeks",
      description: "Perfect for businesses looking to establish an online presence quickly with a focused, conversion-optimized landing page."
    },
    {
      title: "Full Website Package",
      price: "Starts at $2499",
      delivery: "3–4 weeks",
      description: "Complete website solution with multiple pages, custom features, and comprehensive content strategy."
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-text-secondary">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <div className="text-sm text-text-secondary">Delivery: {service.delivery}</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
