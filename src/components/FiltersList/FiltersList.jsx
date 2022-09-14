import React from 'react'
import "./FiltersList";
import FilterItem from '../FilterItem/FilterItem';

const FiltersList = ({filterABV, filterClassic, filterPH }) => {
  return (
    <div>
        <FilterItem value={"High ABV (> 6.0%)"} onClick={filterABV} />
        <FilterItem value={"Classic Range"} onClick={filterClassic} />
        <FilterItem value={"Acidic (ph < 4)"} onClick={filterPH} />
    </div>
  )
}

export default FiltersList