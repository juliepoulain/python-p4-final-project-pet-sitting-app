import React, { useState, useEffect } from "react";

function SeeMoreCard({ petId }) {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5555/pets/${petId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch pet");
        }
        return response.json();
      })
      .then((data) => setPet(data))
      .catch((error) => console.error("Error fetching pet:", error));
  }, [petId]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  const { name, animal, image, breed, age, temperament } = pet;

  return (
    <li className="see-more-card">
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
    </li>
  );
}

export default SeeMoreCard;
