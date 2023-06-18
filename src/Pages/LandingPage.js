import React from "react";
import CulturalFacts from "../components/CulturalFacts";
// import Carousel from "../components/Carousel";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="mission-statement">
        <section className="statement">
          <h1 className="centered margbottom">Our Mission </h1>
          <h3 className="margbottom">
            To support and promote black-owned businesses by creating a platform
            for consumers to connect with them, with the goal of increasing
            their visibility and helping them thrive. They aim to promote
            entrepreneurship and economic equity within the black community,
            ultimately building a better and more inclusive economy for all.
          </h3>
        </section>
        {/* <Carousel /> */}
      </div>
      <br />
      <CulturalFacts />
      <br />
      <div>
        <h1 className="center-text" >
          Featured Businesses
        </h1>
        <br />
        <div className="featured">
          <div>
            <h4 style={{ marginLeft: "20px" }}>
              Sylvia's, Located In Harlem Has Been Open For 61 Years!
            </h4>
            <img
            className="featureImg"
              src="https://www.nycgo.com/images/videos/84544/sylvias-restaurant-thumbnail__large.jpg"
              alt="sylvia's restuarant"
              width="400px"
              height="400px"
            />
          </div>
          <div>
            <h4 style={{ marginLeft: "20px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h4>
            <img
            className="featureImg"
              src="https://gitlab.com/uploads/-/system/project/avatar/3880238/Temp.png"
              width="400px"
              height="400px"
              alt="n/a"
            />
          </div>
          <div>
            <h4 style={{ marginLeft: "20px" }}>
              Bobby's Restaurant, Located In Jamaica, Queens Has Been Open For
              More Than 30 Years!
            </h4>
            <img
            className="featureImg"
              src="https://lh3.googleusercontent.com/p/AF1QipPxOuirfJ6-ThGsBmPt6x9x7GStuiyTKS0ZnrE=s1360-w1360-h1020"
              width="400px"
              height="400px"
              alt="n/a"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
