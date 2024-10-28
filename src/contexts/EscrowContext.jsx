import React, { createContext, useContext, useState } from 'react';
import { PAYMENT_STEPS } from '../constants/payment';

const EscrowContext = createContext({});

export function EscrowProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(PAYMENT_STEPS.INITIATE);
  const [paymentData, setPaymentData] = useState({
    upiId: '',
    amount: '',
    deadline: '',
    protectionLevel: 'standard',
    selectedApp: null
  });
  const [transactionId, setTransactionId] = useState(null);

  const handleStepComplete = (stepData) => {
    setPaymentData(prev => ({ ...prev, ...stepData }));
    const steps = Object.values(PAYMENT_STEPS);
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps = Object.values(PAYMENT_STEPS);
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const resetPayment = () => {
    setCurrentStep(PAYMENT_STEPS.INITIATE);
    setPaymentData({
      upiId: '',
      amount: '',
      deadline: '',
      protectionLevel: 'standard',
      selectedApp: null
    });
    setTransactionId(null);
  };

  const value = {
    currentStep,
    paymentData,
    transactionId,
    handleStepComplete,
    handleBack,
    resetPayment,
    setTransactionId
  };

  return <EscrowContext.Provider value={value}>{children}</EscrowContext.Provider>;
}

export const useEscrow = () => {
  const context = useContext(EscrowContext);
  if (context === undefined) {
    throw new Error('useEscrow must be used within an EscrowProvider');
  }
  return context;
};