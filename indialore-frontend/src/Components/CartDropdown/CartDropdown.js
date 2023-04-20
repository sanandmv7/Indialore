import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import { useHistory } from 'react-router-dom';

import "./CartDropdown.css";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const history = useHistory();

  const goToCheckoutHandler = () => {
    history.push('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className="field">
        <input type="submit" value="CHECKOUT >>" onClick={goToCheckoutHandler} />
      </div>
    </div>
  );
};

export default CartDropdown;
