import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/Melanated-Diamonds.png";
// import Login from "../assets/login.png";
// import { signOut } from "firebase/auth";
// import auth from "../base";

import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";

import hero from "../assets/hero.png";

// import hero from "../assets/image.png";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const Nav = ({ currentUser }) => {
  // console.log(currentUser, "hi");

  // console.log(currentUser)
  // console.log(auth)

  const navigate = useNavigate();
  return (
    <nav>
    
      <Navbar className="navbar">
        <Navbar.Brand>
          <Link to="/">
            <img className="hero" src={hero} alt="hero" />
          </Link>
        </Navbar.Brand>
        {/* <div className="sloganNav">
          <h5>By Onyx</h5>
          <h5 className="slogan-2Nav"> For Obsidian</h5>
        </div> */}

        {/* {!auth.currentUser ? ( */}
          {/* <Button variant="light" className="account">
            <Link to="/get-started" className="nav-link-acct">
              Create An Account / Login
            </Link>
          </Button>
        ) : ( */}
          <div  className="buttons-group-nav">
            <Button variant="light" className="nav-link-biz">
              <Link to="/businesses" className="nav-link-acct">
                Browse Businesses
              </Link>
              </Button>
           {" "}
            <Button variant="light" className="nav-link-res">
              <Link to="/resources"className="nav-link-acct" >
                Browse Resources
              </Link>
              </Button>
              {" "}
            <Button variant="light" className="nav-link-pro">
              <Link to="/profile" className="nav-link-acct">
                User Profile
              </Link>
              </Button>
              {" "}
            {/* <Button
              variant="dark"
              onClick={async () => {
                navigate("/");
                await signOut(auth);
              }}
            >
              Sign Out
              </Button> */}
          </div>
        {/* )} */}
        <AccountCircleIcon className="acct-icon"/>
      </Navbar>
    </nav>
  );
};

export default Nav;
