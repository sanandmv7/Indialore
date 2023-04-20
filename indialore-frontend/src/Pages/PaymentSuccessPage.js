import React from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function PaymentSuccessPage() {
  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div class="matter-head">
          <h2>Payment Successful </h2>
        </div>
        <div class="matter-content">
          <p>
            Thank you for your order.
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default PaymentSuccessPage;
