// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SitterProfile = () => {
//   const { id } = useParams();
//   const [sitter, setSitter] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`/sitters/${id}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setSitter(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>{sitter.name}</h1>
//       <img src={sitter.image} alt={sitter.name} />
//       <p>{sitter.bio}</p>
//       <p>Experience: {sitter.experience} years</p>
//       <p>Phone: {sitter.phone}</p>
//       <p>Address: {sitter.address}</p>
//       <p>Email: {sitter.email}</p>
//     </div>
//   );
// };

// export default SitterProfile;
