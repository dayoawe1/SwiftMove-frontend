import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Star,
  CheckCircle
} from 'lucide-react';

export const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contacts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });
      
      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you within 24 hours.");
        
        // Reset form
        setContactForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.detail || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(812) 669-4165",
      subtitle: "24/7 Emergency Service",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@swiftcleanandmove.com",
      subtitle: "Response within 2 hours",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Indiana",
      subtitle: "Bloomington, Indianapolis, Columbus & more",
      color: "green"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 8AM - 6PM",
      subtitle: "Emergency calls anytime",
      color: "purple"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make your move stress-free? Contact us for a free quote or 
            to schedule your moving and cleaning services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(812) 669-4165"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-email">Email Address *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Subject *</Label>
                  <Select onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="What can we help you with?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="booking">Schedule Service</SelectItem>
                      <SelectItem value="question">General Question</SelectItem>
                      <SelectItem value="complaint">File a Complaint</SelectItem>
                      <SelectItem value="compliment">Leave a Compliment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your moving and cleaning needs..."
                    required
                    className="mt-2"
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 2 hours during business hours.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                orange: 'bg-orange-100 text-orange-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600'
              };
              
              return (
                <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${colorClasses[info.color]}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 font-medium">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Emergency Contact */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Emergency Moving Service
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Need immediate assistance? We're available 24/7 for emergency moves.
                  </p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8126694165'}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call (812) 669-4165
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="shadow-lg border-0 bg-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Why Choose Us?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">5-Star Customer Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Same-Day Service Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">100% Satisfaction Guarantee</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 mt-6 pt-4 border-t">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5.0 (500+ reviews)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="shadow-xl border-0">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-blue-100 to-orange-100 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proudly Serving Indiana</h3>
                <p className="text-gray-600">Bloomington, Indianapolis, Columbus, Lafayette, Carmel, Greenwood, Avon, Seymour, Greensburg, Fishers, Zionsville, Muncie, Danville, etc.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => window.location.href = 'tel:8126694165'}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (812) 669-4165
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
