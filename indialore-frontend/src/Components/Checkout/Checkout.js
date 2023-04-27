import React, { useContext, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import "./Checkout.css";

import { useHistory } from "react-router-dom";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [deliveryCharge] = useState(0);

  const history = useHistory();

  return (
    <div>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => {
              return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
            })}
          </tbody>
        </table>
      </section>
      <section id="checkout" className="section-p1">
        <div id="coupon">
          <h3>Add your Coupons</h3>
          <div>
            <input type="text" placeholder="Have Coupon?" />
            <button className="normal-button">Apply</button>
          </div>
        </div>
        <div id="subtotal">
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>{`Rs.${cartTotal}`}</td>
            </tr>
            <tr>
              <td>GST 12%</td>
              <td>Rs.{cartTotal * 0.12}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Rs.{deliveryCharge}</td>
            </tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>{`Rs.${
                cartTotal + cartTotal * 0.12 + deliveryCharge
              }`}</strong>
            </td>
          </table>
          <button
            className="normal-button"
            onClick={() => {
              history.push("/checkoutdetails");
            }}
          >
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
