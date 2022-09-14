import React from 'react'
import FiltersList from '../../components/FiltersList/FiltersList'

const Navbar = ({filterABV}) => {


  return (
    <div className='navbar'>
       <FiltersList filterABV={filterABV}/>
      
    </div>
  )
}

export default Navbar