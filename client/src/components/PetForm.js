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
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="animal">Animal:</label>
      <input
        id="animal"
        name="animal"
        type="text"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
      />
      <label htmlFor="breed">Breed:</label>
      <input
        id="breed"
        name="breed"
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <label htmlFor="age">Age:</label>
      <input
        id="age"
        name="age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor="temperament">Temperament:</label>
      <input
        id="temperament"
        name="temperament"
        type="text"
        value={temperament}
        onChange={(e) => setTemperament(e.target.value)}
      />
      <label htmlFor="pictureUrl">Picture URL:</label>
      <input
        id="pictureUrl"
        name="pictureUrl"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default PetForm;
