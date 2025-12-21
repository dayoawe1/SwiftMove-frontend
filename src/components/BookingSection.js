import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { toast } from 'sonner';
import { CalendarIcon, Clock, MapPin, Truck } from 'lucide-react';
import { format } from 'date-fns';

export const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    moveSize: '',
    currentAddress: '',
    newAddress: '',
    preferredTime: '',
    hoursNeeded: '',
    specialRequests: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedDate) {
      toast.error("Please select a preferred date");
      return;
    }
    
    try {
      const bookingData = {
        ...formData,
        preferredDate: selectedDate.toISOString()
      };
      
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      
      if (response.ok) {
        toast.success("Booking request submitted! We'll contact you within 2 hours to confirm your appointment.");
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          moveSize: '',
          currentAddress: '',
          newAddress: '',
          preferredTime: '',
          hoursNeeded: '',
          specialRequests: ''
        });
        setSelectedDate(undefined);
      } else {
        const errorData = await response.json();
        toast.error(errorData.detail || "Failed to submit booking. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <CalendarIcon className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium">Book Service</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule Your Move & Cleaning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Fill out the form below and we'll get back to you 
            within 2 hours with a detailed quote and confirmation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Book Your Service</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(501) 575-5189"
                      required
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

                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Service Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential-moving">Residential Moving</SelectItem>
                        <SelectItem value="commercial-moving">Commercial Moving</SelectItem>
                        <SelectItem value="house-cleaning">House Cleaning</SelectItem>
                        <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                        <SelectItem value="full-service">Moving + Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Move Size</Label>
                    <Select onValueChange={(value) => handleInputChange('moveSize', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="studio">Studio/1BR</SelectItem>
                        <SelectItem value="2br">2-3 Bedrooms</SelectItem>
                        <SelectItem value="4br">4+ Bedrooms</SelectItem>
                        <SelectItem value="office-small">Small Office</SelectItem>
                        <SelectItem value="office-large">Large Office</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Addresses */}
                <div>
                  <Label htmlFor="currentAddress">Current Address *</Label>
                  <Input
                    id="currentAddress"
                    value={formData.currentAddress}
                    onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                    placeholder="123 Current St, City, State 12345"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="newAddress">New Address</Label>
                  <Input
                    id="newAddress"
                    value={formData.newAddress}
                    onChange={(e) => handleInputChange('newAddress', e.target.value)}
                    placeholder="456 New St, City, State 12345"
                    className="mt-2"
                  />
                </div>

                {/* Hours Needed */}
                <div>
                  <Label htmlFor="hoursNeeded">Number of Hours Needed</Label>
                  <Select onValueChange={(value) => handleInputChange('hoursNeeded', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Estimated hours" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2-4">2-4 hours</SelectItem>
                      <SelectItem value="4-6">4-6 hours</SelectItem>
                      <SelectItem value="6-8">6-8 hours (Full day)</SelectItem>
                      <SelectItem value="8+">8+ hours (Multiple days)</SelectItem>
                      <SelectItem value="not-sure">Not sure / Need estimate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left mt-2"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>Preferred Time</Label>
                    <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 6PM)</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="specialRequests">Special Requests or Notes</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any special instructions, fragile items, or specific requirements..."
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                >
                  Submit Booking Request
                </Button>
                
                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll contact you within 2 hours to confirm your booking.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Right Side - Quick Info */}
          <div className="space-y-8">
            {/* Process Steps */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Submit Request</h4>
                      <p className="text-gray-600 text-sm">Fill out the booking form with your details</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <span className="text-orange-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Get Quote</h4>
                      <p className="text-gray-600 text-sm">Receive detailed quote within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Confirm & Move</h4>
                      <p className="text-gray-600 text-sm">Confirm booking and we handle the rest</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-6">
                  Have questions or need immediate assistance? Our team is here to help.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Clock className="h-4 w-4 mr-2" />
                    Call (501) 575-5189
                  </Button>
                  <div className="text-sm text-gray-600">
                    Available: Monday - Saturday, 8AM - 6PM
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Service Areas</h3>
                </div>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                  <div>• Ohio (Cincinnati, Columbus, Cleveland, Dayton)</div>
                  <div>• Kentucky (Louisville, Lexington, Covington)</div>
                  <div>• Indiana (Indianapolis, Fort Wayne, Evansville)</div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Serving the entire tri-state region with professional service!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};