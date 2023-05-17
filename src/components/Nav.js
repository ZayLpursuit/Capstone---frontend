import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Melanated-Diamonds.png";
import Login from "../assets/login.png";
import { signOut } from "firebase/auth";
import auth from "../base";



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
        <button className="nav-btn">
          <Link to="/resources" className="nav-link">
            Resources
          </Link>

        </button> 
        <button onClick={async ()=>await signOut(auth)}>Sign Out</button>

        </div> 

      </div>
    
  );
};

export default Nav;
