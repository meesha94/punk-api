import "./App.scss";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import Header from "./components/Header/Header";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  const searchBeers = beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();

    return beerNameLower.includes(searchTerm) && beer.name;
  });

  const filterBeers = (event) => {
    if (event.target.checked === true) {
      
        if (event.target.value === "High ABV") {
         setBeers(beers.filter((beer) =>  beer.abv > 6
        ))
        
      } else if (event.target.value === "Classic Range"){
        setBeers(beers.filter((beer)=> parseInt(beer.first_brewed.slice(-4)) < 2010
        ))
      } else if (event.target.value === "Acidic") {
        setBeers(beers.filter((beer) => beer.ph < 4
        ))
      }
      
    } else  {
      return getBeers()
    }

    
  }

  return (
    <div className="app">
      <Header />
      <SearchBox
        className="app__search-box"
        label={"beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Navbar className="app__navbar" filterBeers={filterBeers}></Navbar>

      <Main className="app__main" beers={searchBeers} />
    </div>
  );
};

export default App;
