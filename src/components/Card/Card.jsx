import React from 'react';
import "./Card.scss";

const Card = (props) => {
    const {image, name, info, food} = props;
  return (
    <div className='card' name="card">
        <img src={image} alt="placeholder" className='card__image'/>
        <h1 className='card__name'>{name}</h1>
        <p className='card__info'>{info}</p>
        <ul className='card__food'> Food Pairings:
          <li>{food[0]}</li> 
          <li>{food[1]}</li> 
          <li>{food[2]}</li> </ul>
    </div>
  )
}

export default Card;