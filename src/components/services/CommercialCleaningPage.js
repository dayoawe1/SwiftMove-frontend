import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Building, 
  Store, 
  Stethoscope, 
  Droplets,
  Sparkles,
  CheckCircle,
  ArrowLeft,
  Phone,
  Calendar,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { BookingSection } from '../BookingSection';

export const CommercialCleaningPage = () => {
  const services = [
    {
      icon: Building,
      title: "Daily/Weekly Office Cleaning",
      description: "Emptying trash, vacuuming, cleaning restrooms, wiping down common areas and kitchens.",
      features: ["Trash removal", "Vacuuming & mopping", "Restroom sanitization", "Kitchen/break room cleaning"]
    },
    {
      icon: Store,
      title: "Retail Store Cleaning",
      description: "Floor care, glass door cleaning, and maintaining a customer-ready appearance for your business.",
      features: ["Floor maintenance", "Glass & mirror cleaning", "Display dusting", "Entrance cleaning"]
    },
    {
      icon: Stethoscope,
      title: "Medical/Professional Office Cleaning",
      description: "Higher-touch disinfecting and attention to hygiene for healthcare and professional environments.",
      features: ["Hospital-grade disinfection", "Waiting room cleaning", "Exam room sanitization", "HIPAA compliant"]
    },
    {
      icon: Droplets,
      title: "Carpet Cleaning",
      description: "Hot water extraction or steam cleaning for commercial and residential carpets.",
      features: ["Hot water extraction", "Steam cleaning", "Stain removal", "Odor treatment"]
    },
    {
      icon: Sparkles,
      title: "Window Cleaning",
      description: "Interior and exterior window washing (ground floor for safety) to keep your business looking professional.",
      features: ["Interior windows", "Exterior (ground floor)", "Glass partition cleaning", "Streak-free finish"]
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
      <div className="relative bg-gradient-to-br from-teal-600 to-navy-blue text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1686178827149-6d55c72d81df')" }}
        ></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Building className="h-4 w-4" />
              <span className="font-medium">Commercial & Office Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Commercial & Office Cleaning Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Maintain a clean, healthy, and professional work environment. Our commercial cleaning team 
              ensures your business always makes a great impression.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commercial Cleaning Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From daily office maintenance to specialized medical facility cleaning, we keep your business spotless and hygienic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-4 rounded-lg w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-teal-600" />
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
                    className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white"
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

      {/* Scheduling Options */}
      <div className="bg-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Scheduling Options</h2>
            <p className="text-gray-600">We work around your business hours</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Calendar, 
                title: "Daily Service", 
                desc: "Keep your office pristine with daily cleaning service",
                features: ["Morning or evening service", "Consistent team", "Daily checklist"]
              },
              { 
                icon: Calendar, 
                title: "Weekly Service", 
                desc: "Perfect for small offices and professional spaces",
                features: ["Scheduled day & time", "Thorough cleaning", "Cost-effective"]
              },
              { 
                icon: Calendar, 
                title: "Custom Schedule", 
                desc: "Tailored cleaning schedule for your specific needs",
                features: ["Flexible timing", "After-hours available", "Weekend service"]
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Corporate Offices",
              "Medical Facilities",
              "Retail Stores",
              "Restaurants",
              "Schools",
              "Churches",
              "Gyms & Fitness",
              "Warehouses"
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg text-center">
                <span className="font-medium text-gray-900">{industry}</span>
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
          question: "What is included in your standard cleaning?",
          answer: "Our standard cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning and sanitizing bathrooms (toilets, showers, sinks, mirrors), cleaning the kitchen (countertops, sink, appliance exteriors), and emptying trash."
        },
        {
          question: "What is the difference between a standard clean and a deep clean?",
          answer: "A standard clean maintains a level of cleanliness. A deep clean is a much more thorough service for first-time clients or periodic refreshment. It includes detailed tasks like cleaning inside cabinets and appliances, descaling showerheads, wiping baseboards, cleaning window sills, and more."
        },
        {
          question: "Do you bring your own cleaning supplies and equipment?",
          answer: "Yes, our teams arrive fully equipped with professional-grade, effective cleaning supplies, vacuums, and mops. If you have specific products you prefer (e.g., eco-friendly or for sensitive surfaces), we are happy to use them—just let us know in advance."
        },
        {
          question: "Are your cleaning products safe for children and pets?",
          answer: "We use industry-standard, effective cleaning products. We can also provide an eco-friendly/green cleaning option upon request, which uses non-toxic, pet- and child-safe formulas. Please specify this when booking."
        },
        {
          question: "Do I need to be present while you clean?",
          answer: "That's entirely up to you! Many of our commercial clients provide us with a key or access code. We are fully vetted and insured for your peace of mind. We can discuss secure access options during booking."
        },
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 1-2 weeks in advance, especially during peak seasons. However, we often accommodate last-minute requests based on availability."
        },
        {
          question: "What is your cancellation/rescheduling policy?",
          answer: "We require at least 48 hours' notice for cancellation or rescheduling to avoid a fee. This allows us to offer that time to another client."
        },
        {
          question: "Are there any additional fees?",
          answer: "Our quotes are transparent. Potential additional fees would only apply for circumstances like excessive haul-away requirements or significant last-minute additions to the job scope, all of which would be communicated and approved by you first."
        }
      ]} color="teal" />

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Commercial Cleaning?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Keep your business clean, healthy, and inviting. Contact us for a customized commercial cleaning quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
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
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQSection = ({ faqs, color = "teal" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const colorClasses = {
    sky: { bg: "bg-sky-100", text: "text-sky-600", ring: "ring-sky-200" },
    green: { bg: "bg-green-100", text: "text-green-600", ring: "ring-green-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", ring: "ring-orange-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", ring: "ring-purple-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", ring: "ring-teal-200" }
  };
  
  const colors = colorClasses[color] || colorClasses.teal;

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
