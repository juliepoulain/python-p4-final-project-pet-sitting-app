import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VisitList from "./VisitList";

function SeeMorePetCard({ ownerId }) {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
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
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>Animal: {animal}</h1>
        <h1>Breed: {breed}</h1>
        <h1>Age: {age}</h1>
        <h1>Temperament: {temperament}</h1>
        <h1>
          Visits: <VisitList petId={id} context="pet" />
        </h1>
      </div>
    </div>
  );
}

export default SeeMorePetCard;
