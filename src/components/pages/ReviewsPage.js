import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { Star, Quote, ChevronLeft, ChevronRight, Phone } from 'lucide-react';

export const ReviewsPage = () => {
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
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto-advance carousel
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

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-orange-500 to-navy-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-medium">Customer Reviews</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">What Our Clients Say</h1>
            <p className="text-xl text-white/90">
              Don't just take our word for it. See what our satisfied customers have to say about our services.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Carousel */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Featured Reviews</h2>
            
            {loading ? (
              <div className="text-center py-12">Loading reviews...</div>
            ) : testimonials.length > 0 ? (
              <div className="relative">
                {/* Carousel */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <Card className="border-0 shadow-xl bg-white">
                          <CardContent className="p-8 text-center">
                            <Quote className="h-12 w-12 text-sky-blue/20 mx-auto mb-4" />
                            <div className="flex justify-center mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                              "{testimonial.text}"
                            </blockquote>
                            <div className="flex items-center justify-center space-x-4">
                              <Avatar className="h-14 w-14">
                                <AvatarFallback className="bg-gradient-to-br from-blue-100 to-orange-100 text-blue-600 font-semibold text-lg">
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

                {/* Navigation Buttons */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-sky-blue' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-600">No reviews available</div>
            )}
          </div>
        </div>
      </div>

      {/* All Reviews Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">All Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-12 w-12 text-blue-600" />
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-to-br from-blue-100 to-orange-100 text-blue-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Write Review Section */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Write a Review</h2>
            <p className="text-gray-600 mb-8">
              Help other customers by sharing your experience with our moving and cleaning services.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a 
                href="https://www.google.com/search?q=SwiftMove+%26+Clean+reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">G</div>
                <div className="font-semibold text-gray-900">Google Review</div>
              </a>
              <a 
                href="https://www.yelp.com/biz/swift-move-and-clean-columbus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-red-600 mb-3">Y</div>
                <div className="font-semibold text-gray-900">Yelp Review</div>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61586681157139&sk=reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-700 mb-3">f</div>
                <div className="font-semibold text-gray-900">Facebook Review</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join our happy customers and experience the SwiftMove & Clean difference.
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
