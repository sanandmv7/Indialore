import React, { useState, useContext } from "react";
import { FirebaseContext } from '../../contexts/UserContext'
import { useHistory } from "react-router-dom";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";
// import './Login.css';

function Login({ switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Login submitted with email: ", email, " and password: ", password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      history.push('/');
    }).catch((error)=>{
      alert(error.message);
    })
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="field">
        <input type="text" placeholder="Email address" value={email} onChange={handleEmailChange} required />
      </div>
      <div className="field">
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div className="pass-link">
        <a href="/login">Forgot password?</a>
      </div>
      <ConnectWalletButton />
      <div className="field">
        <input type="submit" value="Login" />
      </div>
      <div className="signup-link">
        Not a member yet?
        <a href="/login" onClick={switchToSignup}>
          Signup Now
        </a>
      </div>
    </form>
  );
}

export default Login;
