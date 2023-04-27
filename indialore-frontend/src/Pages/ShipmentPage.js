import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function ShipmentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
            <div class="matter-head">
                <h2> Shipment</h2>
            </div>
            <div class="matter-content">
                <p>India-wide Shipping Average time: 5-7 days after the order confirmation.</p>
                <p><strong>SHIPPING POLICY</strong></p>
                <p>Any product bought from https://indialore.com, will be shipped to the customer maximum within 5 to 7 days. In case of any exceptions, due to non-availability of a certain product, we will inform the customer through the email id provided in the customer registration form.</p>
                <p>Your order may be processed in multiple shipments, in which case you will be notified of the tracking number when each shipment occurs.</p>
                <p>Any COD orders, if available, will be charged extra @ INR 100 Flat.</p>
                <p><strong>RETURN/EXHANGE POLICY</strong></p>
                <p>IndiaLore has a flat 7 days return policy to all our customers. You can conveniently return or exchange any item within 7 days from the date of receipt of the product.</p>
                <p>To initiate return or exchange, mail us at contact@indialore.com</p>
                <p></p>
            </div>
        </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ShipmentPage;
