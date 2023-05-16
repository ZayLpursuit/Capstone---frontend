import React from "react";
import CulturalFacts from "../components/CulturalFacts";

const Home = () => {
  return (
    <div className="home">
      <div className="mission-statement">
        <section className="statement">
        <h2>
       Our Mission is to support and promote black-owned businesses by creating a platform for consumers to connect with them, with the goal of increasing their visibility and helping them thrive. They aim to promote entrepreneurship and economic equity within the black community, ultimately building a better and more inclusive economy for all.
      </h2>
        </section>
        <section>
          <img src="https://iamblackbusiness.com/images/partners/niche-site-black-cents.jpg"
            width="400px"
            height="400px"/>
        </section>
      </div>
      
     
      <br />
      <CulturalFacts />
      <br/>
      <h2>Featured Businesses</h2>
    </div>
  );
};

export default Home;
