import React from 'react';
import "./Main.scss";
import CardList from "../../components/CardList/CardList";

const Main = ({beers}) => {
 
  return (
    <div>
         <CardList title={"Results"} beers={beers}/>
    </div>
  )
}

export default Main;