import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function SeeMorePetCard({ ownerId }) {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    // console.log(petId);
    fetch(`http://localhost:5555/pets/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPet(data);
      });
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  const { name, image, animal, breed, age, temperament } = pet;

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} className="pet-image"/>
      </div>
      <div>
        <h3>Animal:</h3>{animal}
        <h3>Breed:</h3>{breed}
        <h3>Age:</h3>{age}
        <h3>Temperament:</h3>{temperament}
        <h1>Visits:</h1>
      </div>
    </div>
  );
}

export default SeeMorePetCard;
