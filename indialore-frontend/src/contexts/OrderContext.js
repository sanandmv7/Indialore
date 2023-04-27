import { createContext, useState } from 'react';

export const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
  const [ orderDetails, setOrderDetails ] = useState(null);
  
  const value = { orderDetails, setOrderDetails};
  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};