import React, { useState } from "react";
import SitterSearch from "./SitterSearch";
import SitterList from "./SitterList";
import homeImage from "../assets/home-image.PNG";

function HomepageLogout({ ownerId, setOwnerId }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="homepage">
        <div className="welcome">
          <div className="welcome-text">
            <h2>
              Going on a trip? Away for the weekend?
              <br />
              Welcome to PetCare - find the best sitter for your pets.
            </h2>
            <h3>
              Our sitters are the best in the game. At PetCare, we believe in
              going above and beyond the old "feed & leave" so you can be rest
              assured your pets will feel loved and cared for while their
              favorite human is away!
            </h3>
          </div>
          <img src={homeImage} className="home-image" alt="Home" />
        </div>
        <h2>Our Sitters:</h2>
        <SitterSearch setSearch={setSearch} />
        <SitterList search={search} />
      </div>
    </>
  );
}

export default HomepageLogout;
