import React from "react";
import { Carousel } from "react-bootstrap";
import "./hero.css";

import sundorBon from "../../../images/Image/sundorbon.png";
import coxbazar from "../../../images/Image/Sreemongol.png";
import sajek from "../../../images/Image/Sajek.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero container">
      <Carousel fade={true} indicators={true} controls={false}>
        <Carousel.Item interval={1000}>
          <div className="card-flex">
            <div className="left">
              <h3>COX'S BAZAR</h3>
              <p>
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach, and it ...
              </p>
              <Link to="/booking/cox-bazar">
                <button className="btn-color">Booking Now</button>
              </Link>
            </div>
            <div className="right">
              <img src={coxbazar} alt="" className="slide-img" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="card-flex">
            <div className="left">
              <h3>SUNDARBANS</h3>
              <p>
                The Sundarbans is a mangrove area in the delta formed by the
                confluence of the Ganges, Brahmaputra and Meghna Rivers in the
                Bay of Bengal. It spans from the Hooghly River in India's state
                of West Bengal to the Baleswar River in Bangladesh.
              </p>
              <Link to="/booking/sundarbans">
                <button className="btn-color">Booking Now</button>
              </Link>
            </div>
            <div className="right">
              <img src={sundorBon} alt="" className="slide-img" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="card-flex">
            <div className="left">
              <h3>SAJEK VALLEY</h3>
              <p>
                Sajek Valley is an emerging tourist spot in Bangladesh situated
                among the hills of the Kasalong range of mountains in Sajek
                union, Baghaichhari Upazila in Rangamati District. The valley is
                1,476 feet above sea level. Sajek valley is known as the Queen
                of Hills & Roof of Rangamati.
              </p>
              <Link to="/booking/sajek-valley">
                <button className="btn-color">Booking Now</button>
              </Link>
            </div>
            <div className="right">
              <img src={sajek} alt="" className="slide-img" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
