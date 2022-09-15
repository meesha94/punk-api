import React from 'react'
import "./FilterItem.scss"

const FilterItem = ({value, filterBeers}) => {
  return (
    <div className='item'>
        <label htmlFor={value}>{value}</label>
        <input type="checkbox" value={value} id={value} onInput={filterBeers}/>
    </div>
  )
}

export default FilterItem