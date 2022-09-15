import React from 'react'
import FiltersList from '../../components/FiltersList/FiltersList';
import "./Navbar.scss"

const Navbar = ({filterBeers}) => {


  return (
    <div className='navbar'>
       <FiltersList filterBeers={filterBeers}/>
       
      
    </div>
  )
}

export default Navbar