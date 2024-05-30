import { useState, useEffect } from "react";

function PetFormEdit({ pet, onEditPet }) {
  const [name, setName] = useState(pet.name || "");
  const [animal, setAnimal] = useState(pet.animal || "");
  const [breed, setBreed] = useState(pet.breed || "");
  const [age, setAge] = useState(pet.age || "");
  const [temperament, setTemperament] = useState(pet.temperament || "");
  const [image, setImage] = useState(pet.image || "");

  useEffect(() => {
    if (pet) {
      setName(pet.name);
      setAnimal(pet.animal);
      setBreed(pet.breed);
      setAge(pet.age);
      setTemperament(pet.temperament);
      setImage(pet.image);
    }
  }, [pet]);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedPet = {
      id: pet.id,
      name,
      animal,
      breed,
      age,
      temperament,
      image,
    };
    fetch(`/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPet),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Failed to update pet");
      })
      .then((updatedPet) => {
        onEditPet(updatedPet);
      })
      .catch((error) => {
        console.error("Error updating pet:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
        placeholder="Animal"
      />
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Breed"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <input
        type="text"
        value={temperament}
        onChange={(e) => setTemperament(e.target.value)}
        placeholder="Temperament"
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <button type="submit">Update Pet</button>
    </form>
  );
}

export default PetFormEdit;
