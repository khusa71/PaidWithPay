import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '₹10Cr+',
    label: 'Transaction Volume',
    color: 'text-blue-600'
  },
  {
    icon: Users,
    value: '50k+',
    label: 'Happy Users',
    color: 'text-green-600'
  },
  {
    icon: CheckCircle,
    value: '99.9%',
    label: 'Success Rate',
    color: 'text-purple-600'
  }
];

export function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-lg shadow-lg border text-center group hover:border-blue-500 transition-all duration-300"
              >
                <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}