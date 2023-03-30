import React from "react";

// import './SignUp.css';

function SignUp() {
  return (
    <div>
      <form action="#" className="signup">
        <div className="field">
          <input type="text" placeholder="Email address" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <div className="field">
          <input type="submit" value="Register" />
        </div>
        <div id="gSignInWrapper">
          <span class="label">Sign in with:</span>
          <div id="customBtn" class="customGPlusSignIn">
            <span class="icon1"></span>
            <span class="buttonText">Google</span>
          </div>
        </div>
        <div id="fbSignInWrapper">
          <span class="label">Sign in with:</span>
          <div id="customBtn" class="customFBSignIn">
            <span class="icon2"></span>
            <span class="buttonText">Facebook</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
