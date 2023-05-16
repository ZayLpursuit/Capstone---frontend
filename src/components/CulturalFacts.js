import React from 'react'

const data = require("../data/data.json")

const CulturalFacts = () => {
  let fact = data.map(f => f.fact)

  // console.log(fact)

  return (
    <div className='cultural-facts' style={{ padding: "5px"}}>
      <h5 style={{textDecoration: "underline"}}>Facts On Deck</h5>
      {(<h4>{fact[Math.floor(Math.random() * fact.length)]}</h4>)}
    </div>
  )
}

export default CulturalFacts