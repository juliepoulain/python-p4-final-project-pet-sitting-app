import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SitterList = () => {
  const [sitters, setSitters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/sitters")
      .then((response) => response.json())
      .then((data) => {
        setSitters(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Sitters</h1>
      <ul>
        {sitters.map((sitter) => (
          <li key={sitter.id}>
            <Link to={`/sitter/${sitter.id}`}>{sitter.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SitterList;
