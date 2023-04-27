import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

import "./styles.css";
import { Web3Context } from "../contexts/Web3Context";
import { PaymentContext } from "../contexts/PaymentContext";

import env from "react-dotenv";

import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const IPTContract = require("../artifacts/contracts/IndialorePaymentToken.sol/IndialorePaymentToken.json");
const StoreContract = require("../artifacts/contracts/Store.sol/Store.json");
const IPTContractAbi = IPTContract.abi;
const StoreContractAbi = StoreContract.abi;

function MintingPage() {
  const { currentAccount } = useContext(Web3Context);
  const { paymentId, paymentAmount } = useContext(PaymentContext);
  const history = useHistory();

  const [minted, setMinted] = useState(false);
  const [tokensApproved, setTokensApproved] = useState(false);
  const [txnSent, setTxnSent] = useState(false);
  const { ethers } = require("ethers");

  useEffect(() => {
    async function purchaseProduct() {
      try {
        const { ethereum } = window;

        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const storeContract = new ethers.Contract(
            env.STORE_ADDRESS,
            StoreContractAbi,
            signer
          );

          let txn = await storeContract.purchaseProduct(0, 1);
          await txn.wait(2);
        } else {
          console.log("Ethereum object doesn't exist");
        }
      } catch (err) {
        console.log(err);
      }
      setTxnSent(true);

      setTimeout(() => {
        history.push("/thankyou");
      }, 3000);
    }

    async function approveTokens() {
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

          let txn = await iptContract.approve(
            env.ESCROW_ADDRESS,
            ethers.utils.parseEther(paymentAmount)
          );
          await txn.wait(2);
        } else {
          console.log("Ethereum object doesn't exist");
        }
      } catch (err) {
        console.log(err);
      }
      setTokensApproved(true);
      purchaseProduct();
    }

    async function mintTokens() {
      const data = {
        razorpayPaymentId: paymentId,
        to: currentAccount,
        amount: paymentAmount,
      };

      await axios.post(
        `http://${document.location.hostname}:5000/payment/mint`,
        data
      );
      setMinted(true);
      approveTokens();
    }

    window.scrollTo(0, 0);

    mintTokens();
  }, [
    currentAccount,
    paymentId,
    paymentAmount,
    history,
    ethers.providers.Web3Provider,
    ethers.Contract,
    ethers.utils,
  ]);

  return (
    <div>
      <Header />
      <section id="matter" class="section-p1 section-m1">
        <div class="matter-head">
          <h2>Please wait while we process your order... </h2>
        </div>
        <div class="matter-content">
          <p>1. Minting Tokens {minted ? "✔" : "..."}</p>
        </div>
        {minted ? (
          <div class="matter-content">
            <p>2. Approve Tokens {tokensApproved ? "✔" : "..."}</p>
          </div>
        ) : (
          ""
        )}
        {minted && tokensApproved ? (
          <div class="matter-content">
            <p>3. Send Transaction {txnSent ? "✔" : "..."}</p>
          </div>
        ) : (
          ""
        )}
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default MintingPage;
