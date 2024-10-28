import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Secure Your Online Transactions with 
              <span className="text-blue-600"> Escrow Protection</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              India's first UPI-based escrow system. Your money stays protected until you're satisfied with the delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/app/new-payment')}
                className="group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            <div className="w-full max-w-lg aspect-square relative">
              <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center">
                <Shield className="w-32 h-32 text-blue-600" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute top-1/4 right-10 w-8 h-8 bg-blue-100 rounded-full"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute bottom-1/4 left-10 w-12 h-12 bg-blue-200 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}