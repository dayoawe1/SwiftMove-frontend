import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Truck, Sparkles, Phone, Clock } from 'lucide-react';

export const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-sky-100 to-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional
                <span className="text-sky-blue"> Moving</span> &
                <span className="text-vibrant-green"> Cleaning</span> Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Trusted by thousands of families and businesses. We handle your move and leave your space spotless.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Truck className="h-5 w-5 text-sky-blue" />
                </div>
                <span className="text-gray-700">Professional Movers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Sparkles className="h-5 w-5 text-vibrant-green" />
                </div>
                <span className="text-gray-700">Deep Cleaning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-vibrant-green" />
                </div>
                <span className="text-gray-700">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-light-gray p-2 rounded-lg">
                  <Phone className="h-5 w-5 text-navy-blue" />
                </div>
                <span className="text-gray-700">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-navy-blue text-white hover:opacity-90 px-8 py-6 text-lg"
                onClick={() => scrollToSection('booking')}
              >
                Book Moving Service
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-bright-orange text-bright-orange hover:bg-orange-50 px-8 py-6 text-lg"
                onClick={() => scrollToSection('booking')}
              >
                Get Free Quote
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Moving Services</h3>
                  <p className="text-gray-600 mb-4">Residential and commercial moving with professional care.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-sky-blue text-sky-blue hover:bg-blue-50"
                    onClick={() => scrollToSection('services')}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg border-0">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cleaning Services</h3>
                  <p className="text-gray-600 mb-4">Deep cleaning for homes and offices after your move.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-bright-orange text-bright-orange hover:bg-orange-50"
                    onClick={() => scrollToSection('services')}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Emergency Moving?</h4>
                <p className="text-sm text-gray-600 mb-3">Call us now for same-day service</p>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                  onClick={() => window.open('tel:8126694165', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (812) 669-4165
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
