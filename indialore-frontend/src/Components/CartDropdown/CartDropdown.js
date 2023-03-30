import React from "react";

import "./CartDropdown.css";

const CartDropdown = () => (
  <div className="cart-dropdown-container">
    <div className="cart-items" />
    <div className="field">
      <input type="submit" value="CHECKOUT >>" />
    </div>
  </div>
);

export default CartDropdown;
