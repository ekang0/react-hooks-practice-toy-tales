import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, onDeleteToy, onLikeToy }) {

  const toyCardsDisplay = toys.map((toy) => {
    return <ToyCard 
    key={toy.id} 
    toy={toy}
    onDeleteToy={onDeleteToy}
    onLikeToy={onLikeToy}
    />
  });

  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}{toyCardsDisplay}</div>
  );
}

export default ToyContainer;
