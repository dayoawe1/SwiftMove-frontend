import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { 
  Sparkles, 
  Calendar, 
  Home, 
  Hammer,
  CheckCircle,
  ArrowLeft,
  Phone,
  Star,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { BookingSection } from '../BookingSection';

export const ResidentialCleaningPage = () => {
  const services = [
    {
      icon: Calendar,
      title: "Recurring Cleaning",
      description: "Weekly, bi-weekly, or monthly maintenance cleans to keep your home consistently spotless.",
      features: ["Dusting all surfaces", "Vacuuming & mopping", "Bathroom sanitization", "Kitchen deep clean"],
      popular: true
    },
    {
      icon: Sparkles,
      title: "One-Time/Deep Cleaning",
      description: "Thorough top-to-bottom cleaning for spring cleaning, post-renovation, or pre-event preparation.",
      features: ["Baseboard cleaning", "Inside cabinets", "Appliance cleaning", "Window sills & tracks"]
    },
    {
      icon: Home,
      title: "Move-In/Move-Out Cleaning",
      description: "Critical service for landlords and new homeowners. Ensures a spotless, ready property.",
      features: ["Complete sanitization", "Appliance deep clean", "Carpet treatment", "Wall spot cleaning"],
      popular: true
    },
    {
      icon: Hammer,
      title: "Post-Construction Clean-Up",
      description: "Removing dust, debris, and final touch-ups after remodeling or construction projects.",
      features: ["Dust removal", "Debris cleanup", "Surface polishing", "Final detailing"]
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
      <div className="relative bg-gradient-to-br from-purple-600 to-navy-blue text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg')" }}
        ></div>
        <div className="relative container mx-auto px-4 py-20">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Residential Cleaning</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Residential Cleaning Services
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From weekly maintenance to deep cleaning, our professional team keeps your home 
              sparkling clean. Enjoy a fresh, healthy living environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-bright-orange hover:bg-orange-600 text-white"
                onClick={scrollToBooking}
              >
                Book Cleaning
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our House Cleaning Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need regular maintenance or a one-time deep clean, we deliver exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                <CardContent className="p-8">
                  {service.popular && (
                    <div className="flex items-center space-x-1 text-purple-600 mb-4">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg w-fit mb-6">
                    <IconComponent className="h-8 w-8 text-purple-600" />
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
                    className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white"
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

      {/* What's Included */}
      <div className="bg-light-gray py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included in Our Cleaning</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Kitchen</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Clean countertops & backsplash</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Appliance exterior cleaning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Sink & faucet sanitization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Floor mopping</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Bathrooms</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Toilet sanitization</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Shower/tub scrubbing</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mirror & glass cleaning</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Floor disinfection</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Living Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dusting all surfaces</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Vacuuming carpets</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mopping hard floors</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Trash removal</li>
              </ul>
            </div>
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
          question: "Do I need to be home while you clean?",
          answer: "That's entirely up to you! Many of our clients provide us with a key, garage code, or arrange for a neighbor to let us in. We are fully vetted and insured for your peace of mind. We can discuss secure access options during booking."
        },
        {
          question: "How do I prepare for my cleaning appointment?",
          answer: "We ask that you tidy up by putting away personal items, toys, and clutter so our team can focus on deep cleaning surfaces."
        },
        {
          question: "How far in advance should I book?",
          answer: "We recommend booking at least 1-2 weeks in advance, especially during peak seasons (summer months and weekends). However, we often accommodate last-minute requests based on availability."
        },
        {
          question: "What is your cancellation/rescheduling policy?",
          answer: "We require at least 48 hours' notice for cancellation or rescheduling to avoid a fee. This allows us to offer that time to another client."
        },
        {
          question: "Are there any additional fees?",
          answer: "Our quotes are transparent. Potential additional fees would only apply for circumstances like excessive haul-away requirements or significant last-minute additions to the job scope, all of which would be communicated and approved by you first."
        }
      ]} color="purple" />

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Cleaner Home?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Book your residential cleaning service today and come home to a spotless, fresh-smelling house.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
              onClick={scrollToBooking}
            >
              Book Cleaning Service
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
const FAQSection = ({ faqs, color = "purple" }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const colorClasses = {
    sky: { bg: "bg-sky-100", text: "text-sky-600", ring: "ring-sky-200" },
    green: { bg: "bg-green-100", text: "text-green-600", ring: "ring-green-200" },
    orange: { bg: "bg-orange-100", text: "text-orange-600", ring: "ring-orange-200" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", ring: "ring-purple-200" },
    teal: { bg: "bg-teal-100", text: "text-teal-600", ring: "ring-teal-200" }
  };
  
  const colors = colorClasses[color] || colorClasses.purple;

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
