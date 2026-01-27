import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services/testimonials`);
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        } else {
          console.error('Failed to fetch testimonials');
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-orange-500" />
            <span className="text-orange-500 font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our moving and cleaning services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        {testimonials.length > 0 && (
          <div className="relative max-w-4xl mx-auto mb-16">
            {/* Main Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-orange-50 mx-2">
                      <CardContent className="p-8 md:p-12 text-center">
                        {/* Quote Icon */}
                        <Quote className="h-12 w-12 text-sky-blue/30 mx-auto mb-6" />
                        
                        {/* Rating */}
                        <div className="flex justify-center space-x-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        
                        {/* Testimonial Text */}
                        <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                          "{testimonial.text}"
                        </blockquote>
                        
                        {/* Customer Info */}
                        <div className="flex items-center justify-center space-x-4">
                          <Avatar className="h-14 w-14">
                            <AvatarFallback className="bg-gradient-to-br from-sky-blue to-bright-orange text-white font-semibold text-lg">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="text-left">
                            <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role} • {testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-sky-blue w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Happy Customers
              </h3>
              <p className="text-gray-600 mb-6">
                Experience the difference that professional service makes. 
                We're committed to exceeding your expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 font-medium">Average Rating</p>
              <p className="text-sm text-gray-500">Based on 500+ reviews</p>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-gray-900">100% Satisfaction Guarantee</div>
                <div className="text-sm text-gray-600">Licensed & Insured</div>
                <div className="text-sm text-gray-600">Background-Checked Team</div>
                <div className="text-sm text-gray-600">Same-Day Service Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Write Review Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Write a Review & Share Your Experience
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Help other customers by sharing your experience with our moving and cleaning services.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <a 
                  href="https://www.google.com/search?q=SwiftMove+%26+Clean+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform">G</div>
                  <div className="font-semibold text-gray-900">Google Review</div>
                </a>
                
                <a 
                  href="https://www.yelp.com/writeareview/biz/swiftmove-clean" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                >
                  <div className="text-3xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform">Y</div>
                  <div className="font-semibold text-gray-900">Yelp Review</div>
                </a>
                
                <a 
                  href="https://www.facebook.com/SwiftMoveClean/reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                >
                  <div className="text-3xl font-bold text-blue-700 mb-3 group-hover:scale-110 transition-transform">f</div>
                  <div className="font-semibold text-gray-900">Facebook Review</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
