import React from "react";

function ToyCard( { toy, onDeleteToy, onLikeToy }) {
  const { id, name, image, likes} = toy;
  //console.log(toy)

  function handleDonateClick(){
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "DELETE"
    });
    //console.log("handleDonateClick WORKS")
    onDeleteToy(id);
  };

  function handleLikeClick(){
    const updateLikes = {
      likes: toy.likes + 1
    };
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateLikes)
    })
    .then(resp => resp.json())
    .then(dataUpdatedToy => onLikeToy(dataUpdatedToy))
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
