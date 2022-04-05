import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  };

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, []);

  function handleNewToy(name, image) {
    //console.log(name, image);
    const newToy= {
      name: name,
      image: image,
      likes: 0
    };
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then(dataNewToy => setToys([...toys, dataNewToy]))
  };

  function handleDeleteToy(id){
    //console.log("handleDeleteToy function", id);
    const updateToysList = toys.filter((toy) => toy.id !== id ? toy : null);
    setToys(updateToysList)
  };

  function handleLikeToy(dataUpdatedToy){
    //console.log(dataUpdatedToy);
    const updateToyList = toys.map((toy) => toy.id === dataUpdatedToy.id ? dataUpdatedToy : toy);
    setToys(updateToyList);
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm newToyForm={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys} 
      onDeleteToy={handleDeleteToy}
      onLikeToy={handleLikeToy}
      />
    </>
  );
}

export default App;
