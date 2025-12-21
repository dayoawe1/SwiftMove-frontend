import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Users, 
  Award, 
  Shield, 
  Clock, 
  Star,
  CheckCircle,
  Heart,
  Truck
} from 'lucide-react';

export const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Fully licensed, insured, and background-checked team members for your peace of mind."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "We treat your belongings as our own and provide personalized service for every client."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all our moving and cleaning services."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time service with transparent pricing and no hidden fees."
    }
  ];

  const teamStats = [
    { number: "500+", label: "Happy Clients" },
    { number: "5.0", label: "Star Rating" },
    { number: "3+", label: "Years Experience" },
    { number: "1000+", label: "Completed Moves" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium">About Us</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Trusted Moving & Cleaning Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of experience in both residential and commercial services, 
            we've built our reputation on reliability, professionalism, and exceptional customer care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Why Choose SwiftMove & Clean?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We understand that moving can be stressful, which is why we've designed our services 
                to take the burden off your shoulders. From careful packing to thorough cleaning, 
                we handle every detail so you can focus on settling into your new space.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                    <p className="text-gray-600 text-sm">Full protection for your belongings and peace of mind</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Experienced Team</h4>
                    <p className="text-gray-600 text-sm">Trained professionals with years of moving and cleaning expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">No hidden fees, upfront quotes, and competitive rates</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Truck className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Same-Day Service Available</h4>
                  <p className="text-gray-600 text-sm">Emergency moves and cleaning when you need it most</p>
                </div>
              </div>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Call for Emergency Service
              </Button>
            </div>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Success in Numbers</h3>
            <p className="text-gray-600">Trusted by hundreds of families and businesses across the city</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
                {stat.label === "Star Rating" && (
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};