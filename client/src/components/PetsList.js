import React, { useState, useEffect } from "react";

function PetsList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("/pets")
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div>
      <h1>Pets List</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <p>Name: {pet.name}</p>
            <p>Animal: {pet.animal}</p>
            <p>Breed: {pet.breed}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetsList;
