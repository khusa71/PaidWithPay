import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Shield, 
  Info, 
  Smartphone,
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const STEPS = {
  DETAILS: 'details',
  UPI_SELECTION: 'upi_selection',
  REVIEW: 'review',
  CONFIRMATION: 'confirmation'
};

const UPI_APPS = [
  { id: 'gpay', name: 'Google Pay', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
  { id: 'phonepe', name: 'PhonePe', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
  { id: 'paytm', name: 'Paytm', bgColor: 'bg-indigo-50', textColor: 'text-indigo-600' },
  { id: 'bhim', name: 'BHIM UPI', bgColor: 'bg-green-50', textColor: 'text-green-600' },
  { id: 'amazon', name: 'Amazon Pay', bgColor: 'bg-orange-50', textColor: 'text-orange-600' },
  { id: 'others', name: 'Other Apps', bgColor: 'bg-gray-50', textColor: 'text-gray-600' }
];

const NewPayment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(STEPS.DETAILS);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onDetailsSubmit = (data) => {
    setPaymentDetails(data);
    setCurrentStep(STEPS.UPI_SELECTION);
  };

  const handleUPISelection = (appId) => {
    setPaymentDetails(prev => ({ ...prev, upiApp: appId }));
    setCurrentStep(STEPS.REVIEW);
  };

  const handlePaymentConfirmation = () => {
    // Here you would typically initiate the actual payment
    setCurrentStep(STEPS.CONFIRMATION);
  };

  const renderPaymentDetails = () => (
    <form onSubmit={handleSubmit(onDetailsSubmit)}>
      <CardContent className="space-y-6">
        {/* Previous form fields remain the same */}
        <div className="space-y-2">
          <Label htmlFor="upiId">Recipient's UPI ID</Label>
          <div className="relative">
            <Input
              id="upiId"
              {...register("upiId", { 
                required: "UPI ID is required",
                pattern: {
                  value: /^[\w.-]+@[\w.-]+$/,
                  message: "Invalid UPI ID format"
                }
              })}
              placeholder="Enter UPI ID (e.g. name@upi)"
              className={errors.upiId ? "border-red-500" : ""}
            />
            <Info className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
          </div>
          {errors.upiId && (
            <p className="text-sm text-red-500">{errors.upiId.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount (₹)</Label>
          <Input
            id="amount"
            type="number"
            {...register("amount", { 
              required: "Amount is required",
              min: { value: 1, message: "Amount must be greater than 0" }
            })}
            placeholder="Enter amount"
          />
          {errors.amount && (
            <p className="text-sm text-red-500">{errors.amount.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Protection Level</Label>
          <Select defaultValue="standard">
            <SelectTrigger>
              <SelectValue placeholder="Select protection level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Protection (0.5% fee)</SelectItem>
              <SelectItem value="premium">Premium Protection (1% fee)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Your payment will be held in escrow until you confirm delivery
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Continue to Payment
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </form>
  );

  const renderUPISelection = () => (
    <CardContent>
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {UPI_APPS.map((app) => (
            <Button
              key={app.id}
              variant="outline"
              className="h-auto py-6 flex flex-col items-center justify-center"
              onClick={() => handleUPISelection(app.id)}
            >
              <div className={`w-12 h-12 rounded-full ${app.bgColor} flex items-center justify-center mb-2`}>
                <Smartphone className={`h-6 w-6 ${app.textColor}`} />
              </div>
              <span className="text-sm font-medium">{app.name}</span>
            </Button>
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
          <Input placeholder="Enter UPI ID" className="flex-1" />
          <Button onClick={() => handleUPISelection('manual')}>
            Pay Now
          </Button>
        </div>
      </div>
    </CardContent>
  );

  const renderReview = () => (
    <CardContent className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Amount</span>
          <span className="font-semibold">₹{paymentDetails?.amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Escrow Fee (0.5%)</span>
          <span className="font-semibold">₹{(paymentDetails?.amount * 0.005).toFixed(2)}</span>
        </div>
        <div className="border-t pt-2 flex justify-between">
          <span className="text-gray-600">Total</span>
          <span className="font-semibold">
            ₹{(paymentDetails?.amount * 1.005).toFixed(2)}
          </span>
        </div>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          Payment will be held in escrow until you confirm delivery
        </AlertDescription>
      </Alert>

      <Button className="w-full" onClick={handlePaymentConfirmation}>
        Confirm Payment
      </Button>
    </CardContent>
  );

  const renderConfirmation = () => (
    <CardContent className="text-center py-8 space-y-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Shield className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold">Payment Successful!</h3>
      <p className="text-gray-500">Your payment is now secured in escrow</p>
      <Button 
        variant="outline" 
        className="mt-6"
        onClick={() => navigate('/transactions')}
      >
        View Transaction
      </Button>
    </CardContent>
  );

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.DETAILS:
        return renderPaymentDetails();
      case STEPS.UPI_SELECTION:
        return renderUPISelection();
      case STEPS.REVIEW:
        return renderReview();
      case STEPS.CONFIRMATION:
        return renderConfirmation();
      default:
        return renderPaymentDetails();
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="mb-4"
          onClick={() => {
            if (currentStep === STEPS.DETAILS) {
              navigate(-1);
            } else {
              setCurrentStep(prev => {
                if (prev === STEPS.UPI_SELECTION) return STEPS.DETAILS;
                if (prev === STEPS.REVIEW) return STEPS.UPI_SELECTION;
                return prev;
              });
            }
          }}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Create New Payment</h1>
        <p className="text-gray-500">Set up a new Paid With Pay payment</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {currentStep === STEPS.DETAILS && "Payment Details"}
            {currentStep === STEPS.UPI_SELECTION && "Choose Payment Method"}
            {currentStep === STEPS.REVIEW && "Review Payment"}
            {currentStep === STEPS.CONFIRMATION && "Payment Confirmation"}
          </CardTitle>
          <CardDescription>
            {currentStep === STEPS.DETAILS && "Enter the payment details"}
            {currentStep === STEPS.UPI_SELECTION && "Select your preferred UPI app"}
            {currentStep === STEPS.REVIEW && "Review and confirm your payment"}
            {currentStep === STEPS.CONFIRMATION && "Your payment has been processed"}
          </CardDescription>
        </CardHeader>
        {renderStep()}
      </Card>
    </div>
  );
};

export default NewPayment;