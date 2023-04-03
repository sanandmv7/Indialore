import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import "./Checkout.css";

function Checkout() {
  const { cartItems, cartTotal} = useContext(CartContext);

  return (
    <div>
      <section id="cart" class="section-p1">
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
              return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            })}
          </tbody>
        </table>
      </section>
      <section id="checkout" class="section-p1">
            <div id="coupon">
                <h3>Add your Coupons</h3>
                <div>
                    <input type="text" placeholder="Have Coupon?" />
                    <botton class="normal-button">Apply</botton>
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
                        <td>Shipping</td>
                        <td>Rs.49</td>
                    </tr>
                    <td><strong>Total</strong></td>
                    <td><strong>{`Rs.${cartTotal+49}`}</strong></td>
                </table>
                <button class="normal-button">Checkout</button>
            </div>
        </section>
    </div>
  );
}

export default Checkout;
