import React from 'react';
import "./Main.scss";
import beers from '../../data/beers';
import ExploreBeers from '../../containers/ExploreBeers/ExploreBeers'
const Main = () => {
  return (
    <div>
        <ExploreBeers beersArr={beers}/>
        
        
    </div>
  )
}

export default Main