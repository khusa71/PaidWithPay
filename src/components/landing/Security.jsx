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
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: '256-bit encryption for all transactions and data transmission',
    badge: 'AES-256'
  },
  {
    icon: Key,
    title: 'Two-Factor Authentication',
    description: 'Additional security layer for all sensitive operations',
    badge: 'TOTP'
  },
  {
    icon: UserCheck,
    title: 'Verified Merchants',
    description: 'Thorough verification process for all sellers',
    badge: 'KYC'
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance',
    description: 'Compliant with RBI guidelines and data protection laws',
    badge: 'PCI DSS'
  }
];

const securityMetrics = [
  { 
    value: '₹100Cr+', 
    label: 'Secure Transactions',
    icon: Server
  },
  { 
    value: '100%', 
    label: 'Success Rate',
    icon: CheckCircle2
  },
  { 
    value: '0', 
    label: 'Data Breaches',
    icon: Shield
  },
  { 
    value: '24/7', 
    label: 'Security Monitoring',
    icon: RefreshCcw
  }
];

const certifications = [
  {
    id: 1,
    name: 'ISO 27001',
    description: 'Information Security Management',
    icon: Shield
  },
  {
    id: 2,
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard',
    icon: Lock
  },
  {
    id: 3,
    name: 'SOC 2 Type II',
    description: 'Service Organization Control',
    icon: FileCheck
  }
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
          <Icon className="h-4 w-4 text-white" />
        </div>
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/10 text-blue-100">
          {feature.badge}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-blue-200 transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm text-blue-100">{feature.description}</p>
    </motion.div>
  );
};

const MetricCard = ({ metric, index }) => {
  const Icon = metric.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
    >
      <div className="flex justify-center mb-2">
        <Icon className="h-5 w-5 text-blue-200" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">
        {metric.value}
      </div>
      <div className="text-sm text-blue-100">{metric.label}</div>
    </motion.div>
  );
};

const CertificationCard = ({ cert }) => {
  const Icon = cert.icon;
  return (
    <div className="flex items-center space-x-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="flex-shrink-0">
        <Icon className="h-6 w-6 text-blue-200" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white">{cert.name}</h4>
        <p className="text-xs text-blue-100">{cert.description}</p>
      </div>
    </div>
  );
};

export function Security() {
  return (
    <section id="security" className="py-12 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <div className="inline-block p-2 bg-white/10 rounded-xl mb-3">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-3 text-white">
            Enterprise-Grade Security
          </h2>
          <p className="text-base text-blue-100">
            Your security is our top priority. We implement bank-level security measures 
            and maintain multiple certifications to ensure your data stays protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {securityMetrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {securityFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Security Certifications
            </h3>
            <p className="text-sm text-blue-100">
              Our platform maintains the highest security standards with regular audits 
              and industry-recognized certifications.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;