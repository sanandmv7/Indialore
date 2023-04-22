import { createContext, useState } from 'react';

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const value = { selectedCategory, setSelectedCategory };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};