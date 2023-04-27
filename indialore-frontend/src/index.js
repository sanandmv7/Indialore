import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Context, { FirebaseContext } from "./contexts/UserContext";
import firebase from "./firebase/config";
import { ProductsProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import { Web3Provider } from "./contexts/Web3Context";
import { WishlistProvider } from "./contexts/WishlistContext";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <Web3Provider>
        <ProductsProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </ProductsProvider>
      </Web3Provider>
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
