import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Smartphone, 
  Lock, 
  Clock, 
  Wallet, 
  Users,
  RefreshCcw,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Shield,
    title: 'Escrow Protection',
    description: 'Your money is held safely in escrow until you confirm delivery',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Smartphone,
    title: 'UPI Integration',
    description: 'Seamless payments using your favorite UPI apps',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Lock,
    title: 'Bank-Grade Security',
    description: 'Enterprise-level encryption and security measures',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Clock,
    title: 'Quick Resolution',
    description: '24-hour dispute resolution guarantee',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Wallet,
    title: 'Low Fees',
    description: 'Competitive rates starting from just 0.5%',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Users,
    title: 'Trusted Network',
    description: 'Verified sellers and buyers community',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: RefreshCcw,
    title: 'Automated Refunds',
    description: "Quick refunds if delivery terms aren't met",
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: AlertCircle,
    title: '24/7 Support',
    description: 'Round-the-clock customer support',
    color: 'bg-red-100 text-red-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Everything You Need for Secure Transactions
          </h2>
          <p className="text-lg text-gray-600">
            Our platform combines the convenience of UPI payments with enterprise-grade security features to provide you with the best transaction experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border hover:border-blue-500 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Using PaidWithPay
          </Button>
        </motion.div>
      </div>
    </section>
  );
}