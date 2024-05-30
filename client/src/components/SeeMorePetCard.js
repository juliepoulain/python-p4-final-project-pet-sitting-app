import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function SeeMorePetCard({ petId, ownerId }) {
  //   const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    console.log(petId);
    fetch(`http://localhost:5555/pets/${petId}`)
      .then((response) => response.json())
      .then((data) => {
        setPet(data);
      });
  }, [petId]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  const { name, image, animal, breed, age, temperament } = pet;

  return (
    <div>
      <NavBar ownerId={ownerId} />
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>Animal: {animal}</h1>
        <h1>Breed: {breed}</h1>
        <h1>Age: {age}</h1>
        <h1>Temperament: {temperament}</h1>
        <h1>Visits: </h1>
      </div>
    </div>
  );
}

export default SeeMorePetCard;
