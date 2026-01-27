import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    // General FAQs
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
      question: "What if I need to change my moving/cleaning plan on the day of service?",
      answer: "We aim to be flexible! Please communicate any changes to the team lead immediately. They will assess if it affects the timeline or cost and get your approval before proceeding."
    },
    {
      question: "Are there any additional fees?",
      answer: "Our quotes are transparent. Potential additional fees would only apply for circumstances like excessive haul-away requirements, extremely heavy items requiring extra equipment, or significant last-minute additions to the job scope, all of which would be communicated and approved by you first."
    },
    // Moving FAQs
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
      question: "Can I book a packing service without a full move?",
      answer: "Yes, absolutely! You can hire our professional packing team as a standalone service. This is perfect if you're doing a DIY move but want the efficiency and safety of expert packing."
    },
    {
      question: "How long does the moving process take?",
      answer: "It all depends on such factors as the size of a move as well as the distance. Let's say that you are moving locally. In this case, you will be able to relocate within 4-10 hours, depending on how much stuff you have."
    },
    {
      question: "Can the movers transport my pets?",
      answer: "Unfortunately, there is no safe place in the moving truck for pets to ride. They can not be transported in the cab for insurance reasons, and the box of the truck is inappropriate due to lack of climate control and the danger posed by potential shifting of heavy objects."
    },
    {
      question: "Is it possible to move during inclement weather?",
      answer: "Professional movers are prepared to move during rain, sleet, or snow if need be. The only time a booked move is affected by weather is in extreme cases (tornados, extreme cold, etc…) where public warnings are issued. They come equipped with supplies to keep your belongings safe from the elements."
    },
    // Cleaning FAQs
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
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="h-4 w-4" />
              <span className="font-medium">FAQ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about our moving and cleaning services. 
              Can't find what you're looking for? Give us a call!
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-md overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-lg ring-2 ring-sky-200' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-sky-blue flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </button>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <Card className="max-w-xl mx-auto border-0 shadow-lg bg-gradient-to-r from-sky-50 to-orange-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Give us a call and we'll be happy to answer any questions you have.
              </p>
              <Button 
                size="lg"
                className="bg-bright-orange hover:bg-orange-600 text-white"
                onClick={() => window.location.href = 'tel:8126694165'}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call (812) 669-4165
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
