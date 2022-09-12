import React, { useState } from 'react';
import "./Main.scss";




import SearchBox from "../../components/SearchBox/SearchBox";
import CardList from "../../components/CardList/CardList";

const Main = (props) => {
    const {beersArr} = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }

    const filteredBeers = beersArr.filter((beer) => {
        const beerNameLower = beer.name.toLowerCase();

        return beerNameLower.includes(searchTerm) && beer.name


    })
  return (
    <div>
        <SearchBox label={"beers"} searchTerm={searchTerm} handleInput={handleInput}/>
        <CardList title={"Results"} beersArr={filteredBeers}/>
    </div>
  )
}

export default Main;