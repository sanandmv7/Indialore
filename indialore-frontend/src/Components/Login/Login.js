import React from "react";

// import './Login.css';

function Login() {
  return (
    <div>
      <form action="#" class="login">
        <div class="field">
          <input type="text" placeholder="Email address" required />
        </div>
        <div class="field">
          <input type="password" placeholder="Password" required />
        </div>
        <div class="pass-link">
          <a href="/">Forgot password?</a>
        </div>
        <div class="field">
          <input type="submit" value="Login" />
        </div>
        <div class="signup-link">
          Not a member yet?
          <a href="/signup">Signup Now</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
