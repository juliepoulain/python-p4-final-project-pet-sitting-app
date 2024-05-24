import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VisitProfile = () => {
  const { id } = useParams();
  const [visit, setVisit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`/visits/${id}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Visit not found");
//         }
//       })
//       .then((data) => {
//         setVisit(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [id]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

  return (
    <div>
      <h1>Visit Information</h1>
      <h2>Date of Visit: 
        {/* {visit.date} */}
        </h2>
      <h2>Time of Visit: 
        {/* {visit.time} */}
        </h2>
    <p>
        <strong>Pet:</strong>
        {/* {pet.name} */}
    </p>
      <p>
        <strong>Sitter:</strong>
        {/* {sitter.name} */}
      </p>
      <p>
        <strong>Address:</strong> 
        {/* {visit.address} */}
      </p>
      <p>
        <strong>Visit Notes:</strong> 
        {/* {visit.notes} */}
      </p>
    </div>
  );
};

export default VisitProfile;
