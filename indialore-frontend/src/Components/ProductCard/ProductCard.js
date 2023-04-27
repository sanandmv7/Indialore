import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { PostContext } from "../../contexts/PostContext";
import { useHistory } from "react-router-dom";

import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../../contexts/UserContext";
import { WishlistContext } from "../../contexts/WishlistContext";

function ProductCard({ product }) {
  const { img_url, name, price, state } = product;
  const { addItemToCart } = useContext(CartContext);
  const { addItemToWishlist, removeItemFromWishlist } = useContext(WishlistContext);
  const { setProductDetails } = useContext(PostContext);
  const history = useHistory();
  const [ wishClicked, setWishClicked ] = useState(false);
  const { user } = useContext(AuthContext);

  const addProductToCart = () => {
    if(user) {
      addItemToCart(product); 
    } else {
      alert("Please login/signup first");
    }
  }

  const addProductToWishlist = () => {
    if(!wishClicked){
      addItemToWishlist(product);
    } else {
      removeItemFromWishlist(product);
    }
    setWishClicked(!wishClicked);
  };

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
        <span
          className="material-icons-sharp wish"
          onClick={addProductToWishlist}
        >
          {wishClicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </span>
      </span>
      <span className="a">
        <span className="material-icons-sharp cart" onClick={addProductToCart}>
          <ShoppingCartSharpIcon />
        </span>
      </span>
    </div>
  );
}

export default ProductCard;
