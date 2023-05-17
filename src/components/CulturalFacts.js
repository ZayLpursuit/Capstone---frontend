import React from 'react'

const data = require("../data/data.json")

const CulturalFacts = () => {
  let fact = data.map(f => f.fact)

  // console.log(fact)

  return (
    <div className='cultural-facts'>
      <h6 style={{textDecoration: "underline"}}>Facts On Deck</h6>
      {(<h5>{fact[Math.floor(Math.random() * fact.length)]}</h5>)}
    </div>
  )
}

export default CulturalFacts