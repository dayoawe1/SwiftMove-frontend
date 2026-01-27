import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Users, 
  Award, 
  CheckCircle,
  Heart,
  Truck,
  Target,
  Eye,
  Zap,
  MapPin,
  Star,
  Phone
} from 'lucide-react';

export const AboutPage = () => {
  const missionValues = [
    {
      icon: Zap,
      title: "Swiftness & Efficiency",
      description: "Respecting your time with precise scheduling and execution."
    },
    {
      icon: Heart,
      title: "Care & Integrity",
      description: "Handling your belongings and spaces as if they were our own."
    },
    {
      icon: Award,
      title: "Thoroughness & Quality",
      description: "Using proven techniques and attention to detail in every task."
    },
    {
      icon: MapPin,
      title: "Local Commitment",
      description: "Strengthening Indiana by serving our neighbors with reliability and pride."
    }
  ];

  const teamStats = [
    { number: "500+", label: "Happy Clients" },
    { number: "5.0", label: "Star Rating" },
    { number: "3+", label: "Years Experience" },
    { number: "1000+", label: "Completed Moves" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4" />
              <span className="font-medium">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Trusted Moving & Cleaning Partner in Indiana
            </h1>
            <p className="text-xl text-white/90">
              Swift Move and Clean delivers exceptional residential and commercial moving and cleaning services 
              with a commitment to quality, care, and community.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-50 to-blue-100">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-sky-blue p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision for Indiana</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We envision communities where every move is a smooth journey and every home or office is a clean, 
                vibrant space for growth and well-being. We strive to be the catalyst for seamless transitions 
                and pristine environments.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-100">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-bright-orange p-3 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission in Action</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide swift, thorough, and stress-free moving and cleaning services that empower our 
                residential and commercial clients to enjoy a fresh start and a healthier environment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">How We Deliver Excellence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-sky-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose SwiftMove & Clean?</h2>
            <p className="text-gray-600 leading-relaxed">
              We understand that moving can be stressful, which is why we've designed our services 
              to take the burden off your shoulders. From careful packing to thorough cleaning, 
              we handle every detail so you can focus on settling into your new space.
            </p>
            <div className="space-y-4">
              {[
                { title: "Licensed & Insured", desc: "Full protection for your belongings and peace of mind" },
                { title: "Experienced Team", desc: "Trained professionals with years of moving and cleaning expertise" },
                { title: "Transparent Pricing", desc: "No hidden fees, upfront quotes, and competitive rates" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-sky-50 to-orange-50 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="bg-navy-blue p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proudly Serving Indiana</h3>
              <p className="text-gray-600 mb-6">
                We're committed to strengthening our Indiana communities by providing reliable, 
                professional moving and cleaning services to our neighbors.
              </p>
              <div className="bg-white rounded-xl p-6">
                <p className="text-gray-700 italic">
                  "To be Indiana's most trusted partner for making spaces new, whether you're settling 
                  into one or refreshing the one you're in."
                </p>
                <p className="text-sky-blue font-semibold mt-2">— Our Vision</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Success in Numbers</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
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
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Experience the SwiftMove & Clean difference. Contact us today for your moving and cleaning needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-bright-orange hover:bg-orange-600"
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
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
