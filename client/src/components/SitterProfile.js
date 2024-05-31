import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

const SitterProfile = ({ ownerId }) => {
  const { id } = useParams();
  const [sitter, setSitter] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [datesNeeded, setDatesNeeded] = useState("");
  const [petName, setPetName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5555/sitters/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setSitter(data);
      });
  }, [id]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking request sent to:", sitter.email);
    console.log("Dates Needed:", datesNeeded);
    console.log("Pet Name:", petName);
    setShowBookingForm(false);
    setDatesNeeded("");
    setPetName("");
    setSuccessMessage("Booking request sent successfully!");
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  if (!sitter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sitter-profile-container">
      <h2>Sitter Profile</h2>
      <div>
        <p>Name: {sitter.name}</p>
        <img src={sitter.image} alt={sitter.name} className="sitter-image" />
        <p>{sitter.bio}</p>
        <p>Experience: {sitter.experience} years</p>
        <p>Phone: {sitter.phone}</p>
        <p>Address: {sitter.address}</p>
        <p>Email: {sitter.email}</p>
        <button onClick={() => setShowBookingForm(true)}>Book Sitter</button>
      </div>

      {showBookingForm && (
        <form onSubmit={handleBookingSubmit} className="form">
          <h3>Book Sitter</h3>
          <label>
            <input
              placeholder="Dates Needed"
              type="text"
              value={datesNeeded}
              onChange={(e) => setDatesNeeded(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Message to sitter"
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Send Booking Request</button>
          <button type="button" onClick={() => setShowBookingForm(false)}>
            Cancel
          </button>
        </form>
      )}

      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default SitterProfile;
