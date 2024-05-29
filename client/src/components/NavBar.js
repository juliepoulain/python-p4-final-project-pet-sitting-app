import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ownerId}) {
  return (

    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/pets" className="nav-link">
        Pets
      </NavLink>
      <NavLink to={`/owner/${ownerId}`} className="nav-link">
        Profile
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Log Out
      </NavLink>
    </nav>
  );
}

export default NavBar;
