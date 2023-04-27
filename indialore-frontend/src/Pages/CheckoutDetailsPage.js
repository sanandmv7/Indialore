import React, { useEffect } from "react";
import CheckoutDetails from "../Components/CheckoutDetails/CheckoutDetails";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function CheckoutDetailsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section class="explore-by-state-section">
        <div class="waviy">
          <span style={{ "--i": 1 }}>C</span>
          <span style={{ "--i": 2 }}>H</span>
          <span style={{ "--i": 3 }}>E</span>
          <span style={{ "--i": 4 }}>C</span>
          <span style={{ "--i": 5 }}>K</span>
          <span style={{ "--i": 6 }}>O</span>
          <span style={{ "--i": 7 }}>U</span>
          <span style={{ "--i": 8 }}>T</span>
        </div>
      </section>
      <CheckoutDetails />
      <Footer />
    </div>
  );
}

export default CheckoutDetailsPage;
