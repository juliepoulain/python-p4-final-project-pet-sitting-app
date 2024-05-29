import React, { useEffect, useState } from "react";
import VisitCard from "./VisitCard";

function VisitList({ ownerId }) {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    fetch(`/owners/${ownerId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.visits) {
          setVisits(data.visits);
        }
      });
  }, []);

  const visitCards = visits.map((visit) => (
    <VisitCard
      key={visit.id}
      date={visit.date}
      pet={visit.pet.name}
      sitter={visit.sitter.name}
      id={visit.id}
    />
  ));
  console.log(visitCards);
  return (
    <>
      <ul className="cards">{visitCards}</ul>
    </>
  );
}

export default VisitList;
