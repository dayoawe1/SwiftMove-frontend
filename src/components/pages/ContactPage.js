import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contacts/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", details: "(812) 669-4165", subtitle: "24/7 Emergency Service" },
    { icon: Mail, title: "Email Us", details: "info@swiftcleanandmove.com", subtitle: "Response within 2 hours" },
    { icon: MapPin, title: "Service Area", details: "Indiana", subtitle: "Bloomington, Indianapolis & more" },
    { icon: Clock, title: "Business Hours", details: "Mon - Sat: 8AM - 6PM", subtitle: "Emergency calls anytime" }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <MessageSquare className="h-4 w-4" />
              <span className="font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90">
              Have questions or ready to book? We're here to help! 
              Reach out to us and we'll respond within 2 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-sky-100 to-orange-100 p-4 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-sky-blue" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-900 font-medium">{item.details}</p>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(812) 669-4165"
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="How can we help?"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your moving or cleaning needs..."
                    rows={5}
                    required
                    className="mt-2"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-sky-blue hover:bg-blue-600 text-white"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Service</h3>
                <p className="text-gray-600 mb-6">
                  Need immediate assistance? We're available 24/7 for emergency moves.
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'tel:8126694165'}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (812) 669-4165
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Bloomington, IN", "Indianapolis, IN", "Columbus, IN", "Lafayette, IN", "Carmel, IN", "Greenwood, IN", "Avon, IN", "Seymour, IN", "Greensburg, IN", "Fishers, IN", "Zionsville, IN", "Muncie, IN", "Danville, IN"].map((area, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                      <span className="text-sm text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gradient-to-r from-blue-100 to-orange-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Proudly Serving Indiana</h2>
          <p className="text-gray-600 mb-6">Bloomington, Indianapolis, Columbus, Lafayette, Carmel, Greenwood, Avon, Seymour, Greensburg, Fishers, Zionsville, Muncie, Danville, etc.</p>
          <Button 
            size="lg"
            className="bg-bright-orange hover:bg-orange-600 text-white"
            onClick={() => window.location.href = '/#booking'}
          >
            Book Your Service
          </Button>
        </div>
      </div>
    </div>
  );
};
