require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { ethers } = require("ethers");

const router = express.Router();
const contract = require("../artifacts/contracts/IndialorePaymentToken.sol/IndialorePaymentToken.json");

router.post("/orders", async (req, res) => {
  console.log("orders");
  const { amount } = req.body;
  // console.log(`cartTotal = ${cartTotal}`);

  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: amount * 100, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/success", async (req, res) => {
  console.log("success1");
  try {
    // getting the details back from our font-end
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    // Creating our own digest
    // The format should be like this:
    // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
    const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");

    // comaparing our digest with the actual signature
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    // THE PAYMENT IS LEGIT & VERIFIED
    // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT

    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
    console.log("success2");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/mint", async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // getting the details back from our font-end
    const { razorpayPaymentId, to, amount } = req.body;

    const paymentDetails = await instance.payments.fetch(razorpayPaymentId);
    // console.log(paymentDetails)
    // TODO: Also check if tokens are already issued

    if (paymentDetails["status"] === "captured") {
      console.log(`to: ${to}`);
      console.log(`amount: ${amount}`);

      // Provider
      const alchemyProvider = new ethers.AlchemyProvider(
        (network = "sepolia"),
        process.env.API_KEY
      );

      // Signer
      const signer = new ethers.Wallet(
        process.env.PRIVATE_KEY,
        alchemyProvider
      );

      // Contract
      const iptContract = new ethers.Contract(
        process.env.IPT_ADDRESS,
        contract.abi,
        alchemyProvider
      );

      const tx = await iptContract.connect(signer).mint(to, amount);
      await tx.wait(6);

      res.json({
        msg: "success",
        paymentId: razorpayPaymentId,
      });
    } else {
      return res.status(400).json({ msg: "Transaction not legit!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
