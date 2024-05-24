import { useState } from "react";
import PetForm from "./PetForm";

function OwnerProfile() {
  const [pets, setPets] = useState([]);

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  return (
    <div>
      <h2>Owner Profile</h2>
      <PetForm onAddPet={handleAddPet} />
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default OwnerProfile;
