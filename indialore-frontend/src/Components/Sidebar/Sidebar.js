import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import MessageSharpIcon from "@mui/icons-material/MessageSharp";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";

import "./Sidebar.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CartContext } from "../../contexts/CartContext";
import { FirebaseContext } from "../../contexts/UserContext";
import { Web3Context } from "../../contexts/Web3Context";

function Sidebar() {
  const history = useHistory();
  const { resetCart } = useContext(CartContext);
  const { firebase } = useContext(FirebaseContext);
  const { setCurrentAccount } = useContext(Web3Context);

  useEffect(() => {
    async function connectWallet() {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please install Metamask!");
      }

      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Account found! Address: ", accounts[0]);
        setCurrentAccount(accounts[0]);
      } catch (err) {
        console.log(err);
      }
    }

    connectWallet();
  });

  const handleLogOut = () => {
    resetCart();
    firebase.auth().signOut();
    history.push("/");
  };

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
        <Link to="/orders">
          <span>
            <ReceiptLongSharpIcon />
          </span>
          <h3>Orders</h3>
        </Link>
        <Link to="/messages">
          <span>
            <MessageSharpIcon />
          </span>
          <h3>Messages</h3>
          <span className="message-count">10</span>
        </Link>
        <div onClick={handleLogOut}>
          <Link>
            <span>
              <LogoutSharpIcon />
            </span>
            <h3>Logout</h3>
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
