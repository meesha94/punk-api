import "./App.scss";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import allBeers from "./data/beers"

const App = () => {
  const [beers, setBeers] = useState(allBeers);
  const [searchTerm, setSearchTerm] = useState("");
  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
    
  };
  
getBeers()
 

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  const filteredBeers = beers?.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm) && beer.name;
  });

  return (
    <div className="app">
      <SearchBox
        label={"beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Navbar className="app__navbar" />

      <Main className="app__main" beers={filteredBeers} />
    </div>
  );
};

export default App;
