import React from "react";

import { useContext, useEffect, useState } from "react";

import Header from "../Components/Header/Header";
import Directory from "../Components/Directory/Directory";
import Footer from "../Components/Footer/Footer";

import "./HomePage.css";
import Newsletter from "../Components/Newsletter/Newsletter";
import { FirebaseContext } from "../contexts/UserContext";

import { Web3Context } from "../contexts/Web3Context";

function HomePage(props) {
  const { firebase } = useContext(FirebaseContext);
  const [categories, setCategories] = useState([]);
  const { setCurrentAccount } = useContext(Web3Context);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    async function connectWallet() {
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
    }

    firebase
      .firestore()
      .collection("Category")
      .get()
      .then((snapshot) => {
        const allCats = snapshot.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(allCats);
      });

      connectWallet();
  }, [firebase, setCurrentAccount]);

  return (
    <div className="homePageContainer">
      <Header />
      <section className="explore-by-state-section">
        <div className="waviy">
          <span style={{ "--i": 1 }}>E</span>
          <span style={{ "--i": 2 }}>X</span>
          <span style={{ "--i": 3 }}>P</span>
          <span style={{ "--i": 4 }}>L</span>
          <span style={{ "--i": 5 }}>O</span>
          <span style={{ "--i": 6 }}>R</span>
          <span style={{ "--i": 7 }}>E</span>
          <span style={{ "--i": 8 }}>&nbsp;</span>
          <span style={{ "--i": 9 }}>B</span>
          <span style={{ "--i": 10 }}>Y</span>
          <span style={{ "--i": 11 }}>&nbsp;</span>
          <span style={{ "--i": 12 }}>S</span>
          <span style={{ "--i": 13 }}>T</span>
          <span style={{ "--i": 14 }}>A</span>
          <span style={{ "--i": 15 }}>T</span>
          <span style={{ "--i": 16 }}>E</span>
        </div>
      </section>
      <Directory categories={categories} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
