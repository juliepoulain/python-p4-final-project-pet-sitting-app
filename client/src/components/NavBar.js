import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/pets" className="nav-link">
        Pets
      </NavLink>
      <NavLink to="/sitters/{id}" className="nav-link">
        Sitter
      </NavLink>
      <NavLink to="/owner/1" className="nav-link">
        Owner
      </NavLink>
    </nav>
  );
}

export default NavBar;
