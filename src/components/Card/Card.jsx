import React from 'react'

const Card = (props) => {
    const {image, name, info} = props;
  return (
    <div className='card'>
        <img src={image} alt="placeholder" className='card_image'/>
        <h1 className='card__name'>{name}</h1>
        <p className='card__info'>{info}</p>
    </div>
  )
}

export default Card