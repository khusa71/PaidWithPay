import React from 'react';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: PhoneCall,
    label: 'Phone',
    value: '+91 1800-123-4567',
    bgColor: 'bg-white',
    textColor: 'text-blue-600'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'support@PaidWithPay.com',
    bgColor: 'bg-white',
    textColor: 'text-green-600'
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Mumbai, India',
    bgColor: 'bg-white',
    textColor: 'text-purple-600'
  }
];

const workingHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM (IST)' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM (IST)' },
  { day: 'Sunday', hours: 'Closed' }
];

export function Contact() {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">Have questions? Send us a message.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="First Name" className="bg-white" />
              <Input placeholder="Last Name" className="bg-white" />
            </div>
            <Input type="email" placeholder="Email" className="bg-white" />
            <Input placeholder="Phone" className="bg-white" />
            <Textarea 
              placeholder="How can we help?" 
              className="min-h-[100px] resize-none bg-white" 
            />
            <Button type="submit" className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-50">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              {contactMethods.map(({ icon: Icon, label, value, bgColor, textColor }, index) => (
                <div key={index} className="flex items-center mb-4 last:mb-0">
                  <div className={`w-8 h-8 ${bgColor} ${textColor} rounded border border-gray-100 flex items-center justify-center mr-3`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="text-gray-900">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded border border-gray-100">
              <h3 className="text-lg font-semibold mb-2">Support Hours</h3>
              {workingHours.map(({ day, hours }, index) => (
                <div key={index} className="text-sm mb-1 last:mb-0">
                  <span className="font-medium text-gray-900">{day}:</span>{' '}
                  <span className="text-gray-600">{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}