import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full h-[60px] md:h-[60px] z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="text-primary font-bold text-base">getwebsite.today</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
          <a href="#works" className="text-sm hover:text-primary transition-colors">Our Works</a>
          <Button className="bg-primary text-white text-sm rounded-md hover:bg-primary/90">
            Book a Call
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
                <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
                <a href="#works" className="text-sm hover:text-primary transition-colors">Our Works</a>
                <Button className="bg-primary text-white text-sm rounded-md hover:bg-primary/90 w-full">
                  Book a Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
