import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PetForm from "./PetForm";
import NavBar from "./NavBar";
import SeeMorePetCard from "./SeeMorePetCard";
import PetFormEdit from "./PetFormEdit";

function PetsList({ ownerId }) {
  const [pets, setPets] = useState([]);
  const [showMore, setShowMore] = useState(null);
  const [editPet, setEditPet] = useState(null);

  // Initial fetch to get pets by the owner
  useEffect(() => {
    if (ownerId) {
      fetch(`/owners/${ownerId}`)
        .then((r) => r.json())
        .then((data) => {
          setPets(data.pets);
        });
    }
  }, [ownerId]);

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  const handleEditPet = (updatedPet) => {
    setPets(pets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet)));
    setEditPet(null);
  };

  const handleDeletePet = (petId) => {
    setPets(pets.filter((pet) => pet.id !== petId));
    fetch(`/pets/${petId}`, { method: "DELETE" }).then(() => {});
  };

  if (showMore) {
    return <SeeMorePetCard petId={showMore} ownerId={ownerId} />;
  }

  return (
    <div>
      <NavBar ownerId={ownerId} />
      <h1>Pets List</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <p>Name: {pet.name}</p>
            <p>Animal: {pet.animal}</p>
            <p>Breed: {pet.breed}</p>
            <div className="button-container">
              <button onClick={() => setShowMore(pet.id)}>See more</button>
              <button onClick={() => setEditPet(pet)}>Edit</button>
              <button onClick={() => handleDeletePet(pet.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {editPet && <PetFormEdit onEditPet={handleEditPet} pet={editPet} />}
      <PetForm onAddPet={handleAddPet} ownerId={ownerId} />
    </div>
  );
}

export default PetsList;
