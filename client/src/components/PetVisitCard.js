import React from "react";

function PetVisitCard({ date, time, sitter, visit_notes }) {
  return (
    <li className="card">
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Sitter: {sitter}</p>
      <p>Visit notes: {visit_notes}</p>
    </li>
  );
}

export default PetVisitCard;
