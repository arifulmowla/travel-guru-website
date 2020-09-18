import React, { useContext } from "react";
import logo from "../../../images/Logo.png";
import "./whiteheader.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { Navbar } from "react-bootstrap";

const HeaderWhite = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="white-header container">
      <Navbar className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="logo" />
          </Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                News <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Destination
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            {!loggedInUser.isAuthenticated && (
              <li className="nav-item">
                <Link to="/login">
                  <button className="btn-color nav-btn">Login</button>
                </Link>
              </li>
            )}
            {loggedInUser.isAuthenticated && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {loggedInUser.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </div>
              </li>
            )}
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderWhite;
