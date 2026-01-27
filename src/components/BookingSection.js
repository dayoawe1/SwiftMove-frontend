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
    movingSupport: '',
    // Moving From Address fields
    fromAddress: '',
    fromMoveSize: '',
    fromFloor: '',
    fromElevator: '',
    // Moving To Address fields
    toAddress: '',
    toMoveSize: '',
    toFloor: '',
    toElevator: '',
    preferredTime: '',
    hoursNeeded: '',
    specialRequests: ''
  });

  const moveSizeOptions = [
    { value: "small-office", label: "Small Office" },
    { value: "large-office", label: "Large Office" },
    { value: "1-bedroom-house", label: "1 Bedroom House" },
    { value: "2-bedroom-house", label: "2 Bedroom House" },
    { value: "3-bedroom-house", label: "3 Bedroom House" },
    { value: "4-bedroom-house", label: "4 Bedroom House" },
    { value: "5-plus-bedroom-house", label: "5+ Bedroom House" },
    { value: "1-bedroom-apt", label: "1 Bedroom Apt/Condo" },
    { value: "2-bedroom-apt", label: "2 Bedroom Apt/Condo" },
    { value: "3-bedroom-apt", label: "3 Bedroom Apt/Condo" },
    { value: "4-bedroom-apt", label: "4 Bedroom Apt/Condo" },
    { value: "5-plus-bedroom-apt", label: "5+ Bedroom Apt/Condo" },
    { value: "storage", label: "Storage" },
    { value: "other", label: "Other" }
  ];

  const floorOptions = [
    { value: "ground", label: "Ground floor / Flat" },
    { value: "2nd", label: "2nd floor / 2 Storey" },
    { value: "3rd", label: "3rd floor / 3 Storey" },
    { value: "4th", label: "4th floor" },
    { value: "5th-plus", label: "5th+ Floor" }
  ];

  const movingSupportOptions = [
    { value: "full-packing", label: "Full Packing Service" },
    { value: "partial-packing", label: "Partial Packing Service" },
    { value: "packing-supplies", label: "Packing Supplies Sale" },
    { value: "loading-unloading", label: "Loading & Unloading Assistance" },
    { value: "furniture-protection", label: "Furniture Protection" },
    { value: "transportation", label: "Transportation Only" },
    { value: "none", label: "No Support Needed" }
  ];

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
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        moveSize: formData.fromMoveSize,
        currentAddress: `${formData.fromAddress} | Size: ${formData.fromMoveSize} | Floor: ${formData.fromFloor} | Elevator: ${formData.fromElevator}`,
        newAddress: `${formData.toAddress} | Size: ${formData.toMoveSize} | Floor: ${formData.toFloor} | Elevator: ${formData.toElevator}`,
        preferredDate: selectedDate.toISOString(),
        preferredTime: formData.preferredTime,
        hoursNeeded: formData.hoursNeeded,
        specialRequests: `Moving Support: ${formData.movingSupport || 'None'} | ${formData.specialRequests}`
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
          movingSupport: '',
          fromAddress: '',
          fromMoveSize: '',
          fromFloor: '',
          fromElevator: '',
          toAddress: '',
          toMoveSize: '',
          toFloor: '',
          toElevator: '',
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
                      placeholder="(812) 669-4165"
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

                {/* Service Type */}
                <div>
                  <Label>Service Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local-moving">Local Moving</SelectItem>
                      <SelectItem value="long-distance-moving">Long Distance Moving</SelectItem>
                      <SelectItem value="last-minute-moving">Last Minute Moving</SelectItem>
                      <SelectItem value="residential-moving">Residential Moving</SelectItem>
                      <SelectItem value="commercial-moving">Commercial Moving</SelectItem>
                      <SelectItem value="house-cleaning">House Cleaning</SelectItem>
                      <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                      <SelectItem value="full-service">Moving + Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Moving Support */}
                <div>
                  <Label>Moving Support</Label>
                  <Select onValueChange={(value) => handleInputChange('movingSupport', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select moving support (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {movingSupportOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Moving From Address Section */}
                <div className="bg-blue-50 p-4 rounded-lg space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    Moving From Address
                  </h4>
                  <div>
                    <Label htmlFor="fromAddress">Address *</Label>
                    <Input
                      id="fromAddress"
                      value={formData.fromAddress}
                      onChange={(e) => handleInputChange('fromAddress', e.target.value)}
                      placeholder="123 Current St, City, State 12345"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Move Size</Label>
                      <Select onValueChange={(value) => handleInputChange('fromMoveSize', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {moveSizeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Floor</Label>
                      <Select onValueChange={(value) => handleInputChange('fromFloor', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select floor" />
                        </SelectTrigger>
                        <SelectContent>
                          {floorOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Elevator?</Label>
                      <Select onValueChange={(value) => handleInputChange('fromElevator', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Moving To Address Section */}
                <div className="bg-green-50 p-4 rounded-lg space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    Moving To Address
                  </h4>
                  <div>
                    <Label htmlFor="toAddress">Address</Label>
                    <Input
                      id="toAddress"
                      value={formData.toAddress}
                      onChange={(e) => handleInputChange('toAddress', e.target.value)}
                      placeholder="456 New St, City, State 12345"
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Move Size</Label>
                      <Select onValueChange={(value) => handleInputChange('toMoveSize', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {moveSizeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Floor</Label>
                      <Select onValueChange={(value) => handleInputChange('toFloor', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select floor" />
                        </SelectTrigger>
                        <SelectContent>
                          {floorOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Elevator?</Label>
                      <Select onValueChange={(value) => handleInputChange('toElevator', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
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
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href = 'tel:8126694165'}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Call (812) 669-4165
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
                <div className="text-gray-600">
                  <p className="font-semibold text-navy-blue mb-2">Indiana</p>
                  <p className="text-sm">Bloomington, Indianapolis, Columbus, Lafayette, Carmel, Greenwood, Avon, Seymour, Greensburg, Fishers, Zionsville, Muncie, Danville, etc.</p>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Proudly serving Indiana with professional moving and cleaning services!
                </p>
              </CardContent>
            </Card>

            {/* Moving Services Highlight */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-sky-50 to-green-50">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Truck className="h-5 w-5 text-sky-blue" />
                  <h3 className="text-xl font-semibold text-gray-900">Our Moving Services</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-sky-blue rounded-full"></div>
                    <span className="text-gray-700 font-medium">Local Moving</span>
                    <span className="text-gray-500 text-sm">- Within Indiana</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Long Distance Moving</span>
                    <span className="text-gray-500 text-sm">- Across states</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">Last Minute Moving</span>
                    <span className="text-gray-500 text-sm">- Same day service</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
