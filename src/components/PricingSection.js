import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle, DollarSign, Phone } from 'lucide-react';
import { mockData } from '../mock';

export const PricingSection = () => {
  const { pricingPlans } = mockData;

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-4">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="text-green-600 font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transparent & Competitive Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the package that fits your needs. No hidden fees, no surprises - 
            just honest pricing for quality service.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative group hover:shadow-2xl transition-all duration-300 border-0 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 shadow-xl scale-105' 
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-6 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">starting</span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-white border-2 border-gray-200 text-gray-900 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    Get Free Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Need a Custom Quote?
              </h3>
              <p className="text-gray-600 mb-6">
                Every move is unique. Get a personalized quote based on your specific needs, 
                distance, and timeline. Our team will provide a detailed estimate with no obligations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Free in-home estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Transparent pricing breakdown</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">No hidden fees or charges</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Get Your Free Quote Today
                </h4>
                <p className="text-gray-600">
                  Quick response within 2 hours
                </p>
              </div>
              
              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                  Request Free Estimate
                </Button>
                <div className="text-center">
                  <p className="text-gray-600 mb-2">Or call us directly</p>
                  <Button 
                    variant="outline" 
                    className="border-orange-500 text-orange-500 hover:bg-orange-50"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    (501) 575-5189
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-gray-900">Storage</div>
              <div className="text-sm text-gray-600">$50/month</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-gray-900">Packing Only</div>
              <div className="text-sm text-gray-600">$25/hour</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-gray-900">Cleaning Only</div>
              <div className="text-sm text-gray-600">$30/hour</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-gray-900">Emergency</div>
              <div className="text-sm text-gray-600">+25% rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};