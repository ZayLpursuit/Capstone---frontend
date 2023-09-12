import React from "react";
import LandingPage from "./landingPage/LandingPage";

const Home = () => {
  return (
    <div className="home">
      <img
        className="homepic"
        alt="smiles"
        src="https://www.lendio.com/wp-content/uploads/2020/11/male-female-black-businessowners-coffee.jpg"
      />
      <div className="slogan">
        <h2>Embrace the Power of Melanin</h2>
        <h2 className="slogan-2"> Shop, Connect, Thrive!</h2>
      </div>
      <LandingPage />
    </div>
  );
};

export default Home;
