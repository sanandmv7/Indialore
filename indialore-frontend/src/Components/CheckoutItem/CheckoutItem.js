import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import "./CheckoutItem.css";

function CheckoutItem({ cartItem }) {
  const { name, img_url, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <tr>
      <td>
        <img src={img_url} alt="" />
      </td>
      <td>{name}</td>
      <td>{`Rs.${price}`}</td>
      <td>
        <span className="arrow" onClick={removeItemHandler}>&#10094;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler}>&#10095;</span>
      </td>
      <td>{`Rs.${quantity * price}`}</td>
      <td>
        <span class="a" onClick={clearItemHandler}>
          <i class="far fa-times-circle"></i>
        </span>
      </td>
    </tr>
  );
}

export default CheckoutItem;
