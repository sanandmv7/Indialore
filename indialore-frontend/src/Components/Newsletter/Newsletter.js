import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../contexts/UserContext";

import "./Newsletter.css";

function Newsletter() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (input) {
      // console.log(input);

      // add to firebase
      firebase
        .firestore()
        .collection("emails")
        .add({
          email: input,
        })
        .catch((error) => {
          alert(error.message);
        });

      // reset input
      setInput("");

      // set thank you message
      setMessage("Thank you for subscribing!");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up for Newsletters</h4>
        <p>
          Get E-mail updates about out latest shop and{" "}
          <span>special offers.</span>.
        </p>
        <p>{message}</p>
      </div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter your email address"
          onChange={inputHandler}
          value={input}
        />
        <button className="normal-button" onClick={submitHandler}>
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
