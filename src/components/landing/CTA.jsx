import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CTA({
  title = "Ready to Make Secure Payments?",
  description = "Join thousands of users who trust SecureEscrow for their transactions",
  primaryButtonText = "Start Your First Transaction",
  secondaryButtonText = "View Dashboard",
  primaryButtonPath = "/app/new-payment",
  secondaryButtonPath = "/app/dashboard",
  icon: Icon = Shield,
  className,
  isLoading = false,
  onPrimaryClick,
  onSecondaryClick,
  gradientFrom = "from-blue-600",
  gradientTo = "to-blue-700"
}) {
  const navigate = useNavigate();

  const handlePrimaryClick = async () => {
    try {
      if (onPrimaryClick) {
        await onPrimaryClick();
      }
      navigate(primaryButtonPath);
    } catch (error) {
      console.error('Navigation error:', error);
      // You could add toast notification here
    }
  };

  const handleSecondaryClick = async () => {
    try {
      if (onSecondaryClick) {
        await onSecondaryClick();
      }
      navigate(secondaryButtonPath);
    } catch (error) {
      console.error('Navigation error:', error);
      // You could add toast notification here
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      className={cn(
        "py-20 relative overflow-hidden",
        `bg-gradient-to-r ${gradientFrom} ${gradientTo}`,
        className
      )}
      aria-labelledby="cta-title"
    >
      {/* Decorative elements with ARIA hidden */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <Icon className="h-16 w-16 text-white/80 mx-auto mb-6" aria-hidden="true" />
          </motion.div>
          
          <motion.h2 
            id="cta-title"
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handlePrimaryClick}
              className="group"
              disabled={isLoading}
              aria-label={primaryButtonText}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-blue-600"
              onClick={handleSecondaryClick}
              disabled={isLoading}
              aria-label={secondaryButtonText}
            >
              {secondaryButtonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;