import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ ownerId, setOwnerId }) {
  const history = useHistory();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owners/phone/${phone}`)
      .then((r) => {
        if (!r.ok) {
          throw new Error("Network response was not ok");
        }
        return r.json();
      })
      .then((data) => {
        setOwnerId(data.id);
        history.push(`/`);
      })
      .catch((error) => {
        setError(
          "Failed to log in. Please check your phone number and try again."
        );
        console.error("Error logging in:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="phone"
        name="phone"
        type="integer"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default Login;
