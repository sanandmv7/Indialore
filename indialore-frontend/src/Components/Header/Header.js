import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../contexts/UserContext";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
import { SearchContext } from "../../contexts/SearchContext";
import DashboardIcon from '@mui/icons-material/Dashboard';

import "./Header.css";

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const { isCartOpen, resetCart } = useContext(CartContext);
  const { searchString, setSearchString } = useContext(SearchContext);
  

  const handleLogOut = () => {
    resetCart();
    firebase.auth().signOut();
    history.push("/");
  };

  const handleSearchStringChange = (e)=>{
    setSearchString(e.target.value);
  };

  const handleSearch = () => {
    history.push("/search");
  };

  const handleDashboard = () => {
    history.push("/dashboard");
  }

  return (
    <Fragment>
      <section id="header">
        <div id="logo" class="logo">
          {/* <img src={logo} alt="logo" /> */}
          <h4>
            INDIA<span className="danger">LORE</span>
          </h4>
        </div>

        <div id="searchbar">
          <input type="text" placeholder="search..." value={searchString} onChange={handleSearchStringChange} />
          <button class="normal-button" onClick={handleSearch}>Search</button>
        </div>

        <div>
          <ul id="navbar">
            <Link className="link active" to="/">
              <span className="a">Home</span>
            </Link>
            <Link className="link" to="/shop">
              <span className="a">Shop</span>
            </Link>
            <Link className="link" to="/about">
              <span className="a">About Us</span>
            </Link>
            {user ? (
              <span>
                <span className="link" onClick={handleLogOut}>
                  <span className="a">Logout</span>
                </span>
              </span>
            ) : (
              <Link className="link" to="/login">
                <span className="a">Login</span>
              </Link>
            )}
            {user && <CartIcon className="link" />}
            {user && <DashboardIcon onClick={handleDashboard} className="dash" />}
          </ul>
          {isCartOpen && <CartDropdown />}
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
