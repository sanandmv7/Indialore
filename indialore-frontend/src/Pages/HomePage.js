import React from "react";

import Header from "../Components/Header/Header";
import Directory from "../Components/Directory/Directory";

import "./HomePage.css";

function HomePage(props) {
  const categories = [
    {
      id: 1,
      categoryName: "UTTAR PRADESH",
      cityName: "VARANASI",
      cityDescription:
        "Banaras is older than history, older than tradition, older than even legend <b>and looks twice as old as <br>all of them put together.</b><br>-Mark Twain",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680092858/banaras_t093hz.jpg",
    },
    {
      id: 2,
      categoryName: "RAJASTHAN",
      cityName: "JAIPUR",
      cityDescription:
        "Jaipur is a city of vibrant colors, magnificent palaces, and rich cultural heritage that truly captures the essence of Rajasthan.",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094497/rajasthan_xep4fp.jpg",
    },
    {
      id: 3,
      categoryName: "KARNATAKA",
      cityName: "MYSURU",
      cityDescription:
        "Mysuru is a city of royal splendor and cultural richness, where history and modernity coexist in perfect harmony.",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094474/hydrabad_s2lzpf.jpg",
    },
    {
      id: 4,
      categoryName: "KASHMIR",
      cityName: "SRINAGAR",
      cityDescription:
        "Srinagar, the crown jewel of Kashmir, where the waters are pristine, the air is pure, and the mountains are majestic - a paradise on earth.",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094492/kashmir_oovdxl.jpg",
    },
    {
      id: 5,
      categoryName: "KERALA",
      cityName: "KOCHI",
      cityDescription:
        "Kochi, a city that embraces its past and future with equal fervor, where ancient history and modernity blend seamlessly to create a unique cultural experience.",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094494/kerela_h63sps.jpg",
    },
    {
      id: 6,
      categoryName: "MAHARASHTRA",
      cityName: "PUNE",
      cityDescription:
        "Pune, the cultural capital of Maharashtra, where the past and present converge to create a city that is both vibrant and serene, modern and traditional.",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094496/maharashtra_ocnohd.jpg",
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
