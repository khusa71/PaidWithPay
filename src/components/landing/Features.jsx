import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Smartphone, Lock, Clock } from 'lucide-react';

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

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose SecureEscrow?</h2>
          <p className="text-lg text-gray-600">
            We combine UPI convenience with escrow security
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-lg border group hover:border-blue-500 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}