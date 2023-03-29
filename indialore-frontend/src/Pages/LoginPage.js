import React from "react";

import SignUp from "../Components/SignUp/SignUp";
import Login from "../Components/Login/Login";
import logo from "../assets/image0.png";

import "./LoginPage.css";

function LoginPage(props) {
  return (
    <div className="loginParentDiv">
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">
            <img src={logo} alt="IndiaLore" width="100%" />
          </div>
          <div className="title signup"></div>
        </div>

        <div className="form-container">
          <label htmlFor="login" className="slide login">
            {" "}
            Login
          </label>
        </div>
        <div className="form-inner">
          <Login />
        </div>
        <div className="form-inner">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
