import { createContext, useState } from 'react';

export const Web3Context = createContext(null);

export const Web3Provider = ({ children }) => {
  // Metamask Account
  const [currentAccount, setCurrentAccount] = useState(null);
  
  const value = { currentAccount, setCurrentAccount };
  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
};