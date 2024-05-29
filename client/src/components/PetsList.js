import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PetsList() {
  const { ownerId } = useParams();
  const [pets, setPets] = useState([]);
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    fetch(`/owners/${ownerId}`)
      .then((r) => r.json())
      .then((data) => {
        setPets(data.pets);
      });
  }, []);

  return (
    <div>
      <h1>Pets List</h1>
      {loginMessage && <p>{loginMessage}</p>}
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
