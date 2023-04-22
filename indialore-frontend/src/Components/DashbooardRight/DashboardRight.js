import React from "react";
import { useState } from "react";
import Update from "../Update/Update";

import ProductPopup from "../ProductPopup/ProductPopup";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";

import "./DashboardRight.css";

function DashboardRight() {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  const recents = [
    {
      id: 1,
      name: "Sumer",
      item: "Kolhapuri Chappal",
      time: "2 minutes",
    },
    {
      id: 2,
      name: "Sanand",
      item: "Chikankari Kurta",
      time: "3 minutes",
    },
  ];

  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn">
          <span>
            <MenuSharpIcon />
          </span>
        </button>
        <div className="profile">
          <div className="info">
            <p>
              Hello, <b>Seller</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <span>
              <PersonSharpIcon />
            </span>
          </div>
        </div>
      </div>
      {/*=================END OF TOP==========================*/}
      <div className="recent-updates">
        <h3>Recent Updates</h3>
        <div className="updates">
          {recents.map((recent) => (
            <Update key={recent.id} details={recent} />
          ))}
        </div>
      </div>
      {/*======================END OF RECENT UPDATES======================*/}
      <div className="add-btn">
        <div className="item_add-store">
          <span>
            <AddSharpIcon />
          </span>
          <h3>Add a Store</h3>
        </div>

        <div className="item_add-store" onClick={showModal}>
          <span>
            <AddSharpIcon />
          </span>
          <h3>Add a Product</h3>
        </div>
      </div>
      <ProductPopup show={isShowModal} handleClose={hideModal} />
      {/*===================END OF RIGHT BUTTON===========================*/}
    </div>
  );
}

export default DashboardRight;
