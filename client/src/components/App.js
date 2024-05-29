import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import OwnerProfile from "./OwnerProfile";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import VisitPage from "./VisitPage";
import PetsList from "./PetsList";
import SeeMorePetCard from "./SeeMorePetCard";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/owner">
            <OwnerProfile />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/visit">
            {/* need to add /:id to above URL */}
            <VisitPage />
          </Route>
          <Route exact path="/pets">
            <PetsList />
          </Route>

          <Route exact path="/pets/:id">
            <SeeMorePetCard />
          </Route>

          {/* here is where we should add more routes (home, pets, etc) */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
