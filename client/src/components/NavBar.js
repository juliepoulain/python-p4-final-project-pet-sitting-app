import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/pets" className="nav-link">
        pets
      </NavLink>
      <NavLink to="/sitter" className="nav-link">
        sitters
      </NavLink>
      <NavLink to="/owner" className="nav-link">
        owner
      </NavLink>
    </nav>
  );
}

export default NavBar;
