import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Key, 
  UserCheck, 
  FileCheck,
  Server,
  RefreshCcw,
  AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: '256-bit encryption for all transactions and data transmission',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Key,
    title: 'Two-Factor Authentication',
    description: 'Additional security layer for all sensitive operations',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: UserCheck,
    title: 'Verified Merchants',
    description: 'Thorough verification process for all sellers',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance',
    description: 'Compliant with RBI guidelines and data protection laws',
    color: 'bg-orange-100 text-orange-600'
  }
];

const securityMetrics = [
  { value: '₹100Cr+', label: 'Secure Transactions' },
  { value: '100%', label: 'Success Rate' },
  { value: '0', label: 'Data Breaches' },
  { value: '24/7', label: 'Security Monitoring' }
];

export function Security() {
  return (
    <section id="security" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block p-3 bg-blue-500/10 rounded-2xl mb-4">
            <Shield className="h-8 w-8 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-lg text-gray-400">
            Your security is our top priority. We use bank-level security measures to protect your transactions and data.
          </p>
        </motion.div>

        {/* Security Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {securityMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Security Certificates */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Security Certifications</h3>
              <p className="text-gray-400">
                We maintain the highest security standards with regular audits and certifications.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-4">
              {/* Replace with actual certification logos */}
              {[1, 2, 3].map((cert) => (
                <div key={cert} className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Cert {cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}