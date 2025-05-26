import React from 'react';
import { Card, CardContent } from './ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      name: "Bloom Boutique",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Bloom+Boutique",
      category: "E-commerce"
    },
    {
      name: "TechNova Solutions",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=TechNova",
      category: "SaaS"
    },
    {
      name: "Coastal Cafe",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Coastal+Cafe",
      category: "Restaurant"
    },
    {
      name: "Fitness First",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Fitness+First",
      category: "Health & Wellness"
    },
    {
      name: "Urban Architects",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Urban+Architects",
      category: "Professional Services"
    },
    {
      name: "Green Earth",
      image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Green+Earth",
      category: "Non-profit"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 tracking-tighter">Project Previews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="font-bold text-lg">{project.name}</h3>
                      <p className="text-sm opacity-80">{project.category}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
