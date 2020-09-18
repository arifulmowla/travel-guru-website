import React, { useContext } from "react";
import HeaderWhite from "../HederWhite/HeaderWhite";
import "./login.css";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../../firebase.config";
import { UserContext } from "../../../App";

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const onSubmit = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        const { displayName, email } = result.user;
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
        // ...
        console.log(errorCode);
        console.log(errorMessage);
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
        console.log(user);
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
      <div className="login">
        <h3 className="form-heading">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Username or Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Password"
            />
          </div>

          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember-me"
              />
              <label className="form-check-label" htmlFor="remember-me">
                Remember me
              </label>
            </div>
            <div>
              <a href="#">Forget password</a>
            </div>
          </div>
          <button type="submit" className="btn-color btn-full btn-submit">
            Submit
          </button>
        </form>
        <div className="have-account text-center">
          <p>
            Don't have an account <Link to="register">Create an account</Link>
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

export default Login;
