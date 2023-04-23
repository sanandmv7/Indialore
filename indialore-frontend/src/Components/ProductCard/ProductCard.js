import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { PostContext } from "../../contexts/PostContext";
import { useHistory } from "react-router-dom";

import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

function ProductCard({ product }) {
  const { img_url, name, price, state } = product;
  const { addItemToCart } = useContext(CartContext);
  const { setProductDetails } = useContext(PostContext);
  const history = useHistory();

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="pro">
      <div
        onClick={() => {
          setProductDetails(product);
          history.push("/view");
        }}
      >
        <img src={img_url} alt="" height="450" />
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
      </div>
      <span className="a">
        <span className="material-icons-sharp cart" onClick={addProductToCart}>
          <ShoppingCartSharpIcon />
        </span>
      </span>
    </div>
  );
}

export default ProductCard;
