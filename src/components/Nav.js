import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Melanated-Diamonds.png";
import Login from "../assets/login.png";

const Nav = () => {
  return (
    <div className="Nav">
      <h1>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="Logo"
            width="200"
            height="200"
          />
        </Link>
      </h1>
      <div className="nav-btns">
        <button className="nav-btn">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </button>
        <button className="">
          <Link to="/get-started" className="">
            <img src={Login} alt="Login" />
          </Link>
        </button>
        {/* <button className="nav-btn">
          <Link to="/survey" className="nav-link">
            Survey
          </Link>
        </button>
        <button className="nav-btn">
          <Link to="/facts" className="nav-link">
            Facts
          </Link>
        </button> */}
        <button className="nav-btn">
          <Link to="/resources" className="nav-link">
            Resources
          </Link>
        </button> 
      </div>
    </div>
  );
};

export default Nav;
