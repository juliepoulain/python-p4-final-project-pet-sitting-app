import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import VisitList from "./VisitList";

function OwnerProfile({ ownerId }) {
  const [owner, setOwner] = useState({});
  const [pets, setPets] = useState([]);
  const [sitters, setSitters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/owners/${ownerId}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error("Network response was not ok");
        }
        return r.json();
      })
      .then((data) => {
        setOwner(data);
        setPets(data.pets || []);
        setSitters(data.unique_sitters || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [ownerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="profile-info">
        <h2>My Profile</h2>
        <p>Name: {owner.name}</p>
        <p>Email: {owner.email}</p>
        <p>Phone Number: {owner.phone}</p>
        <p>Address: {owner.address}</p>
      </div>
      <div className="pets-owner">
        <h3>My Pets</h3>
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>{pet.name}</li>
          ))}
        </ul>
        <br />
        <NavLink to="/pets" className="nav-link">
          Manage My Pets
        </NavLink>
      </div>
      <div className="visits-owner">
        <h3>Past Visits</h3>
        <div className="visits-container">
          <VisitList ownerId={ownerId} context="owner" />
        </div>
      </div>
      <div className="past-sitter">
        <h3>My Past Sitters</h3>
        <ul>
          {sitters.map((sitter) => (
            <li key={sitter.id}>
              <Link to={`/sitters/${sitter.id}`}>{sitter.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OwnerProfile;
