import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SitterProfile = () => {
  const { id } = useParams();
  const [sitter, setSitter] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/sitters/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Sitter not found");
        }
      })
      .then((data) => {
        setSitter(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Sitter Profile</h1>
      <img src={sitter.image} alt={sitter.name} />
      <h2>{sitter.name}</h2>
      <p>
        <strong>Phone:</strong> {sitter.phone}
      </p>
      <p>
        <strong>Address:</strong> {sitter.address}
      </p>
      <p>
        <strong>Email:</strong> {sitter.email}
      </p>
      <p>
        <strong>Bio:</strong> {sitter.bio}
      </p>
      <p>
        <strong>Experience:</strong> {sitter.experience} years
      </p>
    </div>
  );
};

export default SitterProfile;
