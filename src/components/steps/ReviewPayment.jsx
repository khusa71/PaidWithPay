import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Shield, Clock, Share2, PhoneCall } from 'lucide-react';
import { format } from 'date-fns';
import { useEscrow } from '@/contexts/EscrowContext';
import { PROTECTION_LEVELS } from '@/constants/payment';

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const ReviewPayment = () => {
  const { handleStepComplete, handleBack, paymentData } = useEscrow();
  const protectionLevel = PROTECTION_LEVELS[paymentData.protectionLevel.toUpperCase()];
  const escrowFee = Number(paymentData.amount) * protectionLevel.fee;
  const totalAmount = Number(paymentData.amount) + escrowFee;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(paymentData.upiId);
  };

  const handleProceed = () => {
    // Generate a transaction ID
    const transactionId = `ESC${Date.now().toString().slice(-8)}`;
    handleStepComplete({ transactionId });
  };

  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        onClick={handleBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Review Payment</CardTitle>
          <CardDescription>Verify all details before proceeding</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Amount Breakdown */}
          <motion.div 
            className="bg-gray-50 rounded-lg p-4 space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Amount</span>
              <span className="font-semibold">₹{Number(paymentData.amount).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Escrow Fee ({(protectionLevel.fee * 100).toFixed(1)}%)</span>
              <span className="font-semibold">₹{escrowFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-gray-600">Total Amount</span>
              <span className="font-semibold text-lg">₹{totalAmount.toLocaleString()}</span>
            </div>
          </motion.div>

          {/* Payment Details */}
          <motion.div 
            className="border rounded-lg p-4 space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Paying to</p>
                <p className="font-mono">{paymentData.upiId}</p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleCopyUPI}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="pt-2 border-t">
              <p className="text-sm text-gray-600">Delivery Deadline</p>
              <p className="font-medium">
                {format(new Date(paymentData.deadline), 'PPP')}
              </p>
            </div>

            <div className="pt-2 border-t">
              <p className="text-sm text-gray-600">Protection Level</p>
              <p className="font-medium">{protectionLevel.name}</p>
              <p className="text-sm text-gray-500">{protectionLevel.description}</p>
            </div>
          </motion.div>

          <Alert>
            <Clock className="h-4 w-4" />
            <AlertDescription>
              Funds will be held in escrow until {format(new Date(paymentData.deadline), 'PP')}
            </AlertDescription>
          </Alert>
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <Button 
            className="w-full"
            size="lg"
            onClick={handleProceed}
          >
            Pay ₹{totalAmount.toLocaleString()}
          </Button>

          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="ghost" size="sm">
              <PhoneCall className="mr-2 h-4 w-4" />
              Support
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ReviewPayment;