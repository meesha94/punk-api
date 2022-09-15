import React from 'react'
import "./FiltersList";
import FilterItem from '../FilterItem/FilterItem';

const FiltersList = ({filterBeers }) => {
  return (
    <div>
        <FilterItem value={"High ABV"} filterBeers={filterBeers} />
        <FilterItem value={"Classic Range"} filterBeers={filterBeers} />
        <FilterItem value={"Acidic"} filterBeers={filterBeers} />
    </div>
  )
}

export default FiltersList