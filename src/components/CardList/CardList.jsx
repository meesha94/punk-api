import React from "react";
import Card from "../Card/Card";

import "./CardList.scss";

const CardList = ({ beers }) => {
  return (
    <div className="beers-list">
      {beers?.map((beer) => {
        return (
          beer && (
            <Card
              key={beer.id}
              image={beer.image_url}
              name={beer.name}
              info={beer.description}
              abv={beer.abv}
            />
          )
        );
      })}
    </div>
  );
};

export default CardList;
