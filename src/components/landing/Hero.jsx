import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Shield, CircleDot, Lock, Wallet, 
  CreditCard, CheckCircle2, Banknote 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Animated shield background pattern
const ShieldPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-5">
    <div className="absolute inset-0 flex flex-wrap gap-8 rotate-12 scale-110">
      {[...Array(24)].map((_, i) => (
        <Shield key={i} className="w-12 h-12 text-blue-600" />
      ))}
    </div>
  </div>
);

// Floating icon with trail effect
const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0.4, 1, 0.4],
      scale: [0.8, 1, 0.8],
      y: [0, -20, 0]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    className={className}
  >
    <Icon className="w-full h-full" />
    <motion.div
      className="absolute inset-0 bg-current rounded-full blur-md -z-10"
      animate={{ 
        opacity: [0.2, 0.4, 0.2],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    />
  </motion.div>
);

// Animated wave decoration
const WaveDecoration = () => (
  <svg 
    className="absolute bottom-0 left-0 right-0 text-white w-full h-24"
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial={{ d: "M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" }}
      animate={{ 
        d: [
          "M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z",
          "M321.39 86.44c58-20.79 114.16-40.13 172-51.86 82.39-26.72 168.19-27.73 250.45-10.39C823.78 41 906.67 82 985.66 102.83c70.05 18.48 146.53 26.09 214.34 3V0H0v57.35a600.21 600.21 0 00321.39 29.09z",
          "M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
        ]
      }}
      fill="currentColor"
      transition={{ 
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    />
  </svg>
);

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
      <ShieldPattern />
      <WaveDecoration />

      {/* Floating elements */}
      <FloatingIcon 
        icon={Lock} 
        className="absolute top-20 right-1/4 w-8 h-8 text-blue-200"
        delay={0}
      />
      <FloatingIcon 
        icon={Wallet} 
        className="absolute bottom-32 right-1/6 w-10 h-10 text-blue-100"
        delay={0.5}
      />
      <FloatingIcon 
        icon={CreditCard} 
        className="absolute top-40 left-1/5 w-12 h-12 text-blue-300"
        delay={1}
      />
      <FloatingIcon 
        icon={Banknote} 
        className="absolute bottom-40 left-1/4 w-8 h-8 text-blue-200"
        delay={1.5}
      />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Trust badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6"
            >
              <CircleDot className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Trusted by 10,000+ users</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Secure Your Online 
              <div className="relative inline-block mx-2">
                <span className="relative z-10">Transactions</span>
                <motion.div 
                  className="absolute -inset-1 bg-white/20 rounded-lg -z-10"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <br />with Escrow
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              India's first UPI-based escrow system. Your money stays protected until you're satisfied with the delivery.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="group"
                onClick={() => navigate('/app/new-payment')}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-blue-600"
                onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, x: -10 }}
                    animate={{ scale: 1, x: i * -16 }}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </motion.div>
                ))}
              </div>
              <div className="text-white/80">
                Protected by bank-grade security
              </div>
            </motion.div>
          </motion.div>

          {/* Hero illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="w-full max-w-lg aspect-square relative">
              <motion.div 
                className="absolute inset-0 bg-blue-100 rounded-lg"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div 
                className="absolute inset-0 bg-blue-200 rounded-lg"
                animate={{ rotate: [-3, -5, -3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <div className="absolute inset-0 bg-white rounded-lg shadow-xl flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [0.9, 1, 0.9],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Shield className="w-48 h-48 text-blue-600" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;