import { React, useContext } from "react";
import { Web3Context } from "../../contexts/Web3Context";
import "./ConnectWalletButton.css";

function ConnectWalletButton() {
  const { currentAccount, setCurrentAccount } = useContext(Web3Context);

  const connectWalletHandler = async (e) => {
    e.preventDefault();

    const { ethereum } = window;

    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Account found! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      id="walletButton"
      onClick={connectWalletHandler}
      className="connect_wallet_button"
    >
      {currentAccount ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
}

export default ConnectWalletButton;
