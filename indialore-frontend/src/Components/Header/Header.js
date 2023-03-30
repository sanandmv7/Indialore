import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../contexts/UserContext";

import "./Header.css";

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleLogOut = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  return (
    <Fragment>
      <section id="header">

        <div id = "logo" class="logo">
                {/* <img src={logo} alt="logo" /> */}
                <h4>INDIA<span className="danger">LORE</span></h4>
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
                <Link className="link fa-duotone fa-cart-shopping" to="/cart">
                  <span className="a">Cart</span>
                </Link>
              </span>
            ) : (
              <Link className="link" to="/login">
                <span className="a">Login</span>
              </Link>
            )}
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
