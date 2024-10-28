import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { useEscrow } from '@/contexts/EscrowContext';
import { UPI_APPS } from '@/constants/payment';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UpiAppSelect = () => {
  const { handleStepComplete, handleBack } = useEscrow();

  const handleAppSelect = (appId) => {
    handleStepComplete({ selectedApp: appId });
  };

  return (
    <div className="space-y-6">
      <Button 
        variant="ghost" 
        className="mb-4"
        onClick={handleBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Choose Payment Method</CardTitle>
          <CardDescription>Select your preferred UPI app</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {UPI_APPS.map((app) => (
              <motion.div
                key={app.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  className="w-full h-auto py-6 flex flex-col items-center"
                  onClick={() => handleAppSelect(app.id)}
                >
                  <div className={`w-12 h-12 rounded-full ${app.bgColor} flex items-center justify-center mb-2`}>
                    <Smartphone className={`h-6 w-6 ${app.textColor}`} />
                  </div>
                  <span className="text-sm font-medium">{app.name}</span>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or pay using</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Input placeholder="Enter UPI ID" className="font-mono" />
            <Button onClick={() => handleAppSelect('manual')}>
              Pay Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpiAppSelect;