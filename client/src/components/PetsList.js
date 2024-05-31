import React, { useState, useEffect } from "react";
import PetForm from "./PetForm";
import PetFormEdit from "./PetFormEdit";
import { Link } from "react-router-dom";

function PetsList({ ownerId }) {
  const [pets, setPets] = useState([]);
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

  // function to add a pet form is on PetForm
  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  //function to edit the pet the form is on PetFormEdit
  const handleEditPet = (updatedPet) => {
    setPets(pets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet)));
    setEditPet(null);
  };

  //function to handle delete
  const handleDeletePet = (petId) => {
    setPets(pets.filter((pet) => pet.id !== petId));
    fetch(`/pets/${petId}`, { method: "DELETE" }).then(() => {});
  };

  return (
    <div className="pets-container">
      <h1>My Pets</h1>
      <div className="pets-list">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <h3>{pet.name}</h3>
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <div className="button-container">
              <Link to={`/pets/${pet.id}`} className="button-link">
                View Pet Details
              </Link>
              <button onClick={() => setEditPet(pet)}>Edit</button>
              <button onClick={() => handleDeletePet(pet.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      {editPet && <PetFormEdit onEditPet={handleEditPet} pet={editPet} />}
      <h3>Add Pets:</h3>
      <PetForm onAddPet={handleAddPet} ownerId={ownerId} />
    </div>
  );
}

export default PetsList;
