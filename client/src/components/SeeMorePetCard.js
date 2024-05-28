import React from "react";

function SeeMoreCard({ pet }) {
  const { name, animal, image, breed, age, temperament } = pet;

  return (
    <li className="see-more-card">
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>Animal: {animal}</h1>
        <h1>Breed: {breed}</h1>
        <h1>Age: {age}</h1>
        <h1>Temperament: {temperament}</h1>
        <h1>Visits: </h1>
        {/* display visits have a link to display more info about visits */}
      </div>
    </li>
  );
}

export default SeeMoreCard;
