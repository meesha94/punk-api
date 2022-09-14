import React from 'react'
import "./FilterItem.scss"

const FilterItem = ({value}) => {
  return (
    <div className='item'>
        <label htmlFor={value}>{value}</label>
        <input type="checkbox" value={value} id={value} />
    </div>
  )
}

export default FilterItem