import React from "react";

// const data = require("../data/data.json");

const CulturalFacts = () => {
  // let fact = data.map((f) => f.fact);

  // console.log(fact)

  return (
    <div id="scroll-container">
      <div className="cultural-facts">
        <h2 style={{ textDecoration: "underline" }}>Cultural Facts</h2>
        {/* <h5>It's often used to indicate that someone is ready to provide a series of interesting or informative facts. Look below for some a interesting fact.</h5> */}
        <div id="scroll-text">
          {/* <marquee behavior="scroll" direction="left">
            {<h5>{fact[Math.floor(Math.random() * fact.length)]}</h5>}
          </marquee> */}
        </div>
      </div>
    </div>
  );
};

export default CulturalFacts;
