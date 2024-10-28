import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Download, Shield, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { useEscrow } from '@/contexts/EscrowContext';

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PaymentSuccess = () => {
  const { paymentData, resetPayment } = useEscrow();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <Card>
        <CardContent className="pt-6">
          <motion.div 
            className="flex flex-col items-center justify-center py-8"
            variants={itemVariants}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-center">Payment Secured in Escrow!</h2>
            <p className="text-gray-500 text-center mt-2">
              Transaction ID: {paymentData.transactionId}
            </p>
            <div className="mt-6 text-center">
              <p className="font-semibold">₹{Number(paymentData.amount).toLocaleString()}</p>
              <p className="text-sm text-gray-500">held for {paymentData.upiId}</p>
            </div>
          </motion.div>

          <motion.div 
            className="border-t pt-6 space-y-4"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm">Expected Delivery</span>
              </div>
              <span className="text-sm font-medium">
                {format(new Date(paymentData.deadline), 'PPP')}
              </span>
            </div>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Payment is secured in escrow. You'll be notified when the seller confirms shipment.
              </AlertDescription>
            </Alert>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Next Steps:</h4>
              <ol className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">1.</span>
                  <span>Seller will be notified and will process your order</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">2.</span>
                  <span>Track delivery status in your dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">3.</span>
                  <span>Confirm delivery to release payment to seller</span>
                </li>
              </ol>
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="flex-col space-y-3">
          <Button 
            className="w-full" 
            variant="outline"
            onClick={resetPayment}
          >
            Back to Home
          </Button>
          
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Receipt
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              Track Order
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PaymentSuccess;