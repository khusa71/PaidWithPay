import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Create Payment',
    description: "Set up your secure payment by entering the seller's UPI ID and payment details.",
    points: [
      "Enter seller's UPI ID",
      'Specify payment amount',
      'Set delivery timeline',
      'Choose protection level'
    ]
  },
  {
    number: '02',
    title: 'Money in Escrow',
    description: 'Your payment is held safely in escrow until you confirm delivery.',
    points: [
      'Secure payment holding',
      'Real-time status updates',
      'Transaction monitoring',
      'Automated notifications'
    ]
  },
  {
    number: '03',
    title: 'Delivery Phase',
    description: 'Seller delivers the product or service within the agreed timeline.',
    points: [
      'Delivery tracking',
      'Timeline monitoring',
      'Seller verification',
      'Quality checks'
    ]
  },
  {
    number: '04',
    title: 'Payment Release',
    description: 'Confirm delivery and release payment to the seller securely.',
    points: [
      'Delivery confirmation',
      'Instant payment release',
      'Transaction completion',
      'Feedback system'
    ]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            How PaidWithPay Works
          </h2>
          <p className="text-lg text-gray-600">
            Our simple four-step process ensures secure transactions between buyers and sellers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border hover:border-blue-500 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Try It Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}