import "./CulturalFacts.scss"

const data = require("../../data/data.json");

const CulturalFacts = () => {
  let fact = data.map((f) => f.fact);

  return (
      <div className="CulturalFacts">
        <h2>Facts On Deck</h2>
        <div id="scroll-text">
          <h5>{fact[Math.floor(Math.random() * fact.length)]}</h5>
        </div>
    </div>
  );
};

export default CulturalFacts;
