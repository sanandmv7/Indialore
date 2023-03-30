import React from "react";

import "./Newsletter.css";

function Newsletter() {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up for Newsletters</h4>
        <p>
          Get E-mail updates about out latest shop and{" "}
          <span>special offers.</span>.
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Enter your email address" />
        <button className="normal-button">Sign Up</button>
      </div>
    </section>
  );
}

export default Newsletter;
