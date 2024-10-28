import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield,
  Smartphone,
  Lock,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Shield,
    title: 'Secure Protection',
    description: 'Your money is held safely until you confirm delivery'
  },
  {
    icon: Smartphone,
    title: 'UPI Integration',
    description: 'Use your favorite UPI apps for payments'
  },
  {
    icon: Clock,
    title: 'Quick Resolution',
    description: '24-hour dispute resolution guarantee'
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Enterprise-level encryption for all transactions'
  }
];

const stats = [
  { value: '₹10Cr+', label: 'Transaction Volume' },
  { value: '50k+', label: 'Happy Users' },
  { value: '99.9%', label: 'Success Rate' }
];

const steps = [
  {
    number: '01',
    title: 'Create Payment',
    description: 'Set up a secure payment with recipient details'
  },
  {
    number: '02',
    title: 'Money in Escrow',
    description: 'Funds are held safely until delivery'
  },
  {
    number: '03',
    title: 'Delivery',
    description: 'Seller delivers the product or service'
  },
  {
    number: '04',
    title: 'Release Payment',
    description: 'Confirm and release payment to seller'
  }
];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">SecureEscrow</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/app/dashboard')}>
              Dashboard
            </Button>
            <Button onClick={() => navigate('/app/new-payment')}>
              Start Payment
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Secure Your Online Transactions with 
                <span className="text-blue-600"> Escrow Protection</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                India's first UPI-based escrow system. Your money stays protected until you're satisfied with the delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate('/app/new-payment')}>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative lg:h-[500px] flex items-center justify-center">
              <div className="w-full max-w-lg aspect-square bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-32 h-32 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose SecureEscrow?</h2>
            <p className="text-lg text-gray-600">
              We combine UPI convenience with escrow security
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg border"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Simple and secure payment process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg border">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold">SecureEscrow</span>
              </div>
              <p className="text-gray-400">
                Secure payments made simple with UPI and escrow protection.
              </p>
            </div>
            {['Product', 'Company', 'Legal'].map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section}</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 SecureEscrow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}