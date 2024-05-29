import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const SitterProfile = ({ ownerId }) => {
  console.log("SitterProfile component mounted");
  const { id } = useParams();
  const [sitter, setSitter] = useState(null);

  useEffect(() => {
    console.log("Fetching sitter with ID:", id);
    fetch(`http://localhost:5555/sitters/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setSitter(data);
        console.log("Fetched sitter data:", data);
      });
  }, [id]);

  if (!sitter) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar ownerId={ownerId} />
      <h2>Sitter Profile</h2>
      <div>
        <p>Name: {sitter.name}</p>
        <img src={sitter.image} alt={sitter.name} />
        <p>{sitter.bio}</p>
        <p>Experience: {sitter.experience} years</p>
        <p>Phone: {sitter.phone}</p>
        <p>Address: {sitter.address}</p>
        <p>Email: {sitter.email}</p>
      </div>
    </div>
  );
};

export default SitterProfile;
