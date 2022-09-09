import React from 'react'
import Card from '../Card/Card'

import "./CardList.scss"
const CardList = (props) => {
    const {beersArr} = props;

    const cardJSX = beersArr?.map((beer) => (

        <div className='beer-list' >
        <Card key={beer.id} image={beer.image_url} name={beer.name} info={beer.description}/>
    </div>
    ))

return (
<>

<div className='beers-list'>{cardJSX}</div>
</>
)
}

export default CardList