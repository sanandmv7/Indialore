import { createContext, useState } from 'react';

export const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState();
  
  const value = { productDetails, setProductDetails };
  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
};