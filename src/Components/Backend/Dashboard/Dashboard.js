import React from "react";
import { RoomData } from "../../../FakeData/Fakedata";
import HeaderWhite from "../HederWhite/HeaderWhite";
import Card from "./Card/Card";
import "./dashboard.css";

import GoogleMapReact from "google-map-react";

const Dashboard = () => {
  return (
    <>
      <HeaderWhite></HeaderWhite>
      <div className="dashboard container">
        <div className="row">
          <div className="col-md-6">
            <p>252 stays Apr 13-17 3 guests</p>
            <h2>Stay in Cox's Bazar</h2>
            <div className="cards">
              {RoomData.map((item) => (
                <Card product={item} key={item.id}></Card>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBqwgfeAvqxdzo3v0JdUQtOUlPJYYSr63o",
              }}
              defaultCenter={{ lat: 59.95, lng: 30.33 }}
              defaultZoom={11}
            ></GoogleMapReact>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
