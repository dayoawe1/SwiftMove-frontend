import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Home, 
  Building, 
  Truck, 
  Sparkles, 
  Clock,
  CheckCircle,
  Package,
  ArrowRight
} from 'lucide-react';

export const ServicesSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Home,
      title: "Local Moving",
      description: "Full-service local moving within Indiana. Quick, efficient, and stress-free relocations in your area.",
      features: ["Same-Day Service", "Apartment & Condo", "Single-Family Home", "Senior Moves"],
      badge: "Popular",
      badgeColor: "bg-blue-100 text-blue-800",
      link: "#booking",
      isMoving: true
    },
    {
      icon: Truck,
      title: "Long Distance Moving",
      description: "Professional long distance moving services across state lines with care and precision.",
      features: ["Interstate Moving", "Cross-Country", "Full Packing Service", "GPS Tracking"],
      badge: "Interstate",
      badgeColor: "bg-green-100 text-green-800",
      link: "#booking",
      isMoving: true
    },
    {
      icon: Clock,
      title: "Last Minute Moving",
      description: "Emergency and same-day moving services when you need to relocate quickly.",
      features: ["Same-Day Service", "Emergency Moves", "Flexible Scheduling", "Quick Response"],
      badge: "Urgent",
      badgeColor: "bg-red-100 text-red-800",
      link: "#booking",
      isMoving: true
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description: "Office relocations with minimal downtime. We handle IT equipment, furniture, and phased moves.",
      features: ["Office Relocations", "Business Moving", "Weekend Moves", "Equipment Assembly"],
      badge: "Business",
      badgeColor: "bg-purple-100 text-purple-800",
      link: "#booking",
      isMoving: true
    },
    {
      icon: Sparkles,
      title: "House Cleaning",
      description: "Recurring, deep cleaning, move-in/out, and post-construction cleaning for your home.",
      features: ["Recurring Cleaning", "Deep Cleaning", "Move-In/Out", "Post-Construction"],
      badge: "Cleaning",
      badgeColor: "bg-orange-100 text-orange-800",
      link: "/services/residential-cleaning",
      isMoving: false
    },
    {
      icon: Building,
      title: "Office Cleaning",
      description: "Professional office, retail, medical facility cleaning, carpet and window services.",
      features: ["Daily/Weekly Office", "Retail Store", "Medical Office", "Carpet & Windows"],
      badge: "Commercial",
      badgeColor: "bg-teal-100 text-teal-800",
      link: "/services/commercial-cleaning",
      isMoving: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sky-100 px-4 py-2 rounded-full mb-4">
            <Truck className="h-4 w-4 text-sky-blue" />
            <span className="text-sky-blue font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Moving & Cleaning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential moves to commercial relocations, we provide comprehensive services 
            to make your transition smooth and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            // Service images
            const serviceImages = [
              "https://images.unsplash.com/photo-1606492775219-7babadc15e83", // Residential Moving
              "https://images.pexels.com/photos/7464244/pexels-photo-7464244.jpeg", // Commercial Moving
              "https://images.unsplash.com/photo-1600518464441-9154a4dea21b", // Moving Support
              "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg", // House Cleaning
              "https://images.unsplash.com/photo-1686178827149-6d55c72d81df" // Office Cleaning
            ];
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceImages[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={service.badgeColor}>
                      {service.badge}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-sky-100 to-green-100 p-3 rounded-lg">
                      <IconComponent className="h-6 w-6 text-sky-blue" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {service.isMoving ? (
                      <Button 
                        variant="outline" 
                        className="flex-1 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white transition-all duration-300"
                        onClick={() => scrollToSection('booking')}
                      >
                        Book Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Link to={service.link} className="flex-1">
                        <Button 
                          variant="outline" 
                          className="w-full border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    )}
                    <Button 
                      className="bg-bright-orange text-white hover:opacity-90"
                      onClick={() => scrollToSection('booking')}
                    >
                      Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Custom Quote Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every moving and cleaning job is unique. Get a personalized quote based on your specific needs, 
              timeline, and requirements. Our team will provide a detailed estimate with transparent pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Free consultation and assessment</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Transparent pricing with no hidden fees</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Flexible scheduling options</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Professional licensed and insured team</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Get Your Free Quote
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Quick response within 2 hours
                </p>
                <Button 
                  className="w-full bg-sky-blue hover:opacity-90 text-white py-3 mb-3"
                  onClick={() => scrollToSection('booking')}
                >
                  Request Free Quote
                </Button>
                <div className="text-center">
                  <p className="text-gray-600 text-sm mb-2">Or call us directly</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                    onClick={() => window.location.href = 'tel:8126694165'}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Call (812) 669-4165
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-gradient-to-r from-sky-100 to-yellow-100 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas</h3>
            <p className="text-gray-600">We proudly serve Indiana with our moving and cleaning services</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {[
              "Bloomington, IN",
              "Indianapolis, IN",
              "Columbus, IN",
              "Lafayette, IN",
              "Carmel, IN",
              "Greenwood, IN",
              "Avon, IN",
              "Seymour, IN",
              "Greensburg, IN",
              "Fishers, IN",
              "Zionsville, IN",
              "Muncie, IN",
              "Danville, IN"
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-medium text-gray-900 text-sm">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Proudly serving Indiana communities with reliable, professional service!</p>
            <Button className="bg-bright-orange text-white hover:opacity-90">
              Get Service Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
