import React from 'react'
import "./Filterslist.scss";
import FilterItem from '../FilterItem/FilterItem';

const FiltersList = ({filterBeers }) => {
  return (
    <div className='filter-items'>
        <FilterItem value={"High ABV"} filterBeers={filterBeers} />
        <FilterItem value={"Classic Range"} filterBeers={filterBeers} />
        <FilterItem value={"Acidic"} filterBeers={filterBeers} />
    </div>
  )
}

export default FiltersList