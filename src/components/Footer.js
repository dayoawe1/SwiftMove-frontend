import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Truck,
  Sparkles
} from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <button onClick={scrollToTop} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img 
                src="https://customer-assets.emergentagent.com/job_swift-movers-1/artifacts/3vyram8e_Gemini_Generated_Image_tphblstphblstphb.png" 
                alt="SwiftMove & Clean Logo" 
                className="rounded shadow-sm"
                style={{height: '12px', width: '40px', objectFit: 'cover'}}
              />
              <div className="text-lg font-black cursor-pointer tracking-wide">SwiftMove & Clean</div>
            </button>
            <p className="text-gray-300 leading-relaxed">
              Professional moving and cleaning services for residential and commercial clients. 
              Your trusted partner for stress-free relocations.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-300">5.0 (500+ reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <Truck className="h-4 w-4" />
                  <span>Residential Moving</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <Truck className="h-4 w-4" />
                  <span>Commercial Moving</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <Sparkles className="h-4 w-4" />
                  <span>House Cleaning</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Office Cleaning</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-blue-400" />
                <div>
                  <div className="font-medium">(501) 575-5189</div>
                  <div className="text-sm">24/7 Emergency Service</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-orange-400" />
                <div>
                  <div className="font-medium">info@swiftmoveclean.com</div>
                  <div className="text-sm">Response within 2 hours</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-green-400" />
                <div>
                  <div className="font-medium">123 Service Street</div>
                  <div className="text-sm">City, State 12345</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-0.5 text-purple-400" />
                <div>
                  <div className="font-medium">Mon - Sat: 8AM - 6PM</div>
                  <div className="text-sm">Emergency calls anytime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas & CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Areas</h3>
            <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
              <div>Ohio (Cincinnati, Columbus, Cleveland)</div>
              <div>Kentucky (Louisville, Lexington, Covington)</div>
              <div>Indiana (Indianapolis, Fort Wayne)</div>
            </div>
            <div className="pt-4">
              <Button className="w-full bg-bright-orange text-white hover:opacity-90 mb-3">
                Get Free Quote
              </Button>
              <Button variant="outline" className="w-full border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2024 SwiftMove & Clean. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              License Info
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-end space-x-4 md:justify-end justify-center">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Background Checked</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};