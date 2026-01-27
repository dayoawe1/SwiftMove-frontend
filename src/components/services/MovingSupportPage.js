import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Package, 
  PackageOpen, 
  ShoppingBag, 
  Truck,
  Shield,
  CheckCircle,
  ArrowLeft,
  Phone,
  Box,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { BookingSection } from '../BookingSection';

export const MovingSupportPage = () => {
  const services = [
    {
      icon: Package,
      title: "Full Packing Service",
      description: "Professional packing of all household/office items using quality materials. We handle everything from start to finish.",
      features: ["Quality packing materials", "Labeling system", "Fragile item expertise", "Complete household packing"]
    },
    {
      icon: PackageOpen,
      title: "Partial Packing Service",
      description: "Packing only fragile items (china, art, electronics) or specific rooms. Perfect for those who want help with the delicate stuff.",
      features: ["Fragile items only", "Specific room packing", "Artwork & antiques", "Electronics protection"]
    },
    {
      icon: ShoppingBag,
      title: "Packing Supplies Sale",
      description: "Selling boxes, tape, bubble wrap, and mattress bags. Everything you need for a DIY move at competitive prices.",
      features: ["Moving boxes (all sizes)", "Bubble wrap & paper", "Tape & markers", "Mattress bags & covers"]
    },
    {
      icon: Box,
      title: "Loading & Unloading Assistance",
      description: "For customers who rent their own truck (DIY move help). Our team provides the muscle while you save money.",
      features: ["Truck loading", "Unloading service", "Heavy lifting", "Efficient placement"]
    },
    {
      icon: Shield,
      title: "Furniture Protection",
      description: "Using moving blankets, plastic wrap, and specialized pads to ensure your furniture arrives in perfect condition.",
      features: ["Moving blankets", "Plastic wrap protection", "Corner guards", "Specialized pads"]
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Providing the moving truck and skilled driver. Our well-maintained fleet and experienced drivers ensure safe delivery.",
      features: ["Various truck sizes", "Experienced drivers", "GPS tracking", "Proper securing"]
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
      <div className="relative bg-gradient-to-br from-orange-500 to-navy-blue text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b')" }}
        ></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Package className="h-4 w-4" />
              <span className="font-medium">Moving Support Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Moving Support Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From professional packing to loading assistance, we offer flexible support services 
              to match your needs and budget. Get exactly the help you need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-bright-orange hover:bg-orange-600 text-white"
                onClick={scrollToBooking}
              >
                Get Support Quote
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Moving Support Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the services that fit your needs. Whether you need full-service packing or just some extra hands, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-4 rounded-lg w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-orange-600" />
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
                    className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white"
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

      {/* Moving Supplies Section */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Moving Supplies</h2>
            <p className="text-gray-600">Quality moving supplies at competitive prices</p>
          </div>
          
          {/* Supplies Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Table Header */}
            <div className="bg-navy-blue text-white grid grid-cols-12 gap-4 p-4 font-semibold">
              <div className="col-span-2 text-center">IMAGE</div>
              <div className="col-span-5">DESCRIPTION</div>
              <div className="col-span-3 text-center">SIZE</div>
              <div className="col-span-2 text-center">PRICE</div>
            </div>
            
            {/* Table Rows */}
            {[
              {
                name: "Small Box",
                description: "Pack heavy items such as books, records, tools and files. Remember the heavier the items, the smaller the box.",
                size: '18"x12"x12"',
                price: "$2.50",
                icon: "📦"
              },
              {
                name: "Medium Box",
                description: "This box is ideal for shoes, purses, pots, pans, food, or toys.",
                size: '18"x18"x16"',
                price: "$3.50",
                icon: "📦"
              },
              {
                name: "Large Box",
                description: "Large boxes are perfect for bigger, lighter items such as lamp shades, bulky blankets, or towels.",
                size: '18"x18"x24"',
                price: "$4.50",
                icon: "📦"
              },
              {
                name: "Dish Barrel",
                description: "These are heavy duty boxes designed for china and glassware, keeping them safe during a move.",
                size: '18"x18"x28"',
                price: "$9.00",
                icon: "🍽️"
              },
              {
                name: "Wardrobe Box w/ Bar",
                description: "These handy boxes allow you to hang clothing in them, straight from your closet.",
                size: '24"x21"x46"',
                price: "$16.00",
                icon: "👔"
              },
              {
                name: "Large Mirror Box",
                description: "These are four-piece, adjustable boxes used for packing flat items.",
                size: '40"x60"',
                price: "$10.00",
                icon: "🪞"
              },
              {
                name: "Tape",
                description: "Packing tape is used to secure all contents within boxes during a move.",
                size: "-",
                price: "$4.00",
                icon: "🔒"
              },
              {
                name: "Packing Paper - 10LB",
                description: "This is used to wrap everyday items for protection from scratching and can be used as cushion in boxes.",
                size: "10LB",
                price: "$13.00",
                icon: "📄"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-12 gap-4 p-6 items-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}
              >
                <div className="col-span-2 text-center">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-lg flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                </div>
                <div className="col-span-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <div className="col-span-3 text-center text-gray-700">{item.size}</div>
                <div className="col-span-2 text-center text-blue-600 font-bold text-lg">{item.price}</div>
              </div>
            ))}
          </div>
          
          {/* Disclaimer */}
          <p className="text-center text-gray-500 italic mt-8 text-sm">
            *Prices are subject to change and may not reflect taxes. Additional boxes may be available for purchase.*
          </p>
          
          <div className="text-center mt-8">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Phone className="h-4 w-4 mr-2" />
              Call to Order Supplies
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <BookingSection />

      {/* FAQ Section */}
      <FAQSection faqs={[
        {
          question: "Can I book a packing service without a full move?",
          answer: "Yes, absolutely! You can hire our professional packing team as a standalone service. This is perfect if you're doing a DIY move but want the efficiency and safety of expert packing."
        },
        {
          question: "How do I prepare for my move?",
          answer: "We recommend boxing all small items and securing loose parts. Defrost your refrigerator 24 hours ahead. Have a designated \"do not move\" area for items staying behind."
        },
        {
          question: "Do you move specialty items like pianos, antiques, or artwork?",
          answer: "Yes, we have experience handling delicate, valuable, and heavy items. Please inform us in advance so we can bring the proper equipment and assign specially trained crew members."
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
      ]} color="orange" />

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Moving Support?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you need full packing service or just help loading your rental truck, 
            we're here to make your move easier.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
              onClick={scrollToBooking}
            >
              Request Support Services
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
const FAQSection = ({ faqs, color = "orange" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const colorClasses = {
    sky: { bg: "bg-sky-100", text: "text-sky-600", ring: "ring-sky-200" },
    green: { bg: "bg-green-100", text: "text-green-600", ring: "ring-green-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", ring: "ring-orange-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", ring: "ring-purple-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", ring: "ring-teal-200" }
  };
  
  const colors = colorClasses[color] || colorClasses.orange;

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
