import React, { useContext, useState } from "react";
import HeaderWhite from "../HederWhite/HeaderWhite";
import "./register.css";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import * as firebase from "firebase/app";
import firebaseConfig from "../../../firebase.config";

import "firebase/auth";
import "firebase/firestore";
import { UserContext } from "../../../App";
firebase.initializeApp(firebaseConfig);

const Register = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  var history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();

  const [registerError, setRegisterError] = useState("");

  const onSubmit = (data) => {
    console.log(data);

    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        console.log("user", user);
        if (user) {
          user.user
            .updateProfile({
              displayName: "Ariful Mowla",
              photoURL:
                "https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-1024x941.png",
            })
            .then((s) => {
              console.log(s);
            });
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...

        setRegisterError(errorMessage);

        console.log("error", errorCode);
        console.log("msg", errorMessage);
      });
  };

  // facebook Register
  var provider = new firebase.auth.FacebookAuthProvider();
  const facebookRegister = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        const { displayName, email } = user;
        const signedInUser = {
          name: displayName,
          email,
          isAuthenticated: true,
        };
        setLoggedInUser(signedInUser);
        history.push("/dashboard");

        console.log(result.user);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  //Google Register
  var provider = new firebase.auth.GoogleAuthProvider();

  const googleRegister = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        const { displayName, email } = user;
        const signedInUser = {
          name: displayName,
          email,
          isAuthenticated: true,
        };
        setLoggedInUser(signedInUser);
        history.push("/dashboard");

        console.log(result.user);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  return (
    <>
      <HeaderWhite></HeaderWhite>

      <div className="register">
        <h3 className="form-heading">Register</h3>
        <span className="text-danger py-2">{registerError}</span>
        <br></br>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              ref={register({ required: true })}
              placeholder="First Name"
            />
            {errors.firstname && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Last Name"
            />
            {errors.lastname && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Username or Email"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              ref={register({ required: true, min: 6 })}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              className="form-control"
              ref={register({
                required: true,
                validate: (value) => value === watch("password"),
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmpassword && (
              <span className="text-danger">Password not matched!</span>
            )}
          </div>

          <button type="submit" className="btn-color btn-full btn-submit">
            Submit
          </button>
        </form>
        <div className="have-account text-center">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
        <p className="text-center">Or</p>

        <div className="login-buttons d-flex justify-content-between">
          <button className="btn-social-facebook" onClick={facebookRegister}>
            Continue with Facebook
          </button>
          <button className="btn-social-google" onClick={googleRegister}>
            Continue with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
