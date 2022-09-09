import React from 'react'

const SearchBox = () => {
  return (
    <form className="search-box">
      <label htmlFor="placeholder" className="search-box__label">
        
      </label>
      <input
        type="text"
        name="placeholder"
        value="placeholder"
        onInput="placeholder"
        className="search-box__input"
      />
    </form>
  )
}

export default SearchBox