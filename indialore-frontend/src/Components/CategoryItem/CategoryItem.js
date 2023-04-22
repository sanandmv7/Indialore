import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../../contexts/CategoryContext";

// import './CategoryItem.css';

function CategoryItem({ category }) {
  const { name, img_url} = category;

  const { setSelectedCategory } = useContext(CategoryContext);

  const history = useHistory();

  const handleExplore = () => {
    setSelectedCategory(name);
    history.push("/category");
  };

  return (
    <div className="flipper">
      <div className="front">
        <img src={img_url} className="city" alt="cityImage" />
        <span className="name">{name}</span>
          <button type="button" className="explore-button" onClick={handleExplore}>
            <span>EXPLORE</span>
          </button>
      </div>
    </div>
  );
}

export default CategoryItem;
