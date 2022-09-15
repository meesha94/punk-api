import "./App.scss";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";


const App = () => {
  const [beers, setBeers] = useState([]);
  //const [mainBeers, setMainBeers] = useState()
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState()

  const getBeers = async () => {
    const url = `https://api.punkapi.com/v2/beers`;
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data);
     //setMainBeers(beers);
    // console.log(beers)
  };

  useEffect(() => {
    getBeers()
  }, [])

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  // const handleFilter = async (event) => {
   
  //   const checked = event.target.value 
    
  //   await setFilter(checked)
  //   console.log(filter)
  // }

  const searchBeers = () => { beers.filter((beer) => {
    const beerNameLower = beer.name.toLowerCase();
   
      return beerNameLower.includes(searchTerm) && beer.name;
  })
}
  // .filter((beer)=> {
    
  //   const beerABV = beer.abv > 6;
   
  //     return beerABV ;
  // })
//}
  

 

  return (
    <div className="app">
      <SearchBox
        className="app__search-box"
        label={"beers"}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <Navbar className="app__navbar"  >
        
      </Navbar>

      <Main className="app__main" beers={beers} searchBeers={searchBeers}/>
      
    </div>
  );
};


export default App  

