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
      </form>
    </div>
  );
}

export default SignUp;
