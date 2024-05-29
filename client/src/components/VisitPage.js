import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const VisitProfile = ({ ownerId }) => {
  const { id } = useParams();
  console.log(id);
  const [visit, setVisit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/visits/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Visit not found");
        }
      })
      .then((data) => {
        setVisit(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);
console.log(visit)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavBar />
      <h1>Visit Information</h1>
      <h2>Date of Visit: {visit.date}</h2>
      <h2>Time of Visit: {visit.check_in_time}</h2>
      <p><strong>Pet: </strong>{visit.pet.name}</p>
      <p><strong>Sitter: </strong>{visit.sitter.name}</p>
      <p><strong>Address: </strong>{visit.owner.address}</p>
      <p><strong>Visit Notes: </strong> {visit.visit_notes}</p>
    </div>
  );
};

export default VisitProfile;
