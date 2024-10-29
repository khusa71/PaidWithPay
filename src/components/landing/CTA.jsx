import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Loader2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MotionButton = motion(Button);

export function CTA({
  title = "Ready to Make Secure Payments?",
  description = "Join thousands of users who trust PaidWithPay for their transactions",
  primaryButtonText = "Start Your First Transaction",
  secondaryButtonText = "View Dashboard",
  primaryButtonPath = "/app/new-payment",
  secondaryButtonPath = "/app/dashboard",
  icon: Icon = Shield,
  className,
  isLoading = false,
  onPrimaryClick,
  onSecondaryClick,
  isExternal = false,
}) {
  const navigate = useNavigate();

  const handlePrimaryClick = async (e) => {
    try {
      if (onPrimaryClick) {
        await onPrimaryClick(e);
      }
      if (!e.defaultPrevented && !isExternal) {
        navigate(primaryButtonPath);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  const handleSecondaryClick = async (e) => {
    try {
      if (onSecondaryClick) {
        await onSecondaryClick(e);
      }
      if (!e.defaultPrevented && !isExternal) {
        navigate(secondaryButtonPath);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <section 
      className={cn(
        "py-24 relative overflow-hidden bg-white",
        className
      )}
      aria-labelledby="cta-title"
    >
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-blue-100/40 bg-[size:20px_20px]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-blue-50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div 
            variants={itemVariants}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50" />
            <Icon className="relative h-16 w-16 text-blue-600 mx-auto mb-6" aria-hidden="true" />
          </motion.div>
          
          <motion.h2 
            id="cta-title"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <MotionButton 
              size="lg" 
              variant="default"
              onClick={handlePrimaryClick}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 group"
              disabled={isLoading}
              aria-label={primaryButtonText}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {primaryButtonText}
              {isExternal ? (
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              ) : (
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              )}
            </MotionButton>
            
            <MotionButton 
              size="lg" 
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700"
              onClick={handleSecondaryClick}
              disabled={isLoading}
              aria-label={secondaryButtonText}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {secondaryButtonText}
            </MotionButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;