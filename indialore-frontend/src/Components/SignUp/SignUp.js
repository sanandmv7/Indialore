import {React, useState, useContext} from "react";
import { FirebaseContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";

import './SignUp.css';
import { Web3Context } from "../../contexts/Web3Context";

function SignUp({ switchToLogin }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {firebase} = useContext(FirebaseContext);
  const {currentAccount} = useContext(Web3Context);

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
    // console.log("Submitting credentials");
    // console.log("Signup submitted with email: ", email, " and password: ", password);
    
    if(password === confirmPassword){
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        (result)=>{
          // console.log("Got result");
          firebase.firestore().collection('users').add({
            id: result.user.uid,
            email: email,
            wallet: currentAccount
          }).then(
            ()=>{
              // console.log("Pushing history");
              history.push('/');
            }
          ).catch((error)=>{
            alert(error.message);
          })
        }
      );
    } else {
      alert("Passwords doesn't match");
    }
  };

  return (
    <form className="signup">
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
      <ConnectWalletButton />
      <div className="field submit-btn" onClick={handleSubmit}>
        <input type="submit" value="Register" />
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
