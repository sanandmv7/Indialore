import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import shopping_cart from "../../assets/shopping_cart.svg";

function ProductCard({ product }) {
  const { img_url, name, price, state } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="pro">
      <img src={img_url} alt="" />
      <div className="desc">
        <span>{state}</span>
        <h5>{name}</h5>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h4>{`Rs.${price}`}</h4>
      </div>
      <span className="a">
        <span className="material-icons-sharp cart" onClick={addProductToCart}>
          <img src={shopping_cart} alt="shopping_cart" />
        </span>
      </span>
    </div>
  );
}

export default ProductCard;
