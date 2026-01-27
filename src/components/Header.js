import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Phone, ChevronDown, Home, Building, Package, Sparkles } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const serviceLinks = [
    { name: "Residential Moving", path: "/services/residential-moving", icon: Home },
    { name: "Commercial Moving", path: "/services/commercial-moving", icon: Building },
    { name: "Moving Support", path: "/services/moving-support", icon: Package },
    { name: "House Cleaning", path: "/services/residential-cleaning", icon: Sparkles },
    { name: "Office Cleaning", path: "/services/commercial-cleaning", icon: Building },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
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
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-sky-blue transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button 
                onClick={toggleServicesDropdown}
                className="flex items-center text-gray-700 hover:text-sky-blue transition-colors"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border py-2 z-50">
                  <Link
                    to="/services"
                    className="flex items-center px-4 py-2 text-sky-blue hover:bg-sky-50 transition-colors font-medium border-b mb-1"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    View All Services
                  </Link>
                  {serviceLinks.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <Link
                        key={index}
                        to={service.path}
                        className="flex items-center px-4 py-2 text-gray-700 hover:bg-sky-50 hover:text-sky-blue transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
                        {service.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-700 hover:text-sky-blue transition-colors">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-sky-blue transition-colors">About</Link>
            <Link to="/faq" className="text-gray-700 hover:text-sky-blue transition-colors">FAQs</Link>
            <Link to="/reviews" className="text-gray-700 hover:text-sky-blue transition-colors">Reviews</Link>
            <Link to="/contact" className="text-gray-700 hover:text-sky-blue transition-colors">Contact</Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:8126694165" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-sky-blue transition-colors">
              <Phone className="h-4 w-4" />
              <span>(812) 669-4165</span>
            </a>
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
              <Link to="/" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              
              {/* Mobile Services Submenu */}
              <div className="space-y-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-sky-blue transition-colors"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 border-l-2 border-sky-200">
                    <Link to="/services" className="block text-gray-600 hover:text-sky-blue transition-colors text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                      All Services
                    </Link>
                    {serviceLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-gray-600 hover:text-sky-blue transition-colors text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/pricing" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link to="/about" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/faq" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>FAQs</Link>
              <Link to="/reviews" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link to="/contact" className="text-gray-700 hover:text-sky-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <a href="tel:8126694165" className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="h-4 w-4" />
                <span>(812) 669-4165</span>
              </a>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                onClick={() => scrollToSection('booking')}
              >
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
