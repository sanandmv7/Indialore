import React from "react";
import { Link } from "react-router-dom";

import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

import "./Sidebar.css";

function Sidebar() {
  return (
      <aside>
        <div class="top">
          <div class="logo">
            <h4>
              INDIA<span class="danger">LORE</span>
            </h4>
          </div>
          <div class="close" id="close-btn">
            <span class="material-icons-sharp">close</span>
          </div>
        </div>

        <div className="sidebar">
          <Link to="/dashboard" className="active">
            <span>
              <GridViewSharpIcon />
            </span>
            <h3>Dashboard</h3>
          </Link>
          <Link to="/store">
            <span>
              <StorefrontSharpIcon />
            </span>
            <h3>Store</h3>
          </Link>
          <Link to="/dashboard-products">
            <span>
              <CategorySharpIcon />
            </span>
            <h3>Products</h3>
          </Link>
          <Link to="/">
            <span>
              <ReceiptLongSharpIcon />
            </span>
            <h3>Orders</h3>
          </Link>
          <Link to="/">
            <span>
              <MessageSharpIcon />
            </span>
            <h3>Messages</h3>
            <span className="message-count">10</span>
          </Link>
          <Link to="/">
            <span>
              <LogoutSharpIcon />
            </span>
            <h3>Logout</h3>
          </Link>
        </div>
      </aside>
  );
}

export default Sidebar;
