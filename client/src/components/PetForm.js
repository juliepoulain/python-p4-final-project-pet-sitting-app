import { useState } from "react";

function PetForm({ ownerId, onAddPet }) {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [temperament, setTemperament] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPet = {
      name,
      animal,
      breed,
      age,
      temperament,
      image,
      owner_id: ownerId,
    };

    fetch("/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Failed to add pet");
      })
      .then((newPet) => {
        onAddPet(newPet);
        setName("");
        setAnimal("");
        setBreed("");
        setAge("");
        setTemperament("");
        setImage("");
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Animal:</label>
      <input value={animal} onChange={(e) => setAnimal(e.target.value)} />
      <label>Breed:</label>
      <input value={breed} onChange={(e) => setBreed(e.target.value)} />
      <label>Age:</label>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <label>Temperament:</label>
      <input
        value={temperament}
        onChange={(e) => setTemperament(e.target.value)}
      />
      <label>Picture URL:</label>
      <input value={image} onChange={(e) => setImage(e.target.value)} />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default PetForm;
