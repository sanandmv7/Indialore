import React, { useState } from "react";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";

import ProductPopup from "../ProductPopup/ProductPopup";

function ProductDashboardRight() {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  }

  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn">
          <span><MenuSharpIcon /></span>
        </button>
        <div className="profile">
          <div className="info">
            <p>
              Hello, <b>Seller</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <span><PersonSharpIcon /></span>
          </div>
        </div>
      </div>
      <div className="add-btn" onClick={showModal}>
        <div className="test-btn1">
          <span>
            <AddSharpIcon />
          </span>
          <h3>Add a Product</h3>
        </div>
      </div>
      <ProductPopup show={isShowModal} handleClose={hideModal}/>
    </div>
  );
}

export default ProductDashboardRight;
