import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with getwebsite.today was a game-changer for our business. They delivered a stunning website in just 10 days that perfectly captured our brand.",
      name: "Sarah Johnson",
      company: "Bloom Boutique",
      avatar: "SJ"
    },
    {
      quote: "I was impressed by how quickly they understood our needs and translated them into a beautiful, functional website that's already driving sales.",
      name: "Michael Chen",
      company: "TechNova Solutions",
      avatar: "MC"
    },
    {
      quote: "The process was seamless from start to finish. They took care of everything, and our new site has received countless compliments from our customers.",
      name: "Emma Rodriguez",
      company: "Coastal Cafe",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter">Client Testimonials</h2>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col">
                  <Quote className="h-6 w-6 text-primary mb-4" />
                  <p className="text-sm italic text-text-secondary flex-grow mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-text-secondary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
