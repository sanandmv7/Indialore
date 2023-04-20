import { createContext, useState, useContext, useEffect } from 'react';
import { FirebaseContext } from './UserContext';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    firebase.firestore().collection('Products').get().then((snapshot)=>{
      const allProducts = snapshot.docs.map((category)=>{
        return {
          ...category.data(),
          id: category.id
        }
      })
      setProducts(allProducts);
    })
  }, [firebase])

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};