import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./ProductPage.css";
import ProductDetails from "../Components/ProductDetails/ProductDetails";

function ProductPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
