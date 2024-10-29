import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Wallet, ShieldCheck, 
  Package, BadgeCheck 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    number: '01',
    title: 'Create Payment',
    description: 'Initiate your transaction with ease',
    details: 'Set up a secure payment using UPI or bank transfer. Add recipient details and confirm the amount.',
    icon: Wallet,
    features: [
      'Instant UPI setup',
      'Zero platform fees',
      'Bank transfer option'
    ]
  },
  {
    number: '02',
    title: 'Paid With Pay',
    description: 'Your money is safely held',
    details: 'Funds are securely stored in our bank-grade escrow system until delivery is confirmed.',
    icon: ShieldCheck,
    features: [
      'Bank-grade security',
      '24/7 monitoring',
      'Full transparency'
    ]
  },
  {
    number: '03',
    title: 'Delivery Phase',
    description: 'Seller fulfills the order',
    details: 'Track the delivery progress in real-time. Seller completes the service or ships the product.',
    icon: Package,
    features: [
      'Real-time tracking',
      'Delivery updates',
      'Secure verification'
    ]
  },
  {
    number: '04',
    title: 'Release Funds',
    description: 'Confirm and complete',
    details: 'Verify the delivery and release payment instantly to the seller with one click.',
    icon: BadgeCheck,
    features: [
      'Instant transfers',
      'Delivery proof',
      'Transaction receipt'
    ]
  }
];

const AnimatedArrow = () => (
  <div className="hidden lg:flex items-center justify-center absolute -right-12 top-1/2 -translate-y-1/2 w-24">
    <motion.div
      initial={{ opacity: 0.5, x: -5 }}
      animate={{ opacity: 1, x: 5 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className="flex items-center"
    >
      <div className="h-[2px] w-12 bg-gradient-to-r from-blue-200 to-blue-400" />
      <div className="text-blue-400">
        <ArrowRight className="w-6 h-6" />
      </div>
    </motion.div>
  </div>
);

const StepCard = ({ 
  step, 
  index, 
  totalSteps, 
  isActive, 
  isCompleted, 
  onClick 
}) => {
  const Icon = step.icon;
  
  return (
    <div className="relative h-full">
      <Card
        className={cn(
          "h-full p-8 border-2 transition-all duration-300",
          "hover:border-blue-500 hover:shadow-lg",
          isActive && "ring-2 ring-blue-500 ring-offset-2",
          isCompleted && "bg-blue-50"
        )}
        onClick={() => onClick?.(index)}
        role="button"
        tabIndex={0}
      >
        {/* Step Number Indicator */}
        <div className="absolute -top-4 left-8 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Step {step.number}
        </div>

        <div className="h-full flex flex-col">
          {/* Icon and Title */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              {isCompleted ? (
                <CheckCircle2 className="w-7 h-7" />
              ) : (
                <Icon className="w-7 h-7" />
              )}
            </div>
            {isCompleted && (
              <Badge className="bg-green-100 text-green-700">
                Completed
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-blue-600 font-medium">
                {step.description}
              </p>
            </div>

            <p className="text-gray-600 text-sm">
              {step.details}
            </p>

            {/* Features */}
            <div className="space-y-3">
              {step.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="flex items-center text-sm text-gray-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {index < totalSteps - 1 && <AnimatedArrow />}
    </div>
  );
};

export function HowItWorks({
  className,
  onStepClick,
  activeStep = -1,
  completedSteps = [],
}) {
  return (
    <section className={cn("py-24 bg-gradient-to-b from-white to-blue-50", className)}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            Secure Process
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            How PaidWithPay Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your step-by-step guide to secure transactions
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <StepCard
                step={step}
                index={index}
                totalSteps={steps.length}
                isActive={activeStep === index}
                isCompleted={completedSteps.includes(index)}
                onClick={onStepClick}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;