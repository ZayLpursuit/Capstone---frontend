import React from "react";
import CulturalFacts from "../components/CulturalFacts";

const Home = () => {
  return (
    <div className="home">
      <div className="mission-statement">
        <section className="statement">
          <h2>
            Our Mission is to support and promote black-owned businesses by
            creating a platform for consumers to connect with them, with the
            goal of increasing their visibility and helping them thrive. They
            aim to promote entrepreneurship and economic equity within the black
            community, ultimately building a better and more inclusive economy
            for all.
          </h2>
        </section>
        <section>
          <img
            src="https://finurah.com/wp-content/uploads/2022/03/company-ward-eldon-ward-0322_1-895x500.jpg"
            alt="John T. Ward"
          />
        </section>
      </div>
      <br />
      <CulturalFacts />
      <br />
      <div>
        <h2 className="center-text" style={{ textDecoration: "underline" }}>Featured Businesses</h2>
        <br/>
        <div className="featured">
          <div>
            <h4 style={{marginLeft: "20px"}}>Sylvia's, Located In Harlem Has Been Open For 61 Years!</h4>
          <img
            src="https://www.nycgo.com/images/videos/84544/sylvias-restaurant-thumbnail__large.jpg"
            alt="sylvia's restuarant"
            width="400px"
            height="400px"
          />
        </div>
          <div>
            <h4 style={{marginLeft: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <img src="https://gitlab.com/uploads/-/system/project/avatar/3880238/Temp.png"
            width="400px"
            height="400px"/>
        </div>
          <div>
          <h4 style={{marginLeft: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
            <img src="https://gitlab.com/uploads/-/system/project/avatar/3880238/Temp.png"
            width="400px"
            height="400px"/>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Home;
