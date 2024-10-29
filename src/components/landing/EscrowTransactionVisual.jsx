import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Shield, Lock, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';

// Animation configurations remain the same
const ANIMATIONS = {
  glow: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
  },
  particle: (index) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    x: [0, (index % 2 ? 50 : -50) * Math.random()],
    y: [0, -50 * Math.random()],
  }),
  icon: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  }
};

// Updated theme with pure white background
const THEME = {
  primary: "blue-600",
  accent: "blue-700",
  text: {
    primary: "gray-900",
    secondary: "gray-600"
  }
};

const STEPS = [
  {
    icon: Smartphone,
    title: "UPI Initiation",
    description: "Buyer initiates UPI payment"
  },
  {
    icon: Lock,
    title: "Escrow Lock",
    description: "Funds held in secure escrow"
  },
  {
    icon: Shield,
    title: "Protected Transfer",
    description: "Transaction protected"
  },
  {
    icon: CheckCircle,
    title: "Completion",
    description: "Successful transfer to seller"
  }
];

const AnimatedIcon = ({ Icon, size = 24, className = "" }) => {
  const particles = useMemo(() => 
    Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      animation: ANIMATIONS.particle(i)
    })), 
    []
  );

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      initial={ANIMATIONS.icon.initial}
      animate={ANIMATIONS.icon.animate}
      exit={ANIMATIONS.icon.exit}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`absolute inset-0 rounded-full bg-blue-600/20 blur-xl`}
        animate={ANIMATIONS.glow}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="relative flex items-center justify-center">
        <Icon size={size} className="text-blue-600" />
      </div>

      <motion.div className="absolute inset-0 flex items-center justify-center">
        {particles.map(({ id, animation }) => (
          <motion.div
            key={id}
            className="absolute w-1 h-1 bg-blue-600/80 rounded-full"
            animate={animation}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: id * 0.2,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const PaymentFlowCard = ({ 
  autoPlay = true,
  stepDuration = 3000
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  React.useEffect(() => {
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % STEPS.length);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [autoPlay, stepDuration]);

  const dots = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }
    })), 
    []
  );

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Pure white background */}
      <div className="absolute inset-0 bg-white rounded-3xl" />
      
      <motion.div
        className="absolute inset-0 rounded-3xl bg-white shadow-lg overflow-hidden"
        initial={{ rotate: 0, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {dots.map(({ id, style }) => (
            <motion.div
              key={id}
              className="absolute w-1 h-1 bg-blue-600/5 rounded-full"
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: id * 0.1,
              }}
              style={style}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
          <div className="flex justify-center space-x-3 mb-12">
            {STEPS.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                animate={{
                  scale: index === currentStep ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 1, repeat: index === currentStep ? Infinity : 0 }}
              />
            ))}
          </div>

          <div className="relative w-56 h-56 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <AnimatedIcon
                key={currentStep}
                Icon={STEPS[currentStep].icon}
                size={64}
                className="absolute inset-0 m-auto"
              />
            </AnimatePresence>
          </div>

          <div className="text-center space-y-4 max-w-sm">
            <motion.h3
              key={`title-${currentStep}`}
              className="text-2xl font-semibold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {STEPS[currentStep].title}
            </motion.h3>

            <motion.p
              key={`desc-${currentStep}`}
              className="text-base text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {STEPS[currentStep].description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentFlowCard;