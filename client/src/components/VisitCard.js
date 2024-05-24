import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function VisitCard({ date, sitter, pet }) {
  return (
    <li className="card">
      <p>Date: 
        {/* {visit.date} */}
        </p>
      <p>For: 
        {/* {pet.name} */}
        </p>
      <p>By: 
        {/* {sitter.name} */}
        </p>
      <NavLink to="/visit" className="nav-link">
        See Visit Details
      </NavLink>
    </li>
  );
}

export default VisitCard;
