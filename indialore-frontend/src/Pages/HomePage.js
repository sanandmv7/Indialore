import React from "react";

import Header from "../Components/Header/Header";
import Directory from "../Components/Directory/Directory";
import Footer from "../Components/Footer/Footer";

import upImg from "../assets/city/banaras.jpg";
import rajasthanImg from "../assets/city/rajasthan.jpg";
import karnatakaImg from "../assets/city/hydrabad.jpg";
import kashmirImg from "../assets/city/kashmir.jpg";
import keralaImg from "../assets/city/kerela.jpg";
import mhImg from "../assets/city/maharashtra.jpg";
import himachalImg from "../assets/city/Shimla.jpg";
import biharImg from "../assets/city/bihar.jpg";

import "./HomePage.css";

function HomePage(props) {
  const categories = [
    {
      id: 1,
      categoryName: "UTTAR PRADESH",
      imageUrl: upImg,
    },
    {
      id: 2,
      categoryName: "RAJASTHAN",
      imageUrl: rajasthanImg,
    },
    {
      id: 3,
      categoryName: "KARNATAKA",
      imageUrl: karnatakaImg,
    },
    {
      id: 4,
      categoryName: "KASHMIR",
      imageUrl: kashmirImg,
    },
    {
      id: 5,
      categoryName: "KERALA",
      imageUrl: keralaImg,
    },
    {
      id: 6,
      categoryName: "MAHARASHTRA",
      imageUrl: mhImg,
    },
    {
      id: 7,
      categoryName: "HIMACHAL",
      imageUrl: himachalImg,
    },
    {
      id: 8,
      categoryName: "BIHAR",
      imageUrl: biharImg,
    },
  ];

  return (
    <div className="homePageContainer">
      <Header />
      <section className="explore-by-state-section">
        <div className="waviy">
          <span style={{'--i': 1}}>E</span>
          <span style={{'--i': 2}}>X</span>
          <span style={{'--i': 3}}>P</span>
          <span style={{'--i': 4}}>L</span>
          <span style={{'--i': 5}}>O</span>
          <span style={{'--i': 6}}>R</span>
          <span style={{'--i': 7}}>E</span>
          <span style={{'--i': 8}}>&nbsp;</span>
          <span style={{'--i': 9}}>B</span>
          <span style={{'--i': 10}}>Y</span>
          <span style={{'--i': 11}}>&nbsp;</span>
          <span style={{'--i': 12}}>S</span>
          <span style={{'--i': 13}}>T</span>
          <span style={{'--i': 14}}>A</span>
          <span style={{'--i': 15}}>T</span>
          <span style={{'--i': 16}}>E</span>
        </div>
      </section>
      <section class="flip-section">
      <Directory categories={categories} />
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
