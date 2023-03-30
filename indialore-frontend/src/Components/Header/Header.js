import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../contexts/Context";

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
        <img src="../assets/logo.png" class="logo" alt="" />

        <div>
          <ul id="navbar">
            <Link className="link active" to="/">
              Home
            </Link>
            <Link className="link" to="/shop">
              Shop
            </Link>
            <Link className="link" to="/about">
              About Us
            </Link>
            {user ? (
              <span>
                <span className="link" onClick={handleLogOut}>
                  Logout
                </span>
                <Link className="link fa-duotone fa-cart-shopping" to="/cart">
                  Cart
                </Link>
              </span>
            ) : (
              <Link className="link" to="/login">
                Login
              </Link>
            )}
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default Header;
