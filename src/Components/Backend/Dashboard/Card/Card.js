import React from "react";
import star from "./../../../../images/Icon/star_1_.png";
import "./card.css";

const Card = (props) => {
  const { id, image, title, subTitle, rating, price, capacity } = props.product;
  return (
    <div className="room-card">
      <div className="product-card-flex">
        <div className="card-image">
          <img src={image} alt="image" className="card-img" />
        </div>
        <div className="card-info">
          <h3 className="title">{title}</h3>
          <div className="card-capacity-flex">
            <p>{capacity.guests} guests</p>
            <p>{capacity.bedrooms} bedrooms</p>
            <p>{capacity.beds} beds</p>
            <p>{capacity.baths} baths</p>
          </div>
          <p className="card-sub-title">{subTitle}</p>
          <p className="card-cancel">{subTitle}</p>
          <div className="card-pricing-flex">
            <p className="rating">
              <img className="card-rating-star" src={star} alt="" />{" "}
              {rating.rate}({rating.number})
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>${price}</span>/night
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
