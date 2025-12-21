import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={scrollToTop} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://customer-assets.emergentagent.com/job_swift-movers-1/artifacts/3vyram8e_Gemini_Generated_Image_tphblstphblstphb.png" 
                alt="SwiftMove & Clean Logo" 
                className="rounded-lg shadow-sm"
                style={{height: '50px', width: '150px', objectFit: 'cover'}}
              />
              <div className="text-lg font-black text-navy-blue cursor-pointer tracking-wide">
               
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-sky-blue transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-sky-blue transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-sky-blue transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-sky-blue transition-colors">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-sky-blue transition-colors">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>(501) 575-5189</span>
            </div>
            <Button 
              className="bg-bright-orange text-white hover:opacity-90"
              onClick={() => scrollToSection('booking')}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-sky-blue transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="h-4 w-4" />
                <span>(501) 575-5189</span>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};