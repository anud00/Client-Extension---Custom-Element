import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Tech Store </h1>
        <p>Lorem ipsum dolor sit amet </p>
        <Link to="/smartphone">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
