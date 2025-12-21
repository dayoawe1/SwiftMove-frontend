import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="h-12 w-12 text-blue-600" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Customer Info */}
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

        {/* Reviews and Rating Section */}
        <div className="mt-12 space-y-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md mb-6">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-blue-600">G</div>
                <div>
                  <div className="font-semibold text-gray-900">SwiftMove & Clean</div>
                  <div className="flex items-center space-x-1">
                    <div className="text-sm text-gray-600">5.0</div>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                    <div className="text-sm text-gray-500">(142 reviews)</div>
                  </div>
                </div>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <div className="text-sm text-gray-600">Rated #1 Moving Service</div>
                <div className="text-xs text-gray-500">In your area</div>
              </div>
            </div>
          </div>

          {/* Write a Review Section */}
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📝 Write a Review & Share Your Experience
              </h3>
              <p className="text-lg text-gray-700 mb-2">
                <strong>We value your feedback!</strong>
              </p>
              <p className="text-gray-600 mb-8">
                Help other customers by sharing your experience with our moving and cleaning services. 
                Your honest review helps us improve and guides others in making their decision.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
                <a 
                  href="https://www.google.com/search?q=SwiftMove+%26+Clean+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform">G</div>
                  <div className="font-semibold text-gray-900 mb-2">Write Google Review</div>
                  <div className="text-sm text-gray-600 text-center">Share your experience on Google Business</div>
                </a>
                
                <a 
                  href="https://www.yelp.com/writeareview/biz/swiftmove-clean" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                >
                  <div className="text-3xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform">Y</div>
                  <div className="font-semibold text-gray-900 mb-2">Write Yelp Review</div>
                  <div className="text-sm text-gray-600 text-center">Leave detailed feedback on Yelp</div>
                </a>
                
                <a 
                  href="https://www.facebook.com/SwiftMoveClean/reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                >
                  <div className="text-3xl font-bold text-blue-700 mb-3 group-hover:scale-110 transition-transform">f</div>
                  <div className="font-semibold text-gray-900 mb-2">Write Facebook Review</div>
                  <div className="text-sm text-gray-600 text-center">Rate us on our Facebook page</div>
                </a>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm max-w-xl mx-auto">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  ⭐ How to Leave a Review:
                </p>
                <p className="text-sm text-gray-600">
                  1. Click on any platform above<br/>
                  2. Sign in to your account (Google/Yelp/Facebook)<br/>
                  3. Rate us 1-5 stars and write your honest experience<br/>
                  4. Submit your review to help other customers
                </p>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                <strong>Thank you for taking the time to review our services!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};