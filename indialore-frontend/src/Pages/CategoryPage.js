import React, { useContext, useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import ProductCard from "../Components/ProductCard/ProductCard";
import { ProductsContext } from "../contexts/ProductContext";

import "./ShopPage.css";
import { CategoryContext } from "../contexts/CategoryContext";

function CategoryPage() {
  const { products } = useContext(ProductsContext);
  const { selectedCategory } = useContext(CategoryContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <section className="explore-by-state-section">
        <div className="waviy">
          <span style={{ "--i": 1 }}>S</span>
          <span style={{ "--i": 2 }}>H</span>
          <span style={{ "--i": 3 }}>O</span>
          <span style={{ "--i": 4 }}>P</span>
          <span style={{ "--i": 5 }}>&nbsp;</span>
          <span style={{ "--i": 6 }}>F</span>
          <span style={{ "--i": 7 }}>R</span>
          <span style={{ "--i": 8 }}>O</span>
          <span style={{ "--i": 9 }}>M</span>
          <span style={{ "--i": 10 }}>&nbsp;</span>
          <span style={{ "--i": 11 }}>I</span>
          <span style={{ "--i": 12 }}>N</span>
          <span style={{ "--i": 13 }}>D</span>
          <span style={{ "--i": 14 }}>I</span>
          <span style={{ "--i": 15 }}>A</span>
        </div>
      </section>
      <section id="product1" className="section-p1">
        <h2>{selectedCategory}</h2>
        <p>IndiaLore Collection</p>
        <div className="product-container">
          {products
            .filter((product) => {
              // console.log(`name: ${product.name}`)
              // console.log(`selected: ${selectedCategory}`)
              try {
                return product.state
                  .toLowerCase()
                  .includes(selectedCategory.toLowerCase());
              } catch (e) {
                console.log(e);
                return false;
              }
            })
            .map((fp) => (
              <ProductCard key={fp.id} product={fp} />
            ))}
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default CategoryPage;
