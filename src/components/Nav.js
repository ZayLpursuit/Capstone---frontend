import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/Melanated-Diamonds.png";
// import Login from "../assets/login.png";
import { signOut } from "firebase/auth";
import auth from "../base";

import Button from "react-bootstrap/Button";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar } from "react-bootstrap";
// import hero from "../assets/Melanated-Diamonds.png"
import hero from "../assets/image.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import diamonds from "../assets/edgar-soto-gb0BZGae1Nk-unsplash.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = ({ currentUser }) => {
  // console.log(currentUser, "hi");

  // console.log(currentUser)
  // console.log(auth)

  const navigate = useNavigate();
  return (
    <nav>
      <div>
        <header>
          <img
            src="https://www.woodbridgejewelry.com/wp-content/uploads/2019/05/Diamonds-Banner.jpg"
            alt="n/a"/>
        </header>
      </div>

      <Navbar className="navbar">
        <Navbar.Brand>
          <Link to="/">
            <img className="hero" src={hero} alt="hero" />
          </Link>
        </Navbar.Brand>
        <div className="slogan">
          <h5>Embrace the Power of Melanin</h5>
          <h5 className="slogan-2"> Shop, Connect, Thrive!</h5>
        </div>

        {!auth.currentUser ? (
          <Button variant="light" className="account">
            <Link to="/get-started" className="nav-link">
              Create An Account / Login
            </Link>
          </Button>
        ) : (
          <>
            <Button variant="light">
              <Link to="/businesses" className="nav-link">
                Browse Businesses
              </Link>
            </Button>
            <Button variant="light">
              <Link to="/resources" className="nav-link">
                Browse Resources
              </Link>
            </Button>
            <Button variant="light">
              <Link to="/profile" className="nav-link">
                User Profile
              </Link>
            </Button>
            <Button
              variant="dark"
              onClick={async () => {
                navigate("/");
                await signOut(auth);
              }}
            >
              Sign Out
              </Button>
          </>
        )}
        <AccountCircleIcon />
      </Navbar>
    </nav>
  );
};

export default Nav;
