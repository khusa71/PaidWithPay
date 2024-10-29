import React, { useState, useCallback } from 'react';
import { Mail, PhoneCall, MapPin, Send, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const CONTACT_METHODS = [
  {
    icon: PhoneCall,
    label: 'Phone',
    value: '+91-8764429258',
    href: 'tel:+91-8764429258'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'support@PaidWithPay.com',
    href: 'mailto:support@PaidWithPay.com'
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'A1/291, Sector-56, Gurugram, India',
    href: 'https://maps.google.com/?q=Gurugram,India'
  }
];

const SHIELD_CONFIGURATIONS = [
  // Left side shields
  { size: { h: 16, w: 12 }, position: 'left-[5%]', delay: 0 },
  { size: { h: 20, w: 16 }, position: 'left-[15%]', delay: 2000 },
  { size: { h: 24, w: 18 }, position: 'left-[25%]', delay: 4000 },
  { size: { h: 18, w: 14 }, position: 'left-[35%]', delay: 1000 },
  
  // Center shields
  { size: { h: 22, w: 16 }, position: 'left-[45%]', delay: 3000 },
  { size: { h: 26, w: 20 }, position: 'left-1/2', delay: 500 },
  { size: { h: 20, w: 16 }, position: 'left-[55%]', delay: 2500 },
  
  // Right side shields
  { size: { h: 24, w: 18 }, position: 'left-[65%]', delay: 1500 },
  { size: { h: 18, w: 14 }, position: 'left-[75%]', delay: 3500 },
  { size: { h: 22, w: 16 }, position: 'left-[85%]', delay: 750 },
  { size: { h: 16, w: 12 }, position: 'left-[95%]', delay: 2750 },
  
  // Additional scattered shields
  { size: { h: 14, w: 10 }, position: 'left-[10%]', delay: 1250 },
  { size: { h: 20, w: 16 }, position: 'left-[30%]', delay: 3250 },
  { size: { h: 18, w: 14 }, position: 'left-[60%]', delay: 1750 },
  { size: { h: 16, w: 12 }, position: 'left-[80%]', delay: 2250 }
];

const BackgroundShield = ({ size, position, delay }) => (
  <div 
    className={`absolute h-${size.h} w-${size.w} -top-10 ${position} animate-shield`}
    style={{ 
      animationDelay: `${delay}ms`,
      animationDuration: `${15000 + Math.random() * 10000}ms` // Random duration between 15-25s
    }}
  >
    <Shield className="w-full h-full text-blue-400/20" />
  </div>
);

// Rest of the component code remains the same
const ContactMethodItem = ({ icon: Icon, label, value, href }) => (
  <a 
    href={href}
    className="flex items-center group transition-transform duration-200 hover:translate-x-1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 shadow-sm group-hover:bg-blue-500/30 transition-all duration-200">
      <Icon className="w-4 h-4 text-white" />
    </div>
    <div>
      <div className="text-sm text-blue-100">{label}</div>
      <div className="text-white font-medium">{value}</div>
    </div>
  </a>
);

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to submit form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  return (
    <div className="relative bg-gradient-to-b from-blue-600 to-blue-700 overflow-hidden">
      {/* Background Shields */}
      <div className="absolute inset-0" aria-hidden="true">
        {SHIELD_CONFIGURATIONS.map((config, index) => (
          <BackgroundShield key={index} {...config} />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-blue-100">Have questions? Send us a message.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Section */}
          <div className="col-span-1 lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name" 
                  required
                  className="h-10 bg-white/95 border-0 text-gray-900 placeholder:text-gray-400 rounded-lg shadow-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:scale-[1.01]"
                />
                <Input 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name" 
                  required
                  className="h-10 bg-white/95 border-0 text-gray-900 placeholder:text-gray-400 rounded-lg shadow-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:scale-[1.01]"
                />
              </div>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email" 
                required
                className="h-10 bg-white/95 border-0 text-gray-900 placeholder:text-gray-400 rounded-lg shadow-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:scale-[1.01]"
              />
              <Input 
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone" 
                className="h-10 bg-white/95 border-0 text-gray-900 placeholder:text-gray-400 rounded-lg shadow-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:scale-[1.01]"
              />
              <Textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can we help?" 
                required
                className="min-h-[100px] bg-white/95 border-0 text-gray-900 placeholder:text-gray-400 rounded-lg shadow-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:scale-[1.01] resize-none" 
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-10 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-sm transition-all duration-200 hover:scale-[1.01] hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="col-span-1 lg:col-span-4">
            <h3 className="text-base font-semibold text-white/90 tracking-wide mb-4">
              CONTACT INFORMATION
            </h3>
            <div className="space-y-4">
              {CONTACT_METHODS.map((method, index) => (
                <ContactMethodItem key={index} {...method} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes shield {
          0% {
            transform: translateY(120vh) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
            transform: translateY(40vh) rotate(180deg) scale(1);
          }
          100% {
            transform: translateY(-20vh) rotate(360deg) scale(1.5);
            opacity: 0;
          }
        }
        .animate-shield {
          animation: shield 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Contact;