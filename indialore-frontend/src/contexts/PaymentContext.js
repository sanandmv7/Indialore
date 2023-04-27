import { createContext, useState } from 'react';

export const PaymentContext = createContext(null);

export const PaymentProvider = ({ children }) => {
  const [ paymentId, setPaymentId ] = useState(null);
  const [ paymentAmount, setPaymentAmount ] = useState(null);
  
  const value = { paymentId, setPaymentId, paymentAmount, setPaymentAmount };
  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};