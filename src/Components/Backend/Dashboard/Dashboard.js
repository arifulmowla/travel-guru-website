import React from "react";
import { RoomData } from "../../../FakeData/Fakedata";
import HeaderWhite from "../HederWhite/HeaderWhite";
import Card from "./Card/Card";
import "./dashboard.css";

const Dashboard = () => {
  //const placeslist = placesList;
  const roomsdata = RoomData;
  console.log(RoomData);
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
                <Card product={item}></Card>
              ))}
            </div>
          </div>
          <div className="col-md-6">map</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
