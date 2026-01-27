import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  CheckCircle, 
  Phone, 
  Truck, 
  Sparkles, 
  Clock,
  Star,
  ArrowRight
} from 'lucide-react';

export const PricingPage = () => {
  const localMovingPackages = [
    {
      name: "Basic Plan",
      description: "2 Professional Movers",
      price: "",
      priceValue: "$150",
      priceUnit: "/per hr + travel fee",
      features: [
        "Travel Fee: Truck, Miles and Gas",
        "2 Movers + 15/20 feet truck",
        "Loading & Unloading",
        "Includes Moving Equipment:",
        "Dollies, Floor Protection, Straps etc"
      ],
      popular: false,
      color: "sky"
    },
    {
      name: "Standard Plan",
      description: "3 Professional Movers",
      price: "",
      priceValue: "$210",
      priceUnit: "/per hr + travel fee",
      features: [
        "Travel Fee: Truck, Miles and Gas",
        "3 Movers + 20/26 feet truck",
        "Loading & Unloading",
        "Includes Moving Equipment:",
        "Dollies, Floor Protection, Straps etc"
      ],
      popular: true,
      color: "navy"
    },
    {
      name: "Premium Plan",
      description: "4 Professional Movers",
      price: "",
      priceValue: "$270",
      priceUnit: "/per hr + travel fee",
      features: [
        "Travel Fee: Truck, Miles and Gas",
        "4 Movers + 26 feet truck",
        "Loading & Unloading",
        "Includes Moving Equipment:",
        "Dollies, Floor Protection, Straps etc"
      ],
      popular: false,
      color: "blue"
    }
  ];

  const cleaningPackages = [
    {
      name: "Standard Clean",
      description: "Home Cleaning",
      price: "Starting at",
      priceValue: "$150",
      priceUnit: "",
      features: [
        "Vacuum and mop all floors",
        "Dust surfaces, shelves, baseboards",
        "Clean kitchen (counters, appliances, sink)",
        "Clean bathrooms (toilet, shower, sink, mirrors)",
        "Empty trash",
        "Wipe down light switches, door handles"
      ],
      popular: false,
      color: "purple"
    },
    {
      name: "Deep Clean",
      description: "2-3 Bedrooms",
      price: "Starting at",
      priceValue: "$349",
      priceUnit: "",
      features: [
        "Clean inside oven",
        "Clean inside refrigerator",
        "Wash baseboards thoroughly",
        "Clean inside cabinets (if requested)",
        "Wipe down walls and doors",
        "Clean ceiling fans",
        "Clean window sills and tracks",
        "Scrub grout in bathrooms",
        "Move furniture to clean behind/under"
      ],
      popular: true,
      color: "orange"
    },
    {
      name: "Move In/Move Out",
      description: "Complete Property Cleaning",
      price: "Starting at",
      priceValue: "$375",
      priceUnit: "",
      features: [
        "Deep clean entire empty home",
        "All appliances inside and out",
        "All cabinets inside and out",
        "Walls, baseboards, doors",
        "All bathrooms thoroughly scrubbed",
        "All floors thoroughly cleaned",
        "Windows (inside)"
      ],
      popular: false,
      color: "teal"
    }
  ];

  const PricingCard = ({ pkg, type, isLocalMoving = false }) => {
    const bgColors = {
      sky: 'bg-sky-600',
      navy: 'bg-navy-blue',
      blue: 'bg-blue-700',
      green: 'bg-green-600',
      teal: 'bg-teal-600',
      purple: 'bg-purple-600',
      orange: 'bg-orange-500'
    };

    return (
      <Card className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${pkg.popular ? 'ring-2 ring-green-500' : ''}`}>
        {pkg.popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-green-500 text-white text-xs font-bold px-8 py-1 transform rotate-45 translate-x-6 translate-y-3">
              POPULAR
            </div>
          </div>
        )}
        <div className={`${bgColors[pkg.color] || 'bg-sky-600'} text-white p-8`}>
          <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
          <div className="w-12 h-1 bg-white/30 mb-4"></div>
          <div className="flex items-baseline">
            <span className="text-4xl font-bold">{pkg.priceValue}</span>
            {pkg.priceUnit && <span className="text-white/80 text-sm ml-1">{pkg.priceUnit}</span>}
          </div>
        </div>
        <CardContent className="p-8 bg-white">
          <div className="space-y-4 mb-8">
            {pkg.features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <Button 
            className="w-full bg-bright-orange hover:bg-orange-600 text-white py-6 text-lg"
            onClick={() => window.location.href = '/#booking'}
          >
            <CheckCircle className="h-5 w-5 mr-2" />
            BOOK NOW
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Transparent Pricing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Simple, Honest Pricing</h1>
            <p className="text-xl text-white/90 mb-8">
              No hidden fees. No surprises. Just straightforward pricing for quality moving and cleaning services.
            </p>
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600 text-white"
              onClick={() => window.location.href = 'tel:8126694165'}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call for Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Local Moving Pricing */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-navy-blue mb-4">Moving Pricing</h2>
          <p className="text-xl text-orange-500 italic">
            High Quality Professional Movers. Affordable Rates.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {localMovingPackages.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} type="moving" isLocalMoving={true} />
          ))}
        </div>
        <div className="max-w-2xl mx-auto text-left bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">1.</span> Please contact us in advance if you would like us to arrange a truck for your move.
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">2.</span> Use our book your service form to get a quote for your commercial and long-distance move.
          </p>
        </div>
      </div>

      {/* Cleaning Packages */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="text-orange-600 font-medium">Cleaning Services</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cleaning Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional cleaning services for homes and offices. All packages include eco-friendly products.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {cleaningPackages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} type="cleaning" />
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-left bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-3">
              We recommend a quick call to plan your perfect clean. Contact us anytime before booking.
            </p>
            <p className="text-gray-700 mb-3">
              Let us know if you'd like to set up a recurring clean, whether weekly, bi-weekly, or monthly, and we'll customize a plan to fit your schedule.
            </p>
            <p className="text-gray-700 mb-3">
              For a personalized commercial cleaning quote tailored to your space, simply complete our booking form.
            </p>
            <p className="text-gray-700">
              Please specify the size of your space: Studio, 1 Bedroom, 2 Bedrooms, or 3+ Bedrooms. Also, let us know any specific cleaning details.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="container mx-auto px-4 py-16">
        <Card className="border-0 shadow-lg bg-gradient-to-r from-sky-50 to-orange-50">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Quote?</h3>
                <p className="text-gray-600 mb-6">
                  Every move and cleaning job is unique. Contact us for a personalized quote 
                  that matches your specific needs and budget.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Free on-site or video estimates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">No obligation quotes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Price match guarantee</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-bright-orange hover:bg-orange-600 text-white mb-4"
                  onClick={() => window.location.href = '/#booking'}
                >
                  Request Free Quote
                </Button>
                <p className="text-gray-600">or call us at</p>
                <a href="tel:8126694165" className="text-2xl font-bold text-sky-blue hover:underline">
                  (812) 669-4165
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Book your moving or cleaning service today and experience the SwiftMove & Clean difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
              onClick={() => window.location.href = '/#booking'}
            >
              Book Now
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
