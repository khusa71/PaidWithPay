export const PAYMENT_STEPS = {
    INITIATE: 'initiate',
    UPI_SELECT: 'upiSelect',
    REVIEW: 'review',
    SUCCESS: 'success'
  };
  
  export const PROTECTION_LEVELS = {
    STANDARD: {
      id: 'standard',
      name: 'Standard Protection',
      fee: 0.005,
      description: 'Basic escrow protection with 0.5% fee'
    },
    PREMIUM: {
      id: 'premium',
      name: 'Premium Protection',
      fee: 0.01,
      description: 'Enhanced protection with faster resolution and 1% fee'
    }
  };
  
  export const UPI_APPS = [
    {
      id: 'gpay',
      name: 'Google Pay',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      icon: 'Smartphone'
    },
    {
      id: 'phonepe',
      name: 'PhonePe',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      icon: 'Smartphone'
    },
    {
      id: 'paytm',
      name: 'Paytm',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      icon: 'Smartphone'
    },
    {
      id: 'bhim',
      name: 'BHIM',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      icon: 'Smartphone'
    }
  ];