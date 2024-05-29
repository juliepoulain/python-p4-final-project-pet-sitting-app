import { useState, useEffect } from "react";
import PetForm from "./PetForm";
import VisitList from "./VisitList";
import NavBar from "./NavBar"

function OwnerProfile({ownerId}) {
  const [pets, setPets] = useState([]);
  const [owner, setOwner] = useState({})

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  useEffect(() => {
    fetch(`/owners/${ownerId}`)
      .then((r) => r.json())
      .then((data) => {
        setOwner(data)
      })
  }, []);

  return (
    <div>
      <NavBar ownerId={ownerId}/>
      <h2>Owner Profile</h2>
        <p>Name: {owner.name}</p>
        <p>Email: {owner.email}</p>
        <p>Phone Number: {owner.phone}</p>
        <p>Address: {owner.address}</p>
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
  )
}

export default OwnerProfile
