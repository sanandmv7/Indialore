import React, { useContext, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import "./CheckoutDetails.css";

import axios from "axios";
import logo from "../../assets/logo.svg";

import { useHistory } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../contexts/UserContext";

import env from "react-dotenv";
import { PaymentContext } from "../../contexts/PaymentContext";
import { Web3Context } from "../../contexts/Web3Context";
import { OrderContext } from "../../contexts/OrderContext";

function CheckoutDetails() {
  const { cartItems, resetCart, cartTotal } = useContext(CartContext);
  const [deliveryCharge] = useState(0);

  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const { currentAccount } = useContext(Web3Context);

  const [bFname, setBFname] = useState("");
  const [bLname, setBLname] = useState("");
  const [bSAddress, setBSAddress] = useState("");
  const [bHouse, setBHouse] = useState("");
  const [bCity, setBCity] = useState("");
  const [bState, setBState] = useState("");
  const [bPin, setBPin] = useState("");
  const [bEmail, setBEmail] = useState("");
  const [bContact, setBContact] = useState("");

  const [sFname, setSFname] = useState("");
  const [sLname, setSLname] = useState("");
  const [sSAddress, setSSAddress] = useState("");
  const [sHouse, setSHouse] = useState("");
  const [sCity, setSCity] = useState("");
  const [sState, setSState] = useState("");
  const [sPin, setSPin] = useState("");
  const [sEmail, setSEmail] = useState("");
  const [sContact, setSContact] = useState("");

  const { setPaymentId, setPaymentAmount } = useContext(PaymentContext);
  const { setOrderDetails } = useContext(OrderContext);

  const date = new Date();

  const handleBFNameChange = (e) => {
    setBFname(e.target.value);
  };

  const handleBLNameChange = (e) => {
    setBLname(e.target.value);
  };

  const handleBSAddressChange = (e) => {
    setBSAddress(e.target.value);
  };

  const handleBHouseChange = (e) => {
    setBHouse(e.target.value);
  };

  const handleBCityChange = (e) => {
    setBCity(e.target.value);
  };

  const handleBStateChange = (e) => {
    setBState(e.target.value);
  };

  const handleBPinChange = (e) => {
    setBPin(e.target.value);
  };

  const handleBEmailChange = (e) => {
    setBEmail(e.target.value);
  };

  const handleBContactChange = (e) => {
    setBContact(e.target.value);
  };

  const handleSFNameChange = (e) => {
    setSFname(e.target.value);
  };

  const handleSLNameChange = (e) => {
    setSLname(e.target.value);
  };

  const handleSSAddressChange = (e) => {
    setSSAddress(e.target.value);
  };

  const handleSHouseChange = (e) => {
    setSHouse(e.target.value);
  };

  const handleSCityChange = (e) => {
    setSCity(e.target.value);
  };

  const handleSStateChange = (e) => {
    setSState(e.target.value);
  };

  const handleSPinChange = (e) => {
    setSPin(e.target.value);
  };

  const handleSEmailChange = (e) => {
    setSEmail(e.target.value);
  };

  const handleSContactChange = (e) => {
    setSContact(e.target.value);
  };

  function updateProductQuantities(items) {
    items.forEach((item) => {
      console.log(item.docId);
      var docRef = firebase.firestore().collection("Products").doc(item.docId);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data().quantity-item.quantity);
            firebase.firestore().collection("Products").doc(item.docId).update({quantity: doc.data().quantity-item.quantity});
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    });
  }

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
    if (currentAccount !== null) {
      console.log(document.location.hostname);

      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const result = await axios.post(
        `http://${document.location.hostname}:5000/payment/orders`,
        { amount: cartTotal + cartTotal * 0.12 + deliveryCharge }, // pass the amount as a parameter
        { headers: { "Content-Type": "application/json" } }
      );

      if (!result) {
        alert("Server error. Are you online?");
        return;
      }

      const { amount, id: order_id, currency } = result.data;

      const options = {
        key: env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "INDIALORE",
        description: "Test Transaction",
        image: { logo },
        order_id: order_id,
        handler: async function (response) {
          // alert("Thank you for your order.");
          history.push("/processing");

          setPaymentId(response.razorpay_payment_id);
          setPaymentAmount(amount.toString());

          // add to firebase
          firebase
            .firestore()
            .collection("orders")
            .add({
              order_id: order_id,
              payment_id: response.razorpay_payment_id,
              amount: amount.toString(),
              buyer: user.uid,
              billingAddress:
                bFname +
                " " +
                bLname +
                ", " +
                bHouse +
                ", " +
                bSAddress +
                ", " +
                bCity +
                ", " +
                bState +
                "-" +
                bPin +
                ", email: " +
                bEmail +
                ", phone: " +
                bContact,
              shippingAddress:
                sFname +
                " " +
                sLname +
                ", " +
                sHouse +
                ", " +
                sSAddress +
                ", " +
                sCity +
                ", " +
                sState +
                "-" +
                sPin +
                ", email: " +
                sEmail +
                ", phone: " +
                sContact,
              cartItems: cartItems,
              createdAt: date.getTime(),
            })
            .catch((error) => {
              alert(error.message);
            });

          setOrderDetails({
            username: `${bFname} ${bLname}`,
            useremail: `${bEmail}`,
            userzip: `${bPin}`,
            usercity: `${bCity}`,
            usercountry: `India`,
            _id: order_id,
            products: cartItems,
          });

          updateProductQuantities(cartItems);

          resetCart();

          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            // to: currentAccount,
            // amount: amount.toString()
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
    } else {
      alert("Please connect your wallet first");
    }
  }

  return (
    <section id="checkout" className="section-p1">
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-header">Billing Information</div>
          <div className="accordion-content">
            <form>
              <div id="name">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  value={bFname}
                  onChange={handleBFNameChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  value={bLname}
                  onChange={handleBLNameChange}
                />
              </div>
              <input
                type="text"
                placeholder="Street Address"
                id="street"
                value={bSAddress}
                onChange={handleBSAddressChange}
              />
              <input
                type="text"
                placeholder="House/Apt/Suite"
                id="house"
                value={bHouse}
                onChange={handleBHouseChange}
              />
              <div id="name">
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  value={bCity}
                  onChange={handleBCityChange}
                />
                <input
                  type="text"
                  placeholder="State"
                  id="state"
                  value={bState}
                  onChange={handleBStateChange}
                />
                <input
                  type="text"
                  placeholder="Pin Code"
                  id="pincode"
                  value={bPin}
                  onChange={handleBPinChange}
                />
              </div>
              <div id="name">
                <input
                  type="text"
                  placeholder="Email"
                  id="mail"
                  value={bEmail}
                  onChange={handleBEmailChange}
                />
                <input
                  type="text"
                  placeholder="Contact"
                  id="contact"
                  value={bContact}
                  onChange={handleBContactChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header">Shipping Information</div>
          <div className="accordion-content">
            <form>
              <div id="name">
                <input
                  type="text"
                  placeholder="First Name"
                  id="fname"
                  value={sFname}
                  onChange={handleSFNameChange}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lname"
                  value={sLname}
                  onChange={handleSLNameChange}
                />
              </div>

              <input
                type="text"
                placeholder="Street Address"
                id="street"
                value={sSAddress}
                onChange={handleSSAddressChange}
              />
              <input
                type="text"
                placeholder="House/Apt/Suite"
                id="house"
                value={sHouse}
                onChange={handleSHouseChange}
              />
              <div id="name">
                <input
                  type="text"
                  placeholder="City"
                  id="city"
                  value={sCity}
                  onChange={handleSCityChange}
                />
                <input
                  type="text"
                  placeholder="State"
                  id="state"
                  value={sState}
                  onChange={handleSStateChange}
                />
                <input
                  type="text"
                  placeholder="Pin Code"
                  id="pincode"
                  value={sPin}
                  onChange={handleSPinChange}
                />
              </div>

              <div id="name">
                <input
                  type="text"
                  placeholder="Email"
                  id="mail"
                  value={sEmail}
                  onChange={handleSEmailChange}
                />
                <input
                  type="text"
                  placeholder="Contact"
                  id="contact"
                  value={sContact}
                  onChange={handleSContactChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header">Payment</div>
          <div className="accordion-content-pay">
            {/* <img src="https://badges.razorpay.com/badge-dark.png " alt="" /> */}
            <p>Rs.{cartTotal + cartTotal * 0.12 + deliveryCharge}</p>
            <button
              className="normal-button"
              id="check-btn"
              onClick={displayRazorpay}
            >
              Proceed to Pay &gt; &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutDetails;
