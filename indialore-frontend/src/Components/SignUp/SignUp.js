import {React, useState} from "react";

// import './SignUp.css';

function SignUp({ switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted with email: ", email, " and password: ", password);
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <div className="field">
        <input type="text" placeholder="Email address" value={email} onChange={handleEmailChange} required />
      </div>
      <div className="field">
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div className="field">
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
      </div>
      {/* <div className="field">
        <input type="submit" value="Connect Wallet" required />
      </div> */}
      <div className="field">
        <input type="submit" value="Register" disabled />
      </div>
      <div className="signup-link">
        Already have an account?
        <a href="/login" onClick={switchToLogin}>
          Login Now
        </a>
      </div>
    </form>
  );
}

export default SignUp;
