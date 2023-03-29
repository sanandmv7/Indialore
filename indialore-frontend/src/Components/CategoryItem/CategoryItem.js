import React from "react";

// import './CategoryItem.css';

function CategoryItem({ category }) {
  const { categoryName, imageUrl} = category;
  return (
    <div className="flipper">
      <div className="front">
        <img src={imageUrl} className="city" alt="cityImage" />
        <span className="name">{categoryName}</span>
        <button type="button" onClick={()=>{}} className="explore-button">
          <span>EXPLORE</span>
        </button>
      </div>
    </div>
  );
}

export default CategoryItem;
