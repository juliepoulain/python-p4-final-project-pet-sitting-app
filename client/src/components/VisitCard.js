import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function VisitCard({ date, sitter, pet, id }) {
  return (
    <li className="card">
      <p>Date: {date}</p>
      <p>For: {pet}</p>
      <p>By: {sitter}</p>
      <NavLink to={`/visit/${id}`} className="nav-link">
        See Visit Details
      </NavLink>
    </li>
  );
}

export default VisitCard;
