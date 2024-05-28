import React, {useState} from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import OwnerProfile from "./OwnerProfile";
import Homepage from "./Homepage";
import VisitPage from "./VisitPage";
import Login from "./Login";

function App() {
  const [ownerId, setOwnerId] = useState("")
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/owner/:id">
            <OwnerProfile ownerId={ownerId} setOwnerId={setOwnerId}/>
          </Route>
          <Route exact path="/">
            <Homepage ownerId={ownerId}/>
          </Route>
          <Route exact path="/visit">
            {/* need to add /:id to above URL */}
            <VisitPage ownerId={ownerId}/>
          </Route>
          <Route exact path="/login">
            <Login ownerId={ownerId} setOwnerId={setOwnerId}/>
          </Route>
          {/* here is where we should add more routes (home, pets, etc) */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
