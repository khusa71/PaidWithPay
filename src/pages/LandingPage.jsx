import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Shield, 
    ChevronLeft, 
    ArrowRight,
    Smartphone,
    Clock,
    Lock,
    CheckCircle,
    AlertTriangle,
    User,
    Info,
    Mail,
    Phone,
    Download,
    Twitter,
    Facebook,
    Linkedin,
    Instagram,
    ArrowUp
  
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Hero image as base64 encoded SVG
const heroImageSvg = `
<svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="400" fill="#F8FAFC"/>
  
  <!-- Background Patterns -->
  <circle cx="300" cy="200" r="180" fill="#E2E8F0" opacity="0.5"/>
  <circle cx="300" cy="200" r="140" fill="#CBD5E1" opacity="0.5"/>
  
  <!-- Mobile Phone -->
  <rect x="220" y="100" width="160" height="280" rx="20" fill="#1E40AF"/>
  <rect x="230" y="110" width="140" height="260" rx="15" fill="white"/>
  
  <!-- UPI Payment Interface -->
  <rect x="245" y="130" width="110" height="20" rx="5" fill="#3B82F6"/>
  <rect x="245" y="160" width="110" height="40" rx="5" fill="#F1F5F9"/>
  <rect x="245" y="210" width="50" height="10" rx="2" fill="#94A3B8"/>
  <rect x="245" y="230" width="110" height="40" rx="5" fill="#F1F5F9"/>
  
  <!-- Shield Icon -->
  <path d="M300 260 L340 280 L300 340 L260 280 Z" fill="#2563EB"/>
  <circle cx="300" cy="290" r="20" fill="#1D4ED8"/>
  
  <!-- Secure Transaction Indicators -->
  <circle cx="270" y="180" r="5" fill="#22C55E"/>
  <circle cx="330" y="180" r="5" fill="#22C55E"/>
  
  <!-- Decorative Elements -->
  <circle cx="200" cy="150" r="10" fill="#3B82F6" opacity="0.3"/>
  <circle cx="400" cy="250" r="15" fill="#3B82F6" opacity="0.3"/>
  <circle cx="180" cy="300" r="8" fill="#3B82F6" opacity="0.3"/>
  <circle cx="420" cy="120" r="12" fill="#3B82F6" opacity="0.3"/>
</svg>
`;

const heroImageUrl = `data:image/svg+xml,${encodeURIComponent(heroImageSvg)}`;

const features = [
  {
    icon: Shield,
    title: 'Secure Escrow Protection',
    description: 'Your money is held safely until you confirm delivery of goods or services'
  },
  {
    icon: Smartphone,
    title: 'UPI Integration',
    description: 'Seamless payments using your favorite UPI apps including GPay, PhonePe, and more'
  },
  {
    icon: Clock,
    title: 'Quick Resolution',
    description: '24-hour dispute resolution guarantee with dedicated support'
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Enterprise-level encryption and security measures to protect your transactions'
  }
];

const howItWorks = [
  {
    step: 1,
    title: 'Create Payment',
    description: 'Set up a secure payment with recipient details and protection terms'
  },
  {
    step: 2,
    title: 'Money in Escrow',
    description: 'Funds are held safely in escrow until delivery is confirmed'
  },
  {
    step: 3,
    title: 'Delivery Confirmation',
    description: 'Confirm receipt of goods or services when satisfied'
  },
  {
    step: 4,
    title: 'Payment Release',
    description: 'Funds are automatically released to the seller upon confirmation'
  }
];

const LandingPage = () => {
  const navigate = useNavigate();


const handleGetStarted = () => {
navigate('/app/new-payment');
};

const handleDashboard = () => {
navigate('/app/dashboard');
};

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold">SecureEscrow</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={handleDashboard}
              >
                Dashboard
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleGetStarted}
              >
                Start Secure Payment
              </Button>
            </div>
          </div>
        </div>
      </nav>

       {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Secure Your Online Transactions with 
                <span className="text-blue-600"> Escrow Protection</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Make secure payments for goods and services using India's first UPI-based escrow system. Your money stays protected until you're satisfied.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => navigate('/app/new-payment')}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative lg:h-[500px] flex items-center justify-center"
            >
              <div className="relative w-full h-full max-w-[600px] mx-auto">
                <img 
                  src={heroImageUrl}
                  alt="Secure UPI Payment Illustration"
                  className="rounded-lg shadow-xl w-full h-full object-contain"
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-100 rounded-lg"></div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-200 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose SecureEscrow?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine the convenience of UPI with the security of escrow services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, secure, and straightforward process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative h-full"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 flex-grow">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-gray-400 w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">₹10Cr+</div>
              <div className="text-gray-600">Transaction Volume</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">50k+</div>
              <div className="text-gray-600">Happy Users</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Make Secure Payments?
            </h2>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/app/new-payment')}
            >
              Start Your First Transaction
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">SecureEscrow</span>
              </div>
              <p className="text-gray-400">
                Secure payments made simple with UPI and escrow protection.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Security</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>

          {/* Additional Footer Sections */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Contact Us</h4>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>support@secureescrow.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <span>+91 1800-123-4567</span>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Download Our App</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" className="text-white border-gray-700">
                    <Download className="h-5 w-5 mr-2" />
                    App Store
                  </Button>
                  <Button variant="outline" className="text-white border-gray-700">
                    <Download className="h-5 w-5 mr-2" />
                    Play Store
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Connect With Us</h4>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 SecureEscrow. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4 text-sm">
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                Privacy Policy
              </Button>
              <span className="text-gray-600">•</span>
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                Terms of Service
              </Button>
              <span className="text-gray-600">•</span>
              <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto">
                Cookie Policy
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>
    </div>
  );
};

export default LandingPage;