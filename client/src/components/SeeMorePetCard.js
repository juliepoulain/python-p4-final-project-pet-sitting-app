import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VisitList from "./VisitList";

function SeeMorePetCard({ ownerId }) {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [showVisits, setShowVisits] = useState(false);

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
    <div className="see-more-pet-card-container">
      <div>
        <h1>{name}</h1>
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>Animal: {animal}</h3>
        <h3>Breed: {breed}</h3>
        <h3>Age: {age}</h3>
        <h3>Temperament: {temperament}</h3>
        <button onClick={() => setShowVisits(!showVisits)}>
          {showVisits ? "Hide Visits" : "Show Visits"}
        </button>
        {showVisits && (
          <div className="visits-container">
            <VisitList petId={id} context="pet" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SeeMorePetCard;
