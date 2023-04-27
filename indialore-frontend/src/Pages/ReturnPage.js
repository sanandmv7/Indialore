import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function ReturnPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
            <div class="matter-head">
                <h2> Returns & Exchanges </h2>
            </div>
            <div class="matter-content">
                <p>IndiaLore has a flat 7 days return policy to all our customers. You can conveniently return or exchange any item within 7 days from the date of delivery of the product.</p>
                <p>To initiate return or exchange, mail us at contact@indialore.com</p>
            </div>
        </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ReturnPage;
