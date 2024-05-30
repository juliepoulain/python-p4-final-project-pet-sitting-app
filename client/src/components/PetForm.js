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
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
        <option value="">Select an animal</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="rabbit">Rabbit</option>
        <option value="hamster">Hamster</option>
        <option value="bird">Bird</option>
      </select>
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Breed"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />

      <input
        value={temperament}
        onChange={(e) => setTemperament(e.target.value)}
        placeholder="temperament"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Enter an Image URL"
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default PetForm;
