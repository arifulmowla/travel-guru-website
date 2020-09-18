import React from "react";
import "./home.css";
import Header from "../Home/Header/Header";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="home">
      <div className="background-img">
        <Header></Header>

        <Hero></Hero>
      </div>
    </div>
  );
};

export default Home;
