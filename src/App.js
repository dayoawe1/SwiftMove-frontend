import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BookingSection } from "./components/BookingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { FAQSection } from "./components/FAQSection";
import { Toaster } from "./components/ui/sonner";
import { AdminLogin } from "./components/admin/AdminLogin";
import { AdminDashboard } from "./components/admin/AdminDashboard";
import { 
  ResidentialMovingPage, 
  CommercialMovingPage, 
  MovingSupportPage,
  ResidentialCleaningPage,
  CommercialCleaningPage 
} from "./components/services";
import {
  ServicesPage,
  FAQPage,
  ReviewsPage,
  AboutPage,
  ContactPage,
  PricingPage
} from "./components/pages";

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
};

const Home = () => {
  useEffect(() => {
    // Handle hash scroll on page load
    if (window.location.hash === '#booking') {
      setTimeout(() => {
        const bookingSection = document.getElementById('booking');
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <BookingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
      <Toaster />
    </div>
  );
};

// Admin Page Component with Auth State Management
const AdminPage = () => {
  const [token, setToken] = useState(localStorage.getItem('admin_token'));
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    // Validate token on mount
    const validateToken = async () => {
      const storedToken = localStorage.getItem('admin_token');
      if (storedToken) {
        try {
          // Test if token is valid by making a request to the stats endpoint
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/admin/dashboard/stats`, {
            headers: {
              'Authorization': `Bearer ${storedToken}`,
              'Content-Type': 'application/json'
            }
          });
          if (response.ok) {
            setToken(storedToken);
          } else {
            // Token is invalid, clear it
            localStorage.removeItem('admin_token');
            setToken(null);
          }
        } catch (error) {
          console.error('Token validation error:', error);
          localStorage.removeItem('admin_token');
          setToken(null);
        }
      }
      setIsValidating(false);
    };

    validateToken();
  }, []);

  const handleLoginSuccess = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setToken(null);
  };

  if (isValidating) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Validating session...</p>
        </div>
      </div>
    );
  }

  if (!token) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return <AdminDashboard token={token} onLogout={handleLogout} />;
};

// Page Wrapper with Header and Footer
const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <Chatbot />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Main Navigation Pages */}
          <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
          <Route path="/pricing" element={<PageWrapper><PricingPage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><FAQPage /></PageWrapper>} />
          <Route path="/reviews" element={<PageWrapper><ReviewsPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          {/* Service Detail Pages */}
          <Route path="/services/residential-moving" element={<PageWrapper><ResidentialMovingPage /></PageWrapper>} />
          <Route path="/services/commercial-moving" element={<PageWrapper><CommercialMovingPage /></PageWrapper>} />
          <Route path="/services/moving-support" element={<PageWrapper><MovingSupportPage /></PageWrapper>} />
          <Route path="/services/residential-cleaning" element={<PageWrapper><ResidentialCleaningPage /></PageWrapper>} />
          <Route path="/services/commercial-cleaning" element={<PageWrapper><CommercialCleaningPage /></PageWrapper>} />
          {/* Admin Routes */}
          <Route path="/smc-admin6889" element={<AdminPage />} />
          <Route path="/smc-admin6889/login" element={<Navigate to="/smc-admin6889" replace />} />
          <Route path="/smc-admin6889/dashboard" element={<Navigate to="/smc-admin6889" replace />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
