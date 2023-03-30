import React from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function ContactPage() {
  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div class="matter-head">
          <h2>Contact Us </h2>
        </div>
        <div class="matter-content">
          <p>
            Please leave your comments/feedback any time -{" "}
            <strong>contact@indialore.com</strong>
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ContactPage;
