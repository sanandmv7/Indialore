import React, { useState } from "react";
import Login from "../Components/Login/Login";
import Signup from "../Components/SignUp/SignUp";
import "./LoginPage.css";
import image0png from "../assets/image0.png";
import image0jpg from "../assets/image0.jpeg";

function LoginPage() {
  const [activeForm, setActiveForm] = useState("login");

  const toggleForm = () => {
    setActiveForm(activeForm === "login" ? "signup" : "login");
  };

  return (
    <div className="loginpage-container">
      <div className="wrapper">
        <div className="title-text">
          <div className="title_login">
            <a href="../html/index.html">
              <img
                src={image0png}
                alt="IndiaLore"
                width="50%"
                onMouseOver={(e) => (e.target.src = image0jpg)}
                onMouseOut={(e) => (e.target.src = image0png)}
              />
            </a>
          </div>
          <div className="title_signup"></div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slider"
              id="login"
              checked={activeForm === "login"}
              onChange={() => setActiveForm("login")}
            />
            <input
              type="radio"
              name="slider"
              id="signup"
              checked={activeForm === "signup"}
              onChange={() => setActiveForm("signup")}
            />
            <label htmlFor="login" className="slide login">
              Login
            </label>
            <label htmlFor="signup" className="slide signup">
              Signup
            </label>
            <div className="slide-tab"></div>
          </div>
          <div className="form-inner">
            {activeForm === "login" ? <Login /> : <Signup />}
            <div className="signup-link">
              {activeForm === "login" ? (
                <>
                  Not a member yet?
                  <a href="/login" onClick={toggleForm}>
                    Signup Now
                  </a>
                </>
              ) : (
                <>
                  Already have an account?
                  <a href="/login" onClick={toggleForm}>
                    Login Now
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
