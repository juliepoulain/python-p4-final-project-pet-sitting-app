import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import OwnerProfile from "./OwnerProfile";
import Homepage from "./Homepage";
import VisitPage from "./VisitPage";
import PetsList from "./PetsList";
import SeeMorePetCard from "./SeeMorePetCard";
import Login from "./Login";
import SitterProfile from "./SitterProfile";
import NavBar from "./NavBar"
import HomepageLogout from "./HomepageLogout";

function App() {
  const [ownerId, setOwnerId] = useState("");

  return (
    <Router>
      <NavBar ownerId={ownerId}/>
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            {ownerId ? (
              <Homepage ownerId={ownerId} />
            ) : (
              <HomepageLogout ownerId={ownerId} setOwnerId={setOwnerId} />
            )}
          </Route>

          <Route exact path="/login">
            <Login ownerId={ownerId} setOwnerId={setOwnerId} />
          </Route>

          <Route exact path="/owner/:id">
            {ownerId ? (
              <OwnerProfile ownerId={ownerId} setOwnerId={setOwnerId} />
            ) : (
              <Login ownerId={ownerId} setOwnerId={setOwnerId} />
            )}
          </Route>

          <Route exact path="/visit/:id">
            {ownerId ? (
              <VisitPage ownerId={ownerId} />
            ) : (
              <Login ownerId={ownerId} setOwnerId={setOwnerId} />
            )}
          </Route>

          <Route exact path="/sitters/:id">
            {ownerId ? (
              <SitterProfile />
            ) : (
              <Login ownerId={ownerId} setOwnerId={setOwnerId} />
            )}
          </Route>
          <Route exact path="/pets">
            {ownerId ? (
              <PetsList ownerId={ownerId} />
            ) : (
              <Login ownerId={ownerId} setOwnerId={setOwnerId} />
            )}
          </Route>
          <Route exact path="/pets/:id">
            {ownerId ? (
              <SeeMorePetCard ownerId={ownerId} />
            ) : (
              <Login ownerId={ownerId} setOwnerId={setOwnerId} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
