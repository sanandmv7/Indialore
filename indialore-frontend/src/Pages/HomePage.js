import React from "react";

import Header from "../Components/Header/Header";
import Directory from "../Components/Directory/Directory";

import "./HomePage.css";

function HomePage(props) {
  const categories = [
    {
      id: 1,
      categoryName: "UTTAR PRADESH",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680092858/banaras_t093hz.jpg",
    },
    {
      id: 2,
      categoryName: "RAJASTHAN",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094497/rajasthan_xep4fp.jpg",
    },
    {
      id: 3,
      categoryName: "KARNATAKA",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094474/hydrabad_s2lzpf.jpg",
    },
    {
      id: 4,
      categoryName: "KASHMIR",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094492/kashmir_oovdxl.jpg",
    },
    {
      id: 5,
      categoryName: "KERALA",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094494/kerela_h63sps.jpg",
    },
    {
      id: 6,
      categoryName: "MAHARASHTRA",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680094496/maharashtra_ocnohd.jpg",
    },
    {
      id: 7,
      categoryName: "HIMACHAL",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680097152/Shimla_yabpmq.jpg",
    },
    {
      id: 8,
      categoryName: "BIHAR",
      imageUrl: "https://res.cloudinary.com/defrv9zuz/image/upload/v1680097149/bihar_nlalyf.jpg",
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
