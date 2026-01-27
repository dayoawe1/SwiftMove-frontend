import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Home, 
  Building, 
  Truck, 
  Sparkles, 
  Clock,
  CheckCircle,
  Package,
  ArrowRight,
  Phone
} from 'lucide-react';

export const ServicesPage = () => {
  const services = [
    {
      icon: Home,
      title: "Local Moving",
      description: "Full-service local moving within Indiana. Quick, efficient, and stress-free relocations in your area.",
      features: ["Same-Day Service", "Apartment & Condo", "Single-Family Home", "Senior Moves"],
      link: "/#booking",
      color: "sky",
      isMoving: true
    },
    {
      icon: Truck,
      title: "Long Distance Moving",
      description: "Professional long distance moving services across state lines with care and precision.",
      features: ["Interstate Moving", "Cross-Country", "Full Packing Service", "GPS Tracking"],
      link: "/#booking",
      color: "green",
      isMoving: true
    },
    {
      icon: Clock,
      title: "Last Minute Moving",
      description: "Emergency and same-day moving services when you need to relocate quickly.",
      features: ["Same-Day Service", "Emergency Moves", "Flexible Scheduling", "Quick Response"],
      link: "/#booking",
      color: "red",
      isMoving: true
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description: "Office relocations with minimal downtime. We handle IT equipment, furniture, and phased moves.",
      features: ["Office Relocations", "Business Moving", "Weekend Moves", "Equipment Assembly"],
      link: "/#booking",
      color: "purple",
      isMoving: true
    },
    {
      icon: Package,
      title: "Moving Support",
      description: "Packing services, supplies, loading help, and transportation for your DIY or full-service move.",
      features: ["Full/Partial Packing", "Packing Supplies", "Loading Help", "Transportation"],
      link: "/services/moving-support",
      color: "yellow",
      isMoving: false
    },
    {
      icon: Sparkles,
      title: "House Cleaning",
      description: "Recurring, deep cleaning, move-in/out, and post-construction cleaning for your home.",
      features: ["Recurring Cleaning", "Deep Cleaning", "Move-In/Out", "Post-Construction"],
      link: "/services/residential-cleaning",
      color: "orange",
      isMoving: false
    },
    {
      icon: Building,
      title: "Office Cleaning",
      description: "Professional office, retail, medical facility cleaning, carpet and window services.",
      features: ["Daily/Weekly Office", "Retail Store", "Medical Office", "Carpet & Windows"],
      link: "/services/commercial-cleaning",
      color: "teal",
      isMoving: false
    }
  ];

  const serviceAreas = [
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
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-sky-600 to-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive moving and cleaning services tailored to meet your needs. 
              From local moves to deep cleaning, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-bright-orange hover:bg-orange-600 text-white"
                onClick={() => window.location.href = '/#booking'}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy-blue"
                onClick={() => window.location.href = 'tel:8126694165'}
              >
                <Phone className="h-4 w-4 mr-2" />
                (812) 669-4165
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-br from-${service.color}-100 to-${service.color}-50 p-4 rounded-lg w-fit mb-6`}>
                    <IconComponent className="h-8 w-8 text-sky-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.isMoving ? (
                    <Button 
                      variant="outline" 
                      className="w-full border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white"
                      onClick={() => window.location.href = '/#booking'}
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Link to={service.link}>
                      <Button 
                        variant="outline" 
                        className="w-full border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gradient-to-r from-sky-100 to-yellow-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-gray-600">We proudly serve Indiana with our moving and cleaning services</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-medium text-gray-900 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. Our team is ready to help with your moving and cleaning needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
              onClick={() => window.location.href = '/#booking'}
            >
              Request Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy-blue"
              onClick={() => window.location.href = 'tel:8126694165'}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
