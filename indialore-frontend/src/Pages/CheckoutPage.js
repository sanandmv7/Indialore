import React, { useEffect } from "react";
import Checkout from "../Components/Checkout/Checkout";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function CheckoutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section class="explore-by-state-section">
        <div class="waviy">
          <span style={{ "--i": 1 }}>C</span>
          <span style={{ "--i": 2 }}>A</span>
          <span style={{ "--i": 3 }}>R</span>
          <span style={{ "--i": 4 }}>T</span>
        </div>
      </section>
      <Checkout />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
