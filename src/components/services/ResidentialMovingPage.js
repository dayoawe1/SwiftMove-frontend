import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Home, 
  Building2, 
  Users, 
  Clock, 
  Truck,
  CheckCircle,
  ArrowLeft,
  Phone,
  MapPin,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { BookingSection } from '../BookingSection';

export const ResidentialMovingPage = () => {
  const services = [
    {
      icon: MapPin,
      title: "Local Moving",
      description: "Full-service moving within Indiana, especially focused on our service areas in Indiana Indiana region.",
      features: ["Door-to-door service", "Same-day availability", "Transparent pricing", "Local expertise"]
    },
    {
      icon: Building2,
      title: "Apartment & Condo Moving",
      description: "Expertise in navigating buildings, elevators, parking restrictions, and tight spaces with care and efficiency.",
      features: ["Elevator coordination", "Building requirements compliance", "Furniture protection", "Efficient loading"]
    },
    {
      icon: Home,
      title: "Single-Family Home Moving",
      description: "Handling larger homes and complete households with our experienced team and proper equipment.",
      features: ["Large item handling", "Multiple room coordination", "Garage & outdoor items", "Complete household moves"]
    },
    {
      icon: Users,
      title: "Senior & Downsizing Moves",
      description: "Special care, patience, and planning for life transitions. We understand these moves require extra attention and compassion.",
      features: ["Patient service", "Extra care handling", "Downsizing assistance", "Estate coordination"]
    },
    {
      icon: Clock,
      title: "Last-Minute/Emergency Moves",
      description: "Flexible scheduling for urgent relocation needs. We're here when you need us most.",
      features: ["Same-day service", "Flexible scheduling", "Quick response", "Emergency availability"]
    }
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-600 to-navy-blue text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606492775219-7babadc15e83')" }}
        ></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Home className="h-4 w-4" />
              <span className="font-medium">Residential Moving</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Professional Residential Moving Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Whether you're moving across the street or across town, our experienced team handles your belongings 
              with the care and attention they deserve. We make moving day stress-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-bright-orange hover:bg-orange-600 text-white"
                onClick={scrollToBooking}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy-blue"
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
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Residential Moving Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From local apartment moves to complete household relocations, we have the expertise to handle it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-sky-100 to-green-100 p-4 rounded-lg w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-sky-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-sky-600 hover:bg-sky-700 text-white"
                    onClick={scrollToBooking}
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SwiftMove for Your Home Move?</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Licensed & Insured", desc: "Full coverage for your peace of mind" },
              { title: "Experienced Team", desc: "Professional movers with years of experience" },
              { title: "Transparent Pricing", desc: "No hidden fees or surprise charges" },
              { title: "Customer Focused", desc: "Your satisfaction is our priority" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <BookingSection />

      {/* FAQ Section */}
      <FAQSection faqs={[
        {
          question: "How do I prepare for my move?",
          answer: "We recommend boxing all small items and securing loose parts. Defrost your refrigerator 24 hours ahead. Have a designated \"do not move\" area for items staying behind."
        },
        {
          question: "Do you move specialty items like pianos, antiques, or artwork?",
          answer: "Yes, we have experience handling delicate, valuable, and heavy items. Please inform us in advance so we can bring the proper equipment and assign specially trained crew members."
        },
        {
          question: "What items are you not allowed to move?",
          answer: "For safety and legal reasons, we cannot transport hazardous materials, flammable liquids, propane tanks, aerosols, live plants, pets, or perishable food items. We provide a detailed list during our booking process."
        },
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 1-2 weeks in advance, especially during peak seasons (summer months and weekends). However, we often accommodate last-minute requests based on availability."
        },
        {
          question: "Do you offer free estimates?",
          answer: "Yes! We provide free, no-obligation estimates for both moving and cleaning services. We prefer to conduct a quick virtual walk-through (via video call) or an in-person assessment for larger moves to provide the most accurate quote."
        },
        {
          question: "What is your cancellation/rescheduling policy?",
          answer: "We require at least 48 hours' notice for cancellation or rescheduling to avoid a fee. This allows us to offer that time to another client."
        },
        {
          question: "Are there any additional fees?",
          answer: "Our quotes are transparent. Potential additional fees would only apply for circumstances like excessive haul-away requirements, extremely heavy items requiring extra equipment, or significant last-minute additions to the job scope, all of which would be communicated and approved by you first."
        }
      ]} color="sky" />

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Move?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation quote. Our team is ready to make your residential move smooth and hassle-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
              onClick={scrollToBooking}
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

// FAQ Section Component
const FAQSection = ({ faqs, color = "sky" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const colorClasses = {
    sky: { bg: "bg-sky-100", text: "text-sky-600", ring: "ring-sky-200" },
    green: { bg: "bg-green-100", text: "text-green-600", ring: "ring-green-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", ring: "ring-orange-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", ring: "ring-purple-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", ring: "ring-teal-200" }
  };
  
  const colors = colorClasses[color] || colorClasses.sky;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center space-x-2 ${colors.bg} px-4 py-2 rounded-full mb-4`}>
            <HelpCircle className={`h-4 w-4 ${colors.text}`} />
            <span className={`${colors.text} font-medium`}>FAQ</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-md overflow-hidden transition-all duration-300 ${
                openIndex === index ? `shadow-lg ring-2 ${colors.ring}` : ''
              }`}
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full text-left">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 ${colors.text} flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
