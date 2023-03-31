import React from "react";
import { Link } from "react-router-dom";

// import './CategoryItem.css';

function CategoryItem({ category }) {
  const { name, img_url} = category;
  return (
    <div className="flipper">
      <div className="front">
        <img src={img_url} className="city" alt="cityImage" />
        <span className="name">{name}</span>
        <Link to="/shop">
          <button type="button" className="explore-button">
            <span>EXPLORE</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
