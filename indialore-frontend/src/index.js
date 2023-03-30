import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context, { FirebaseContext } from "./contexts/UserContext";
import firebase from "./firebase/config";
import { ProductsProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
