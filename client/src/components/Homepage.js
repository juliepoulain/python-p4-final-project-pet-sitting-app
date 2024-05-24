import SitterSearch from "./SitterSearch";
import SitterList from "./SitterList";
import React, { useState } from "react";

function Homepage() {
  const [search, setSearch] = useState("");
  const [sitters, setSitters] = useState([]);

  return (
    <>
      <h4>Nav</h4>
      <h1>PetCare</h1>
      <h2>
        Going on a trip? Away for the weekend?
        <br />
        Welcome to PetCare - find the best sitter for your pets.
      </h2>
      <h3>
        Our sitters are the best in the game. At PetCare, we believe in going
        above and beyond the old "feed & leave" so you can feel rest assured
        your pets will feel loved and cared for while their favorite human is
        away!
      </h3>
      <h3>Find a sitter near you today:</h3>
      <SitterSearch />
      <SitterList />
    </>
  );
}

export default Homepage;