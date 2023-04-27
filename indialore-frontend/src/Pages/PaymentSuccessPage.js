import React, { useContext } from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import easyinvoice from "easyinvoice";

import "./styles.css";
import { OrderContext } from "../contexts/OrderContext";

function PaymentSuccessPage() {
  const { orderDetails } = useContext(OrderContext);

  const downloadInvoice = async (orderinfo) => {
    const data = {
      documentTitle: "INVOICE", //Defaults to INVOICE
      "images": {
        "logo": "https://firebasestorage.googleapis.com/v0/b/indialore-73305.appspot.com/o/meta%2Flogo-text.png?alt=media&token=88f0307b-c501-4321-9972-85b1246c9cd2"
      },
      sender: {
        company: "IndiaLore Corporate Office",
        address: "MNNIT ALLAHABAD",
        zip: "211004",
        city: "Prayagraj",
        country: "India",
      },
      client: {
        company: `${orderinfo.username}`,
        address: `${orderinfo.useremail}`,
        // zip: "",
        // city: `Check In: ${new Date(booking.checkInDate).toLocaleString(
        //   "en-US"
        // )}`,
        // country: `Check In: ${new Date(booking.checkOutDate).toLocaleString(
        //   "en-US"
        // )}`,
      },
      information: {
        number: "1234.0001",
        date: `${new Date(Date.now()).toLocaleDateString("en-US")}`,
        "due-date": "NIL"
      },
      invoiceNumber: `${orderinfo._id}`,
      invoiceDate: `${new Date(Date.now()).toLocaleString("en-US")}`,
      products: orderinfo.products.map((p) => {
        return {
          quantity: `${p.quantity}`,
          description: `${p.name}`,
          "tax-rate": 12,
          price: p.price,
        };
      }),
      bottomNotice: "Thank you for shopping with us.",
      "settings": {
        "currency": "INR",
        "tax-notation": "GST",
        "margin-top": 25,
        "margin-right": 25,
        "margin-left": 25,
        "margin-bottom": 25
      }
    };

    const result = await easyinvoice.createInvoice(data);
    easyinvoice.download(`invoice_${orderinfo._id}.pdf`, result.pdf);
  };

  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div class="matter-head">
          <h2>Order Placed </h2>
        </div>
        <div class="matter-content">
          <p>Thank you for your order.</p>
        </div>
        <div class="matter-content">
          <p>
          <button
            className="normal-button"
            onClick={() => downloadInvoice(orderDetails)}
          >
            <i className="fa fa-download"></i>&nbsp;
            Download Invoice 
          </button>
          </p>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default PaymentSuccessPage;
