import React, { useContext, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import "./Checkout.css";

import axios from "axios";
import logo from "../../assets/logo.svg";

import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../../contexts/UserContext";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [deliveryCharge] = useState(49);

  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post(
      `http://${document.location.hostname}:5000/payment/orders`,
      { amount: cartTotal + deliveryCharge }, // pass the amount as a parameter
      { headers: { "Content-Type": "application/json" } }
    );

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_29uyaVVF7MwK4l", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "INDIALORE",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        // alert("Thank you for your order.");
        history.push("/thankyou");

        // add to firebase
        firebase
          .firestore()
          .collection("orders")
          .add({
            order_id: order_id,
            amount: amount.toString(),
          })
          .catch((error) => {
            alert(error.message);
          });

        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        await axios.post(
          `http://${document.location.hostname}:5000/payment/success`,
          data
        );

        // alert(result.data.msg);
      },
      prefill: {
        name: "Name",
      },
      notes: {
        address: "IndiaLore Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
              return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
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
              <td>GST (incl. in price)</td>
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
              <strong>{`Rs.${cartTotal + deliveryCharge}`}</strong>
            </td>
          </table>
          <button class="normal-button" onClick={displayRazorpay}>
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
