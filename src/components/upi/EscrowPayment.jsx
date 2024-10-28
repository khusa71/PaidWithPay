import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { PAYMENT_STEPS } from '@/constants/payment';
import { useEscrow } from '@/contexts/EscrowContext';
import InitiatePayment from './steps/InitiatePayment';
import UpiAppSelect from './steps/UpiAppSelect';
import ReviewPayment from './steps/ReviewPayment';
import PaymentSuccess from './steps/PaymentSuccess';

const EscrowPayment = () => {
  const { currentStep } = useEscrow();

  const renderStep = () => {
    const steps = {
      [PAYMENT_STEPS.INITIATE]: <InitiatePayment />,
      [PAYMENT_STEPS.UPI_SELECT]: <UpiAppSelect />,
      [PAYMENT_STEPS.REVIEW]: <ReviewPayment />,
      [PAYMENT_STEPS.SUCCESS]: <PaymentSuccess />
    };

    return steps[currentStep];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center justify-center">
              <Shield className="h-16 w-16 text-blue-600 mb-4" />
              <h1 className="text-2xl font-semibold text-center">SecureEscrow Pay</h1>
              <p className="text-gray-500 text-center mt-2">
                UPI Payments with Built-in Escrow Protection
              </p>
            </div>
          </CardContent>
        </Card>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EscrowPayment;