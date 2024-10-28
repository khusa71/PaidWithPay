import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronRight, Shield, Info } from 'lucide-react';
import { format } from 'date-fns';
import { useEscrow } from '@/contexts/EscrowContext';
import { paymentFormSchema } from '@/lib/validations';
import { PROTECTION_LEVELS } from '@/constants/payment';

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const InitiatePayment = () => {
  const { handleStepComplete, paymentData } = useEscrow();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: paymentData
  });

  const onSubmit = (data) => {
    handleStepComplete(data);
  };

  // Calculate minimum date (today) and maximum date (30 days from now)
  const minDate = format(new Date(), 'yyyy-MM-dd');
  const maxDate = format(new Date().setDate(new Date().getDate() + 30), 'yyyy-MM-dd');

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4 pt-6">
          {/* UPI ID Input */}
          <div className="space-y-2">
            <Label htmlFor="upiId">Seller's UPI ID</Label>
            <div className="relative">
              <Input
                id="upiId"
                {...register('upiId')}
                placeholder="Enter UPI ID (e.g., seller@upi)"
                className={errors.upiId ? 'border-red-500' : ''}
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enter a valid UPI ID in the format: username@upi</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {errors.upiId && (
              <p className="text-sm text-red-500">{errors.upiId.message}</p>
            )}
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (₹)</Label>
            <Input
              id="amount"
              type="text"
              {...register('amount')}
              placeholder="Enter amount"
              className={errors.amount ? 'border-red-500' : ''}
            />
            {errors.amount && (
              <p className="text-sm text-red-500">{errors.amount.message}</p>
            )}
          </div>

          {/* Deadline Input */}
          <div className="space-y-2">
            <Label htmlFor="deadline">Delivery Deadline</Label>
            <Input
              id="deadline"
              type="date"
              min={minDate}
              max={maxDate}
              {...register('deadline')}
              className={errors.deadline ? 'border-red-500' : ''}
            />
            {errors.deadline && (
              <p className="text-sm text-red-500">{errors.deadline.message}</p>
            )}
          </div>

          {/* Protection Level Select */}
          <div className="space-y-2">
            <Label>Protection Level</Label>
            <Select
              onValueChange={(value) => setValue('protectionLevel', value)}
              defaultValue={watch('protectionLevel')}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select protection level" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(PROTECTION_LEVELS).map((level) => (
                  <SelectItem key={level.id} value={level.id}>
                    <div className="flex flex-col">
                      <span>{level.name}</span>
                      <span className="text-sm text-gray-500">
                        {level.description}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Alert>
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Funds will be held in escrow until delivery is confirmed
            </AlertDescription>
          </Alert>
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <Button 
            type="submit" 
            className="w-full"
            size="lg"
          >
            Continue to Pay
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="flex items-center justify-between w-full text-sm text-gray-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              <span>Escrow Protected</span>
            </div>
            <Button variant="link" size="sm" className="text-blue-600 h-auto p-0">
              View Terms
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};

export default InitiatePayment;