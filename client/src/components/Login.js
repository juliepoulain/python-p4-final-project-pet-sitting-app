import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ ownerId, setOwnerId }) {
  const history = useHistory();
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/owners/phone/${phone}`)
      .then((r) => r.json())
      .then((data) => {
          setOwnerId(data.id);
          history.push(`/`);
        })
    console.log(ownerId);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        name="phone"
        type="integer"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
