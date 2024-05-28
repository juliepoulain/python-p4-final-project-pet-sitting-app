import { useState, useEffect } from "react";
import PetForm from "./PetForm";
import VisitList from "./VisitList";

function OwnerProfile() {
  const [pets, setPets] = useState([]);
  const [sitters, setSitters] = useState([]);
  const [owner, setOwner] = useState({})

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  useEffect(() => {
    fetch(`/owners/1`)
      .then((r) => r.json())
      .then(setOwner)
      console.log(owner)
  }, []);

  return (
    <div>
      <h2>Owner Profile</h2>
      <div>
        <p>Name: {owner.name}</p>
        <p>Email: {owner.email}</p>
        <p>Phone Number: {owner.phone}</p>
        <p>Address: {owner.address}</p>
      </div>

      <PetForm onAddPet={handleAddPet} />
      {/* fetch the pets to display we need to have the pets card */}
      <h3>Pets</h3>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </ul>

      <h3>Visits</h3>
      <VisitList />
    </div>
  );
}

export default OwnerProfile;
