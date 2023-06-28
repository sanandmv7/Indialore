import React from "react";
import { useContext, useState } from "react";

import { Web3Context } from "../../contexts/Web3Context";

import env from "react-dotenv";

import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { FirebaseContext, AuthContext } from "../../contexts/UserContext";

const IPTContract = require("../../artifacts/contracts/IndialorePaymentToken.sol/IndialorePaymentToken.json");
const IPTContractAbi = IPTContract.abi;

function ClaimPopup({ handleClose, show }) {
  const { currentAccount } = useContext(Web3Context);
  const { ethers } = require("ethers");

  const showHideClassName = show ? "popup1 active" : "popup1";

  const [amount, setAmount] = useState(0);

  const [response, setResponse] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const date = new Date();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  async function claim() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const iptContract = new ethers.Contract(
            env.IPT_ADDRESS,
            IPTContractAbi,
            signer
          );

          let txn = await iptContract.burn(
            amount
          );
          await txn.wait(2);
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (err) {
      alert(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    claim();
    // firebase
    //   .fireclaim()
    //   .collection("Claims")
    //   .add({
    //     name: name,
    //     seller: user.uid,
    //     createdAt: date.toDateString(),
    //   })
    //   .then(() => {
    //     setResponse("Claim added successfully");
    //     setName("");
    //     setTimeout(() => {
    //       setResponse("");
    //     }, 3000);
    //   });
  };

  return (
    <div className={showHideClassName}>
      <div className="close-btn" onClick={handleClose}>
        <span>
          <CloseSharpIcon />
        </span>
      </div>
      <div className="product-form">
      <h3>Claim Tokens</h3>
      <div className="product-form-element">
          <label htmlFor="prod-amount">Amount</label>
          <input
            type="number"
            id="prod-amount"
            placeholder="Enter Amount To Claim"
            value={ethers.utils.toWei(amount)}
            onChange={handleAmountChange}
          />
        </div>
        <div className="product-form-element" onClick={handleSubmit}>
          <input type="submit" value="Claim" />
        </div>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default ClaimPopup;
