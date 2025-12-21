// Mock data for the moving and cleaning service website

export const mockData = {
  // Company Information
  company: {
    name: "SwiftMove & Clean",
    phone: "(501) 575-5189",
    email: "info@swiftmoveclean.com",
    address: "123 Service Street, City, State 12345",
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM"
  },

  // Services
  services: [
    {
      id: 1,
      title: "Residential Moving",
      description: "Complete home moving services with professional packing and careful handling.",
      price: "Starting at $299",
      features: ["Packing & Unpacking", "Furniture Assembly", "Fragile Item Protection", "Storage Solutions"]
    },
    {
      id: 2,
      title: "Commercial Moving",
      description: "Office relocations with minimal downtime and professional handling.",
      price: "Custom Quote",
      features: ["Office Equipment", "IT Setup", "Document Handling", "Weekend Service"]
    },
    {
      id: 3,
      title: "House Cleaning",
      description: "Deep cleaning services for your old and new home.",
      price: "Starting at $149",
      features: ["Deep Cleaning", "Carpet Cleaning", "Window Cleaning", "Post-Construction"]
    },
    {
      id: 4,
      title: "Office Cleaning",
      description: "Professional office cleaning services to maintain work environment.",
      price: "Starting at $99",
      features: ["Daily Cleaning", "Sanitization", "Floor Care", "Restroom Maintenance"]
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
      text: "SwiftMove made our family's relocation completely stress-free. The team was professional, careful with our belongings, and the cleaning service left our old home spotless. Highly recommend!",
      location: "Cincinnati, OH"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Business Owner",
      rating: 5,
      text: "Outstanding commercial moving service! They relocated our entire office over the weekend with zero downtime. The cleaning crew also did an amazing job preparing our new space.",
      location: "Louisville, KY"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Property Manager",
      rating: 5,
      text: "We use SwiftMove for all our tenant move-outs. Their cleaning service is thorough and reliable, always leaving units rent-ready. Great communication and fair pricing.",
      location: "Indianapolis, IN"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Homeowner",
      rating: 5,
      text: "The team handled our fragile antiques with exceptional care. The packing service was worth every penny, and the post-move cleaning was impeccable. Professional from start to finish.",
      location: "Columbus, OH"
    }
  ],

  // Pricing Plans
  pricingPlans: [
    {
      id: 1,
      name: "Basic Moving",
      price: "$299",
      description: "Perfect for small apartments and studios",
      features: [
        "Professional movers",
        "Basic packing materials",
        "Loading and unloading",
        "Local transportation",
        "2-3 room coverage"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Full Service",
      price: "$599",
      description: "Complete moving and cleaning package",
      features: [
        "Professional movers",
        "Full packing service",
        "Loading and unloading",
        "Transportation",
        "Post-move cleaning",
        "Furniture assembly"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Premium Package",
      price: "$999",
      description: "Luxury moving experience with white-glove service",
      features: [
        "Premium moving team",
        "Full packing & unpacking",
        "White-glove handling",
        "Storage solutions",
        "Deep cleaning service",
        "Setup assistance",
        "Insurance coverage"
      ],
      popular: false
    }
  ],

  // Service Areas
  serviceAreas: [
    "Ohio", "Kentucky", "Indiana"
  ],

  // FAQ
  faqs: [
    {
      id: 1,
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 weeks in advance, especially during peak moving seasons (summer months). However, we can often accommodate last-minute requests."
    },
    {
      id: 2,
      question: "Do you provide packing materials?",
      answer: "Yes! We provide all necessary packing materials including boxes, tape, bubble wrap, and protective blankets. Materials are included in our full-service packages."
    },
    {
      id: 3,
      question: "Are you insured and licensed?",
      answer: "Absolutely. We are fully licensed and insured. We carry comprehensive liability insurance and offer additional coverage options for valuable items."
    },
    {
      id: 4,
      question: "What's included in the cleaning service?",
      answer: "Our cleaning service includes deep cleaning of all rooms, bathrooms, kitchen, windows, and floors. We can customize the cleaning based on your specific needs."
    }
  ],

  // Stats
  stats: {
    happyClients: "500+",
    averageRating: "5.0",
    yearsExperience: "3+",
    completedMoves: "1000+"
  }
};