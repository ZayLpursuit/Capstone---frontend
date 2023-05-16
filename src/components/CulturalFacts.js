import React from 'react'

const data = require("../data/data.json")

const CulturalFacts = () => {
  let fact = data.map(f => f.fact)

  // console.log(fact)

  return (
    <div className='cultural-facts'>
      <h2>Facts On Deck</h2>
      {(<h3>{fact[Math.floor(Math.random() * fact.length)]}</h3>)}
    </div>
  )
}

export default CulturalFacts