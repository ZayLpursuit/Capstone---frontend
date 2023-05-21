import React from "react";
import CulturalFacts from "../components/CulturalFacts";
import bbo from "../assets/BeFunky-collage.png";

const Home = () => {
  return (
    <div className="home">
      <div className="mission-statement">
        <section className="statement">
          <h3>Our Mission </h3>
          <h4>
            To support and promote black-owned businesses by
            creating a platform for consumers to connect with them, with the
            goal of increasing their visibility and helping them thrive. They
            aim to promote entrepreneurship and economic equity within the black
            community, ultimately building a better and more inclusive economy
            for all.
          </h4>
        </section>
        <section>
          <img
            src={bbo}
            alt="black business owners"
            // height="400px"
            // width="200px"
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
            height="400px" alt="n/a"/>
        </div>
          <div>
          <h4 style={{marginLeft: "20px"}}>Bobby's Restaurant, Located In Jamaica, Queens Has Been Open For More Than 30 Years!</h4>
            <img src="https://lh3.googleusercontent.com/p/AF1QipPxOuirfJ6-ThGsBmPt6x9x7GStuiyTKS0ZnrE=s1360-w1360-h1020"
            width="400px"
            height="400px" alt="n/a"/>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Home;
