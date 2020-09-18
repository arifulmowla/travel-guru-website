import React from "react";
import { useHistory, useParams } from "react-router-dom";
import placesList from "../../../FakeData/Fakedata";
import Header from "../Header/Header";
import "./booking.css";
import { useForm } from "react-hook-form";

const Booking = () => {
  const { place } = useParams();
  const data = placesList;

  const selectedPlace = data.filter((places) => places.slug === place);

  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    history.push("/login");
  };
  return (
    <div className="booking">
      <div className="background-img">
        <Header></Header>
        <div className="booking-cards container">
          <div className="row">
            <div className="col-md-6">
              <div className="left">
                <h3>{selectedPlace[0].name}</h3>
                <p>
                  Cox's Bazar is a city, fishing port, tourism centre and
                  district headquarters in southeastern Bangladesh. It is famous
                  mostly for its long natural sandy beach, and it ...
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="booking-card">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <label htmlFor="origin">Origin</label>
                    <input
                      type="text"
                      className="form-control origin"
                      id="origin"
                      ref={register({ required: true })}
                      name="origin"
                    />
                    {errors.origin && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="origin">Destination</label>
                    <input
                      type="text"
                      className="form-control destination"
                      id="destination"
                      ref={register({ required: true })}
                      name="destination"
                    />
                    {errors.destination && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-group">
                      <label htmlFor="origin">From</label>
                      <input
                        type="date"
                        className="form-control origin"
                        id="origin"
                        ref={register({ required: true })}
                        name="from"
                      />
                      {errors.from && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="origin">To</label>
                      <input
                        type="date"
                        className="form-control origin"
                        id="origin"
                        ref={register({ required: true })}
                        name="to"
                      />
                      {errors.to && (
                        <span style={{ color: "red" }}>
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="btn-color btn-full" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
