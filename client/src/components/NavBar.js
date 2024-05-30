import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ ownerId }) {
  return (
    <div className="navbar">
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      {ownerId ? (
        <NavLink to={`/pets`} className="nav-link">
          My Pets
        </NavLink>
      ) : (
        <NavLink to="/login" className="nav-link">
          My Pets
        </NavLink>
      )}
      <NavLink to={`/owner/${ownerId}`} className="nav-link">
        Profile
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Log Out
      </NavLink>
    </nav>
    </div>
  );
}

export default NavBar;