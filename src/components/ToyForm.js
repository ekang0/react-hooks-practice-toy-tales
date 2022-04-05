import React, { useState } from "react";

function ToyForm( { newToyForm }) {
  const [newToyName, setNewToyName] = useState("");
  const [newToyImage, setNewToyImage] = useState("");

  function handleToyFormSubmit(e) {
    //console.log(e)
    e.preventDefault();
    newToyForm(newToyName, newToyImage);
  };

  function handleChangeName(e){
    //console.log(e.target.value)
    setNewToyName(e.target.value)
  };

  function handleChangeImage(e){
    //console.log(e.target.value)
    setNewToyImage(e.target.value)
  };

  return (
    <div className="container" >
      <form className="add-toy-form" onSubmit={handleToyFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToyName}
          onChange={handleChangeName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToyImage}
          onChange={handleChangeImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
