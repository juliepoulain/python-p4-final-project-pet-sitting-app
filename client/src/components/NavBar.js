import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ ownerId }) {
  return (
    <nav className="navbar">
      <div className="nav-links-container">
        <NavLink to="/" exact className="nav-link">
          Home
        </NavLink>
        {ownerId ? (
          <NavLink to="/pets" className="nav-link">
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
      </div>
    </nav>
  );
}

export default NavBar;
