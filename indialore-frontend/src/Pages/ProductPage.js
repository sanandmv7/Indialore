import React from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./ProductPage.css";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

function ProductPage() {
  return (
    <div>
      <Header />
      <ProductDetails />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
