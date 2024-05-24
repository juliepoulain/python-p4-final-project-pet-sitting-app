import React, { useEffect } from "react";
import SitterCard from "./SitterCard";

function SitterList({ search, sitters, setSitters }) {
  //   useEffect(() => {
  //     fetch("http://localhost:6001/sitters")
  //       .then((r) => r.json())
  //       .then((sitters) => {
  //         setSitters(sitters);
  //         console.log(sitters);
  //       });
  //   }, []);

  //   const sitterCards = sitters
  //     .filter((sitter) => {
  //       return sitter.name.toLowerCase().includes(search.toLowerCase());
  //     })
  //     .map((sitter) => (
  //       <SitterCard
  //         key={sitter.id}
  //         image={sitter.image}
  //         name={sitter.name}
  //         address={sitter.address}
  //         phone={sitter.phone}
  //         email={sitter.email}
  //       />
  //     ));

  //   return <ul className="cards">{sitterCards}</ul>;
  return <SitterCard />;
}

export default SitterList;
