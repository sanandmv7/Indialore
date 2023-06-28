import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { CartContext } from "../../contexts/CartContext";

function ProductDetails() {
  const { productDetails } = useContext(PostContext);
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(productDetails);

  return (
    <section id="pro-details" className="section-p1">
      <div className="single-pro-image">
        <img src={productDetails.img_url} id="main-image" alt="" />
        {/* <div className="small-image-group">
          <div className="small-image-col">
            <img src="../assets/kalamkari.jpg" width="100%" className="small-image" alt="" />
          </div>
          <div className="small-image-col">
            <img src="../assets/kalamkari1_1.jpg" width="100%" className="small-image" alt="" />
          </div>
          <div className="small-image-col">
            <img src="../assets/kalamkari1_2.jpg" width="100%" className="small-image" alt="" />
          </div>
        </div> */}
      </div>

      <div className="single-pro-details">
        <h6>Home / {productDetails.state}</h6>
        <h4>{productDetails.name}</h4>
        <h2>Rs.{productDetails.price}</h2>
        {productDetails.quantity <= 0 ? (
          <h6 className="red">Sold Out!</h6>
        ) : productDetails.quantity < 10 ? (
          <h6 className="red">Hurry, only few items left!</h6>
        ) : (
          ""
        )}
        <select>
          <option>Select Size</option>
          <option>Free Size</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <input type="number" defaultValue={1} />
        <button className="normal-button" onClick={addProductToCart} disabled={productDetails.quantity <= 0}>
          Add to Cart
        </button>
        <h4>Product Details</h4>
        <span>{productDetails.description}</span>
      </div>
    </section>
  );
}

export default ProductDetails;
