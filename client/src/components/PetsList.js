import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PetForm from "./PetForm";
import NavBar from "./NavBar";
import SeeMorePetCard from "./SeeMorePetCard";

function PetsList({ ownerId }) {
  const [pets, setPets] = useState([]);
  const [loginMessage, setLoginMessage] = useState("");
  const [editPet, setEditPet] = useState(null);
  const [showMore, setShowMore] = useState(null);

  useEffect(() => {
    if (ownerId) {
      fetch(`/owners/${ownerId}`)
        .then((r) => r.json())
        .then((data) => {
          setPets(data.pets);
        });
    } else {
      setLoginMessage("Please log in to view your pets.");
    }
  }, [ownerId]);

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  const handleDeletePet = (petId) => {
    setPets(pets.filter((pet) => pet.id !== petId));
    fetch(`/pets/${petId}`, { method: "DELETE" }).then(() => {});
  };

  const handleEditPet = (pet) => {
    setEditPet(pet);
  };

  const handleUpdatePet = (e) => {
    e.preventDefault();
    const updatedPet = { ...editPet };
    setPets(pets.map((pet) => (pet.id === editPet.id ? updatedPet : pet)));
    fetch(`/pets/${editPet.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPet),
    }).then(() => {
      setEditPet(null);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditPet({ ...editPet, [name]: value });
  };

  const handleShowMore = (petId) => {
    console.log(`Setting showMore to: ${petId}`);
    setShowMore(petId);
    fetch(`http://localhost:5555/pets/${petId}`)
      .then((response) => {
        // handle response
      })
      .catch((error) => {
        // handle error
      });
  };

  return (
    <div>
      <NavBar />
      <h1>Pets List</h1>
      {loginMessage && <p>{loginMessage}</p>}
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {editPet && editPet.id === pet.id ? (
              <form onSubmit={handleUpdatePet}>
                <h2>Edit Pet</h2>
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={editPet.name || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Animal:
                  <input
                    type="text"
                    name="animal"
                    value={editPet.animal || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Breed:
                  <input
                    type="text"
                    name="breed"
                    value={editPet.breed || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Age:
                  <input
                    type="text"
                    name="age"
                    value={editPet.age || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Temperament:
                  <input
                    type="text"
                    name="temperament"
                    value={editPet.temperament || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Picture URL:
                  <input
                    type="text"
                    name="pictureUrl"
                    value={editPet.pictureUrl || ""}
                    onChange={handleChange}
                  />
                </label>
                <button type="submit">Update Pet</button>
                <button type="button" onClick={() => setEditPet(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <p>Name: {pet.name}</p>
                <p>Animal: {pet.animal}</p>
                <p>Breed: {pet.breed}</p>
                <div className="button-container">
                  <Link
                    to={`/pets/${pet.id}`}
                    className="button-see-more"
                    onClick={() => handleShowMore(pet.id)}
                  >
                    See more
                  </Link>
                  <button onClick={() => handleEditPet(pet)}>Edit</button>
                  <button onClick={() => handleDeletePet(pet.id)}>
                    Delete
                  </button>
                </div>

                {showMore === pet.id && <SeeMorePetCard petId={pet.id} />}
              </>
            )}
          </li>
        ))}
      </ul>
      <PetForm onAddPet={handleAddPet} ownerId={ownerId} />
    </div>
  );
}

export default PetsList;
