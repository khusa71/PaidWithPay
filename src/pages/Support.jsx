import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  FileText,
  ChevronDown,
  ChevronRight,
  Search,
  ExternalLink,
  Globe,
  Clock,
  MessageSquare,
  PhoneCall
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

// FAQ data
const faqs = [
  {
    question: 'How does escrow protection work?',
    answer:
      'Our escrow service acts as a secure intermediary between buyers and sellers. When you make a payment, the funds are held safely in escrow until you confirm the delivery of goods or services. This protects both parties and ensures a secure transaction.'
  },
  {
    question: "What happens if I don't receive my order?",
    answer:
      "If you don't receive your order, you can raise a dispute through our platform. Your payment remains secure in escrow while our team investigates and resolves the issue. If the seller fails to deliver, you'll receive a full refund."
  },
  {
    question: 'How long does it take to release payments?',
    answer:
      'Once you confirm delivery, payments are typically released to the seller within 24 hours. For first-time users, there might be an additional verification period of up to 48 hours for security purposes.'
  },
  {
    question: 'What are the fees for using PaidWithPay?',
    answer:
      'We charge a small fee based on the protection level you choose: Standard Protection (0.5% of transaction value) or Premium Protection (1% of transaction value). There are no hidden charges or additional fees.'
  }
];

// Contact methods
const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    buttonText: 'Start Chat',
    availability: '24/7 Support',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call our support line',
    buttonText: 'Call Now',
    availability: 'Mon-Fri, 9AM-6PM',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email',
    buttonText: 'Send Email',
    availability: 'Response within 24h',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Help & Support</h1>
        <p className="text-gray-500 mt-2">
          Get help with your transactions and find answers to common questions
        </p>
      </div>

      {/* Search Section */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search for help articles..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <Card key={method.title} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`${method.bgColor} p-3 rounded-lg mb-4`}>
                    <Icon className={`h-6 w-6 ${method.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {method.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    {method.availability}
                  </div>
                  <Button className="w-full">{method.buttonText}</Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Find quick answers to common questions about our services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Support Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SupportResourceCard
          title="Documentation"
          description="Detailed guides and documentation for using our services"
          items={[
            { label: 'Getting Started Guide', icon: FileText },
            { label: 'API Documentation', icon: FileText },
            { label: 'Security Guidelines', icon: FileText }
          ]}
        />
        <SupportResourceCard
          title="Community Support"
          description="Connect with our community and get help from other users"
          items={[
            { label: 'Community Forum', icon: MessageSquare },
            { label: 'Knowledge Base', icon: Globe },
            { label: 'Video Tutorials', icon: PhoneCall }
          ]}
        />
      </div>

      {/* Emergency Support */}
      <Card className="bg-red-50 border-red-100">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4">
            <div className="bg-red-100 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-red-900">Emergency Support Line</h3>
              <p className="text-sm text-red-600 mt-1">
                For urgent issues related to your transactions
              </p>
              <Button variant="destructive" className="mt-4">
                Contact Emergency Support
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SupportResourceCard({ title, description, items }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-between"
            >
              <div className="flex items-center">
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </div>
              <ExternalLink className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
