import React, { useEffect } from "react";
import VisitCard from "./VisitCard";

function VisitList() {
// const [visits, setVisits] = useState([]);
  //   useEffect(() => {
  //     fetch("http://localhost:6001/visits")
  //       .then((r) => r.json())
  //       .then((visits) => {
  //         setVisits(visits);
  //         console.log(visits);
  //       });
  //   }, []);

  //   const visitCards = visits
  //     .map((visit) => (
  //       <VisitCard
  //         key={visit.id}
  //         date={visit.date}
  //         sitter={sitter.name}
  //         pet={pet.name}                
  //       />
  //     ));

  //   return <ul className="cards">{sitterCards}</ul>;

  return <VisitCard />;
}

export default VisitList;