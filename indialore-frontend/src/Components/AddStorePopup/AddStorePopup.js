import React from "react";
import { useContext, useState } from "react";

import { Web3Context } from "../../contexts/Web3Context";

import env from "react-dotenv";

import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { FirebaseContext, AuthContext } from "../../contexts/UserContext";

const MarketplaceContract = require("../../artifacts/contracts/Marketplace.sol/IndialoreMarketplace.json");
const MarketplaceContractAbi = MarketplaceContract.abi;

function AddStorePopup({ handleClose, show }) {
  const { currentAccount } = useContext(Web3Context);
  const { ethers } = require("ethers");

  const showHideClassName = show ? "popup1 active" : "popup1";

  const [name, setName] = useState("");

  const [response, setResponse] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);

  const date = new Date();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  async function createStore() {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const marketplaceContract = new ethers.Contract(
          env.MARKETPLACE_ADDRESS,
          MarketplaceContractAbi,
          signer
        );

        // console.log(currentAccount);

        let res = await marketplaceContract.isSeller(currentAccount);
        // console.log(`result from contract: ${res}`)

        if (!res) {
          let tx = await marketplaceContract.registerSeller();
          tx.wait(2);
        }

        let txn = await marketplaceContract.createStore(name);
        txn.wait();

        let store = await marketplaceContract.sellerToStore(currentAccount);
        console.log(`store: ${store}`);
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch (err) {
      alert(err);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createStore();
    // firebase
    //   .firestore()
    //   .collection("Stores")
    //   .add({
    //     name: name,
    //     seller: user.uid,
    //     createdAt: date.toDateString(),
    //   })
    //   .then(() => {
    //     setResponse("Store added successfully");
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
        <h3>Store Details</h3>
        <div className="product-form-element">
          <label htmlFor="prod-name">Store Name</label>
          <input
            type="text"
            id="prod-name"
            placeholder="Enter Store Name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="product-form-element" onClick={handleSubmit}>
          <input type="submit" value="Submit" />
        </div>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default AddStorePopup;
