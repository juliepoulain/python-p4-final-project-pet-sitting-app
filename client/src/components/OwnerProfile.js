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
      {/* hard coded for now but we can uncoment for fetch */}
      <div>
        <p>Name: Jessica</p>
        <p>Email: test@gmail.com</p>
        <p>Phone Number: 123-456-7890</p>
        <p>Address: 123 whatever st</p>
      </div>

      {/* {ownerInfo && (
 <div>
 <p>Name: {ownerInfo.name}</p>
<p>Email: {ownerInfo.email}</p>
<p>Phone Number: {ownerInfo.phoneNumber}</p>
<p>Address: {ownerInfo.address}</p> 
</div>)} */}

      <PetForm onAddPet={handleAddPet} />
      {/* fetch the pets to display we need to have the pets card */}
      <h3>Pets</h3>
      <ul>
        {pets.map((pet, index) => (
          <li key={index}>{pet.name}</li>
        ))}
      </ul>

      <h3>Visits</h3>
    </div>
  );
}

export default OwnerProfile;
