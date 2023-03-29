import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

// import "./Directory.css";

function Directory({ categories }) {
  return (
      <div
        className="flip-container"
      >
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
  );
}

export default Directory;
