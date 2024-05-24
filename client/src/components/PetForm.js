import { useState } from "react";

function PetForm({ onAddPet }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [temperament, setTemperament] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPet = {
      name,
      breed,
      age,
      temperament,
      pictureUrl,
    };
    onAddPet(newPet);
    // clear the form
    setName("");
    setBreed("");
    setAge("");
    setTemperament("");
    setPictureUrl("");
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
        value={pictureUrl}
        onChange={(e) => setPictureUrl(e.target.value)}
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default PetForm;
