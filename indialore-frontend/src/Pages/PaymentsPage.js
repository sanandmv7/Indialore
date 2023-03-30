import React from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";

function PaymentsPage() {
  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
            <div class="matter-head">
                <h2>Payments</h2>
            </div>
            <div class="matter-content">
                <p><strong>100% Secure Checkout UPI / Debit Card / Credit Card/ Net Banking</strong></p>
                <p>IndiaLore offers the following payment options: advance payment, payment by credit or debit card (Visa, Master Card, American Express). We reserve the right not to offer all payment options for all orders and will refer to current payment options. We only accept payment from accounts within India. You are responsible for any costs associated with your account transactions.</p>
                <p>By accepting these General Terms and Conditions, you are deemed to have given your consent to any invoices and credit invoices being sent exclusively to you in electronic form.</p>
            </div>
        </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default PaymentsPage;
