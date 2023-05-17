import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/Melanated-Diamonds.png";
// import Login from "../assets/login.png";
import { signOut } from "firebase/auth";
import auth from "../base";

import Button from "react-bootstrap/Button";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar } from "react-bootstrap";
// import hero from "../assets/Melanated-Diamonds.png"
import hero from "../assets/image.png";
// import diamonds from "../assets/edgar-soto-gb0BZGae1Nk-unsplash.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
  // console.log(currentUser)
  // console.log(auth)
  return (
    // <div className="Nav">
    //   <h1>
    //     <Link to="/">
    //       <img
    //         src={Logo}
    //         alt="Logo"
    //         className="Logo"
    //         width="200"
    //         height="200"
    //       />
    //     </Link>
    //   </h1>
    //   <div className="nav-btns">
    //     <button className="nav-btn">
    //       <Link to="/" className="nav-link">
    //         Home
    //       </Link>
    //     </button>
    //     <button className="">
    //       <Link to="/get-started" className="">
    //         <img src={Login} alt="Login" />
    //       </Link>
    //     </button>
    //     <button className="nav-btn">
    //       <Link to="/resources" className="nav-link">
    //         Resources
    //       </Link>
    //     </button>
    //     <button onClick={async () => await signOut(auth)}>Sign Out</button>
    //   </div>
    // </div>

    <nav>
      <div>
        <header>
          <img src="https://www.woodbridgejewelry.com/wp-content/uploads/2019/05/Diamonds-Banner.jpg" alt="n/a"/>
        </header>
      </div>

      <Navbar className="navbar">
        <Navbar.Brand>
          <Link to="/">
            <img className="hero" src={hero} alt="hero" />
          </Link>
        </Navbar.Brand>
        <div className="slogan">
        <h5 >
          Embrace the Power of Melanin</h5>
          {/* <hr /> */}
          {/* <h5>_____________</h5> */}
        <h5 className="slogan-2"> Shop, Connect, Thrive!
        </h5>
        </div>
        
        <form className="d-flex home-form" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Businesses"
            aria-label="Search"
          />
          <i className="fa-solid fa-magnifying-glass-location"></i>

          {/* <Button variant="secondary" size="sm">
            Search
          </Button> */}
        </form>
        <Button variant="light">
          <Link to="/index" className="nav-link">View Businesses</Link>
        </Button>
        <Button variant="light">
          <Link to="/resources" className="nav-link">View Resources</Link>
        </Button>
        <Button variant="light">
          <Link to="/profile" className="nav-link">View Profile</Link>
        </Button>
        {!auth.currentUser ? (
          <Button variant="light">
            <Link to="/get-started">Create An Account / Login</Link>
          </Button>
        ) : (
          <Button variant="dark" onClick={async () => await signOut(auth)}>Sign Out</Button>
        )}
      </Navbar>
    </nav>
  );
};

export default Nav;
