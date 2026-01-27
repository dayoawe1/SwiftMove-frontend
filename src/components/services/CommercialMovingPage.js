import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Building, 
  Briefcase, 
  Calendar, 
  Wrench,
  Monitor,
  CheckCircle,
  ArrowLeft,
  Phone,
  Clock,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { BookingSection } from '../BookingSection';

export const CommercialMovingPage = () => {
  const services = [
    {
      icon: Building,
      title: "Office Relocations",
      description: "Complete office moving solutions including desks, IT equipment, filing cabinets, and break room items.",
      features: ["IT equipment handling", "Filing cabinet moves", "Desk disassembly/reassembly", "Break room items"]
    },
    {
      icon: Briefcase,
      title: "Business Moving",
      description: "Specialized moving services for retail stores, small businesses, and professional offices of all sizes.",
      features: ["Retail store moves", "Small business relocation", "Professional office moves", "Inventory handling"]
    },
    {
      icon: Calendar,
      title: "Phased or Weekend Moves",
      description: "Minimizing downtime by moving after hours or in stages to keep your business running smoothly.",
      features: ["After-hours service", "Weekend availability", "Staged relocation", "Minimal disruption"]
    },
    {
      icon: Wrench,
      title: "Furniture & Equipment Disassembly/Reassembly",
      description: "Expert handling of cubicles, desks, and large office items with proper tools and techniques.",
      features: ["Cubicle setup", "Desk assembly", "Large equipment", "Workstation configuration"]
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
      <div className="relative bg-gradient-to-br from-green-600 to-navy-blue text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7464244/pexels-photo-7464244.jpeg')" }}
        ></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Building className="h-4 w-4" />
              <span className="font-medium">Commercial & Office Moving</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Commercial & Office Moving Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Relocate your business with minimal disruption. Our commercial moving team ensures your office 
              is up and running quickly, so you can focus on what matters most—your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-bright-orange hover:bg-orange-600 text-white"
                onClick={scrollToBooking}
              >
                Get Business Quote
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commercial Moving Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From small offices to large corporate relocations, we handle every aspect of your business move.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-4 rounded-lg w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-green-600" />
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
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
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

      {/* Benefits Section */}
      <div className="bg-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Businesses Choose Us</h2>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: "Minimize Downtime", desc: "We work around your schedule to keep business interruptions minimal" },
                  { icon: Monitor, title: "IT Equipment Experts", desc: "Safe handling of computers, servers, and sensitive electronics" },
                  { icon: Calendar, title: "Flexible Scheduling", desc: "After-hours, weekends, and phased moves available" },
                  { icon: CheckCircle, title: "Turnkey Service", desc: "From packing to setup, we handle everything" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get a Business Moving Quote</h3>
              <p className="text-gray-600 mb-6">
                Tell us about your office move and we'll provide a customized quote within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Free on-site assessment</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Detailed project timeline</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Competitive pricing</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white"
                onClick={scrollToBooking}
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <BookingSection />

      {/* FAQ Section */}
      <FAQSection faqs={[
        {
          question: "What if I need to change my moving plan on the day of service?",
          answer: "We aim to be flexible! Please communicate any changes to the team lead immediately. They will assess if it affects the timeline or cost and get your approval before proceeding."
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
      ]} color="green" />

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move Your Business?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let our commercial moving experts handle your office relocation. We'll ensure a smooth transition with minimal downtime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
              onClick={scrollToBooking}
            >
              Schedule Consultation
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
const FAQSection = ({ faqs, color = "green" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const colorClasses = {
    sky: { bg: "bg-sky-100", text: "text-sky-600", ring: "ring-sky-200" },
    green: { bg: "bg-green-100", text: "text-green-600", ring: "ring-green-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", ring: "ring-orange-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", ring: "ring-purple-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", ring: "ring-teal-200" }
  };
  
  const colors = colorClasses[color] || colorClasses.green;

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
