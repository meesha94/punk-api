import React from 'react'
import Card from '../Card/Card'
import beers from '../../data/beers'
const CardList = () => {
    const cardJSX= beers.map((beer)=> {

   
  return (
    <div>
        <Card image={beer.image_url} name={beer.name} info={beer.description}/>
    </div>
  )
})
return <div>{cardJSX}</div>
}

export default CardList