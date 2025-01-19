import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Profile Explorer</h1>
      <p>Explore profiles and their geographic locations interactively!</p>
      <Link to="/profiles">
        <button className="explore-button">Explore Profiles</button>
      </Link>
    </div>
  );
};

export default Home;
