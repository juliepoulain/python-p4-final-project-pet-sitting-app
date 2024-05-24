import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import OwnerProfile from "./OwnerProfile";
import NavBar from "./NavBar";
import Homepage from "./Home/Homepage";

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
          {/* here is where we should add more routes (home, pets, etc) */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
