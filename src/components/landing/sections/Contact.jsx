import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Mail, 
  PhoneCall, 
  MapPin,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: PhoneCall,
    title: 'Phone',
    value: '+91 1800-123-4567',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'support@secureescrow.com',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Mumbai, Maharashtra, India',
    color: 'bg-purple-100 text-purple-600'
  }
];

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input placeholder="+91 98765 43210" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div className={`w-10 h-10 ${method.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{method.title}</div>
                        <div className="font-medium">{method.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Support Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Monday to Friday</div>
                  <div className="text-gray-500">9:00 AM to 6:00 PM (IST)</div>
                </div>
                <div>
                  <div className="font-medium">Saturday</div>
                  <div className="text-gray-500">10:00 AM to 4:00 PM (IST)</div>
                </div>
                <div>
                  <div className="font-medium">Sunday</div>
                  <div className="text-gray-500">Closed</div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Looking for quick answers?</h3>
              <p className="text-gray-600 mb-4">
                Check out our frequently asked questions section for immediate assistance.
              </p>
              <Button variant="outline">
                Visit FAQ
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}