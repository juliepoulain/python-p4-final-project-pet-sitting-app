import React, { useState } from "react";

function SitterCard({ image, name, address, phone, email }) {

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
    </li>
  );
}

export default SitterCard;
