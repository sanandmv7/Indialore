import React from "react";

import Header from "../Components/Header/Header";
import Directory from "../Components/Directory/Directory";

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
      <section class="explore-by-state-section">
        <div class="waviy">EXPLORE BY STATE</div>
      </section>
      <div className='test-container'>
      <Directory categories={categories} />
      </div>
    </div>
  );
}

export default HomePage;
