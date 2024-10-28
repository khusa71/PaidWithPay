export const formatPrice = (amount, currency = '₹') => {
    const number = parseFloat(amount);
    if (isNaN(number)) return `${currency}0.00`;
    
    return `${currency}${number.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };
  
  export const calculateEscrowFee = (amount, feePercentage) => {
    const fee = parseFloat(amount) * feePercentage;
    return parseFloat(fee.toFixed(2));
  };
  
  export const calculateTotal = (amount, feePercentage) => {
    const baseAmount = parseFloat(amount);
    const fee = calculateEscrowFee(amount, feePercentage);
    return parseFloat((baseAmount + fee).toFixed(2));
  };