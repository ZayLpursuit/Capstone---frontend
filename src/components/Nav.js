import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Melanated-Diamonds.png";
// import Login from "../assets/login.png";
// import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Nav = () => {
  return (
    <div className="Nav">
      <h1>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="Logo"
            width="180"
            height="180"
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
          <Link to="/get-started">
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-arc" beatFade size="2xl" style={{color: "#e6ce33"}} /> */}
          {/* <FontAwesomeIcon icon={faArrowRight} beatFade size="2xl" style={{color: "#e6ce33"}} /> */}
          {/* <i className="fa-solid fa-arrow-right-to-arc fa-beat-fade fa-lg" style={{color: "#e6ce33"}}></i> */}
          {/* // <FontAwesomeIcon icon={faArrowRightToArc} beatFade size="sm" style={{color: "#e6ce33",}} /> */}
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
        </button>
        <button className="nav-btn">
          <Link to="/resources" className="nav-link">
            Resources
          </Link>
        </button> */}
      </div>
    </div>
  );
};

export default Nav;
